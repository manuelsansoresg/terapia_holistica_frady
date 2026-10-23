export interface ContactFields {
  name: string;
  phone: string;
}
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

/** Format checks only; they do not claim that a telephone number exists. */
export function validateContactFields(fields: ContactFields): { data: ContactFields; errors: ContactErrors } {
  const name = fields.name.normalize("NFC").trim().replace(/\s+/g, " ");
  const rawPhone = fields.phone.trim();
  let phone = rawPhone.replace(/\D/g, "");
  if (phone.length === 12 && phone.startsWith("52")) phone = phone.slice(2);
  const errors: ContactErrors = {};

  if (!name) errors.name = "Escribe tu nombre.";
  else if (name.length < 2 || name.length > 60) errors.name = "Usa entre 2 y 60 caracteres.";
  else if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(name)) {
    errors.name = "Usa letras; se permiten espacios, guiones y apóstrofos.";
  }

  if (!rawPhone) errors.phone = "Escribe tu teléfono de contacto.";
  else if (!/^(?:\+\s*52[\s().-]*)?[\d\s().-]+$/.test(rawPhone)
    || !/^[2-9]\d{9}$/.test(phone)
    || /^(\d)\1{9}$/.test(phone)) {
    errors.phone = "Escribe un número mexicano de 10 dígitos; también puedes incluir +52.";
  }
  return { data: { name, phone }, errors };
}
