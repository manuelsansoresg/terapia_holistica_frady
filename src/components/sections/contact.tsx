import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { business, contactPhones, getMapsUrl } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { ContactPhoneLink } from "@/components/ui/contact-phone-link";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Contact() {
  return <section id="contacto" className="section contact" aria-label="Ubicación y contacto"><div className="container contact-grid">
    <div><SectionHeading number="07" eyebrow="Hablemos de tu visita" title="Hablemos de tu próxima sesión." /><p className="section-description">Consulta precio y horarios por WhatsApp. Puedes escribirnos directamente o preparar aquí tu mensaje; confirmaremos contigo los detalles de tu cita.</p><div className="contact-direct"><WhatsAppLink placement="contact" intent="booking">Resuelve tus dudas por WhatsApp</WhatsAppLink><p className="form-note">O prepara tu consulta con tu nombre y teléfono:</p></div><ContactForm /><div className="contact-actions"><p className="contact-phone">Información y citas por WhatsApp o teléfono</p><div className="contact-phone-list">{contactPhones.map((phone, index) => <ContactPhoneLink key={phone.international} placement={index === 0 ? "contact" : "contact-secondary"} phone={phone} />)}</div></div></div>
    <div className="location-panel"><p className="eyebrow"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />Tamaulipas, México</p><p className="location-city">Nuevo<br /><em>Laredo.</em></p><address>{business.location.address ?? "La ubicación exacta se confirma al agendar tu visita."}</address>
      {business.location.mapEmbedUrl && <figure className="location-map"><iframe src={business.location.mapEmbedUrl} title={`Ubicación de ${business.name} en Google Maps`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><figcaption>Bocanegra 918 · Col. Victoria · Nuevo Laredo</figcaption></figure>}
      <div className="location-links"><WhatsAppLink placement="contact" variant="text" message="Hola, me gustaría confirmar cómo llegar a Frady en Bocanegra 918, local 3.">Consultar cómo llegar</WhatsAppLink><a className="text-link" href={getMapsUrl()} target="_blank" rel="noopener noreferrer">{business.location.address || business.location.mapsUrl ? "Abrir ubicación en Maps" : "Ver la ciudad en Google Maps"}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a></div>
    </div>
  </div></section>;
}
