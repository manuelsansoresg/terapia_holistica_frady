import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { business, navigation } from "@/config/business";
import { BrandLogo } from "@/components/ui/brand-logo";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><div className="footer-brand"><BrandLogo inverse /><p>{business.name}</p><address className="footer-address">{business.location.address}<br />{business.city}, {business.region}.</address></div>
      <nav aria-label="Navegación del pie de página" className="footer-nav"><p className="footer-label">Explora</p>{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
      <div className="footer-contact"><p className="footer-label">Tu próxima visita</p><WhatsAppLink placement="footer" variant="text">{business.phone.display}</WhatsAppLink><span>Información y citas por WhatsApp</span><a href="#inicio" className="back-top">Volver al inicio <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span>{business.privacyUrl ? <a href={business.privacyUrl}>Aviso de privacidad</a> : <span>Nuevo Laredo · Atención con cita</span>}</div>
  </div></footer>;
}
