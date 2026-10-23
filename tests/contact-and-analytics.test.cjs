const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function load(file, globals = {}) {
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const scope = { exports: {}, ...globals };
  vm.runInNewContext(output, scope);
  return scope.exports;
}
const { validateContactFields: validate } = load('src/lib/contact-validation.ts');

test('accepts accented names and normalizes Mexican contact numbers', () => {
  for (const name of ['Ana María', 'José O’Neill', 'Jean-Luc', 'María del Carmen']) {
    for (const phone of ['+52 867 474 8059', '8674748059', '(867) 474-8059']) {
      const result = validate({ name, phone });
      assert.equal(Object.keys(result.errors).length, 0);
      assert.equal(result.data.phone, '8674748059');
    }
  }
  assert.equal(validate({ name: '  Ana   María  ', phone: '8674748059' }).data.name, 'Ana María');
});
test('blocks empty or malformed contact data', () => {
  for (const phone of ['', '123', '1111111111', '867ABC8059', '8674748059999']) {
    assert.ok(validate({ name: 'Ana', phone }).errors.phone);
  }
  for (const name of ['', 'A', '<script>', 'Ana123']) {
    assert.ok(validate({ name, phone: '8674748059' }).errors.name);
  }
});
test('conversion hooks are safe during server rendering', () => {
  const { trackConversion } = load('src/lib/analytics.ts');
  assert.doesNotThrow(() => trackConversion({ name: 'whatsapp_click', placement: 'hero' }));
});
test('emits the existing integration event for every supported conversion', () => {
  const events = [];
  const { trackConversion } = load('src/lib/analytics.ts', {
    window: { dispatchEvent: event => events.push(event) },
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
  });
  for (const name of ['whatsapp_click', 'booking_click', 'service_select', 'contact_handoff', 'video_play']) {
    trackConversion({ name, placement: 'hero', service: 'ionic-footbath' });
  }
  assert.equal(events.length, 5);
  for (const event of events) {
    assert.equal(event.type, 'frady:conversion');
    assert.deepEqual(Object.keys(event.detail).sort(), ['name', 'placement', 'service']);
  }
});
test('WhatsApp links preserve the configured destination and safely encode the message', () => {
  const { business, contactPhones, getWhatsAppUrl } = load('src/config/business.ts', {
    process: { env: {} },
    require: () => ({ default: { src: '/image.png', width: 100, height: 100 } }),
  });
  for (const phone of contactPhones.filter(phone => phone.whatsapp)) {
    const message = 'Hola, me interesa baño iónico.\nNombre: Ana & José + consulta?';
    const url = new URL(getWhatsAppUrl(phone.international, message));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, `/${phone.international}`);
    assert.equal(url.searchParams.get('text'), message);
    assert.equal([...url.searchParams].length, 1);
  }
  assert.equal(new URL(getWhatsAppUrl()).pathname, `/${business.phone.international}`);
});
