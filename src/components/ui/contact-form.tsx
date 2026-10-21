"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { business, getWhatsAppUrl } from "@/config/business";
import { validateContactFields, type ContactFields, type ContactErrors } from "@/lib/contact-validation";
import { trackConversion } from "@/lib/analytics";

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<ContactFields>({ name: "", phone: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [invalidSubmit, setInvalidSubmit] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  function change(field: keyof ContactFields, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) setErrors(previous => ({ ...previous, [field]: validateContactFields(next).errors[field] }));
    setInvalidSubmit(false);
  }
  function blur(field: keyof ContactFields) {
    setErrors(previous => ({ ...previous, [field]: validateContactFields(values).errors[field] }));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { data, errors: nextErrors } = validateContactFields(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setInvalidSubmit(true);
      (nextErrors.name ? nameInput : phoneInput).current?.focus();
      return;
    }
    const message = `Hola, me interesa recibir información y consultar disponibilidad en ${business.name}.\n\nNombre: ${data.name}\nTeléfono de contacto: +52 ${data.phone}`;
    trackConversion({ name: "whatsapp_click", placement: "contact-form" });
    window.location.assign(getWhatsAppUrl(business.phone.international, message));
  }

  return <form className="contact-form" aria-label="Solicitar información" noValidate onSubmit={submit}>
    <div className="contact-form-fields">
      <div className="form-field"><label htmlFor={`${id}-name`}>Tu nombre <span>(obligatorio)</span></label><input ref={nameInput} id={`${id}-name`} name="name" type="text" autoComplete="given-name" required minLength={2} maxLength={60} value={values.name} onChange={event => change("name", event.target.value)} onBlur={() => blur("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-error` : undefined} placeholder="¿Cómo te llamas?" />{errors.name && <p className="field-error" id={`${id}-name-error`}>{errors.name}</p>}</div>
      <div className="form-field"><label htmlFor={`${id}-phone`}>Teléfono <span>(obligatorio)</span></label><input ref={phoneInput} id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel-national" required maxLength={24} value={values.phone} onChange={event => change("phone", event.target.value)} onBlur={() => blur("phone")} aria-invalid={!!errors.phone} aria-describedby={`${id}-phone-hint${errors.phone ? ` ${id}-phone-error` : ""}`} placeholder="Tu número de 10 dígitos" /><p className="field-hint" id={`${id}-phone-hint`}>Número mexicano de 10 dígitos; +52 opcional.</p>{errors.phone && <p className="field-error" id={`${id}-phone-error`}>{errors.phone}</p>}</div>
    </div>
    {invalidSubmit && <p role="alert" className="form-alert">Revisa los campos señalados para continuar.</p>}
    <button type="submit" className="whatsapp-link button-primary"><FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /><span>Continuar en WhatsApp</span></button>
    <p className="form-note">Abrirás WhatsApp con tus datos. Revisa y envía el mensaje para completar tu solicitud.</p>
  </form>;
}
