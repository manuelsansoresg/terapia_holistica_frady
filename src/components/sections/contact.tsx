import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { business, getMapsUrl } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Contact() {
  return <section id="contacto" className="section contact" aria-label="Ubicación y contacto"><div className="container contact-grid">
    <div><SectionHeading number="06" eyebrow="Hablemos de tu visita" title="Estamos cerca. Empecemos por conversar." /><p className="section-description">Consulta el precio, encuentra un horario y recibe los detalles para llegar. Te atendemos por WhatsApp.</p><div className="contact-actions"><WhatsAppLink placement="contact">Consultar disponibilidad</WhatsAppLink><span className="contact-phone">{business.phone.display} · Contacto principal</span></div><div className="secondary-contact"><span>Contacto alternativo</span><WhatsAppLink placement="contact-secondary" variant="text" phone={business.secondaryPhone.international}>{business.secondaryPhone.display}</WhatsAppLink></div></div>
    <div className="location-panel"><p className="eyebrow"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />Tamaulipas, México</p><p className="location-city">Nuevo<br /><em>Laredo.</em></p><address>{business.location.address ?? "La ubicación exacta se confirma al agendar tu visita."}</address>
      {business.location.mapEmbedUrl && <iframe src={business.location.mapEmbedUrl} title={`Ubicación de ${business.name}`} loading="lazy" referrerPolicy="no-referrer" allowFullScreen />}
      <div className="location-links"><WhatsAppLink placement="contact" variant="text">Solicitar ubicación</WhatsAppLink><a className="text-link" href={getMapsUrl()} target="_blank" rel="noopener noreferrer">{business.location.address || business.location.mapsUrl ? "Abrir ubicación en Maps" : "Ver la ciudad en Google Maps"}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a></div>
    </div>
  </div></section>;
}
