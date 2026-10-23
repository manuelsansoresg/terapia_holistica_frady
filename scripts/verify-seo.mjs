import assert from "node:assert/strict";
import http from "node:http";

// Run against a production build: npm run build, npm start, then npm run seo:check.
// SEO_BASE_URL selects the running server; SEO_EXPECTED_ORIGIN selects its public canonical.
const base = process.env.SEO_BASE_URL || "http://127.0.0.1:3000";
const origin = process.env.SEO_EXPECTED_ORIGIN || "https://fradybienestar.com";
const canonical = new URL("/", origin).href;
const decode = value => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(([tag]) => attrs(tag));
async function get(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  assert.ok(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), path);
  return response;
}

const html = await (await get("/")).text();
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
assert.ok(head, "Initial HTML must contain a head");
assert.match(html, /<html[^>]*lang="es-MX"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /Baño iónico de pies/);
assert.match(head, /<title>Terapia Holística en Nuevo Laredo \| Frady Bienestar<\/title>/);
const meta = tags(head, "meta");
const value = name => meta.find(tag => tag.name === name || tag.property === name)?.content;
assert.ok(value("description")?.includes("Nuevo Laredo, Tamaulipas"));
assert.equal(new URL(value("og:url")).href, canonical);
assert.equal(value("og:locale"), "es_MX");
assert.equal(value("twitter:card"), "summary_large_image");
assert.equal(value("twitter:image"), value("og:image"));
assert.ok(!meta.some(tag => /robots|googlebot/.test(tag.name || "") && /noindex/.test(tag.content)));
assert.deepEqual(tags(head, "link").filter(tag => tag.rel === "canonical").map(tag => new URL(tag.href).href), [canonical]);

const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, json]) => JSON.parse(json));
assert.equal(schemas.length, 1, "Avoid duplicated business entities");
const graph = schemas[0]["@graph"];
const ids = new Set(graph.map(entity => entity["@id"]));
assert.equal(ids.size, graph.length);
for (const type of ["LocalBusiness", "WebSite", "WebPage", "Service"]) assert.ok(graph.some(entity => entity["@type"] === type), type);
const business = graph.find(entity => entity["@type"] === "LocalBusiness");
assert.equal(business.address.addressLocality, "Nuevo Laredo");
assert.match(business.telephone, /^\+52\d{10}$/);
assert.ok(!("aggregateRating" in business) && !("openingHours" in business));
function checkRefs(value) {
  if (!value || typeof value !== "object") return;
  if (value["@id"]) assert.ok(ids.has(value["@id"]), `Unresolved entity: ${value["@id"]}`);
  Object.values(value).forEach(checkRefs);
}
checkRefs(graph);

const anchors = tags(html, "a");
const elementIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => decode(id)));
for (const { href } of anchors) {
  if (href?.startsWith("#")) assert.ok(elementIds.has(href.slice(1)), `Broken anchor: ${href}`);
}
const whatsapp = anchors.filter(tag => tag.href?.startsWith("https://wa.me/"));
assert.ok(whatsapp.length >= 10);
assert.ok(!whatsapp.some(tag => new URL(tag.href).pathname === "/528345472783"), "Landline must not link to WhatsApp");
assert.equal(anchors.filter(tag => tag.href === "tel:+528345472783").length, 2, "Landline must allow calls in contact and footer");
for (const { href } of whatsapp) {
  const url = new URL(href);
  assert.match(url.pathname, /^\/52\d{10}$/);
  assert.ok(url.searchParams.get("text"));
}
const images = tags(html, "img");
for (const image of images) {
  assert.ok(image.alt?.trim(), "Image alt missing");
  assert.ok((Number(image.width) > 0 && Number(image.height) > 0) || (image["data-nimg"] === "fill" && image.sizes), "Image must have dimensions or use responsive fill with reserved CSS ratio");
}
const assets = new Set(images.map(image => image.src));
for (const name of ["og:image", "twitter:image"]) {
  const url = new URL(value(name));
  assets.add(url.pathname);
}
const video = tags(html, "video")[0];
assert.equal(video.preload, "none");
assert.equal(video.width, video.height);
assert.ok(video.poster);
assets.add(video.poster);
for (const src of assets) assert.equal((await get(src)).status, 200);
for (const { src } of tags(html, "source")) {
  // A range request verifies playback delivery without downloading the whole video.
  const response = await fetch(new URL(src, base), { headers: { Range: "bytes=0-1023" } });
  assert.equal(response.status, 206);
  assert.match(response.headers.get("content-type"), /video\/mp4/);
  await response.body.cancel();
}
const robots = await (await get("/robots.txt")).text();
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /Allow: \/\s/);
assert.ok(!/Disallow: \/\s/.test(robots));
assert.ok(robots.includes(`${origin}/sitemap.xml`));
const sitemap = await (await get("/sitemap.xml")).text();
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => loc.replace(/\/$/, "")), [origin]);
const missing = await fetch(new URL("/ruta-inexistente-seo", base));
assert.equal(missing.status, 404);
assert.match(await missing.text(), /name="robots" content="noindex"/);

// Test host normalization locally; public TLS/DNS/Cloudflare must be checked after deployment.
if (new URL(base).protocol === "http:") {
  await new Promise((resolve, reject) => {
    const request = http.get(new URL("/ruta?origen=seo", base), { headers: { Host: "www.fradybienestar.com" } }, response => {
      try {
        assert.equal(response.statusCode, 308);
        assert.equal(response.headers.location, "https://fradybienestar.com/ruta?origen=seo");
        response.resume();
        resolve();
      } catch (error) { reject(error); }
    });
    request.on("error", reject);
  });
}
console.log(`SEO OK: initial HTML, canonical, social metadata, JSON-LD, ${images.length} images, ${whatsapp.length} WhatsApp links, anchors, video, sitemap, robots and 404.`);
