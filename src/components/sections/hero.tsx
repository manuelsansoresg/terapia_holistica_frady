import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLocationDot, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { MediaSlot } from "@/components/ui/media-slot";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Hero() {
  return <section id="inicio" aria-labelledby="hero-title" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="gold-rule" />Un momento de bienestar</p>
        <h1 id="hero-title">Baja el ritmo.<br />Vuelve <em>a ti.</em></h1>
        <p className="hero-service">Desintoxicación iónica en Nuevo Laredo</p>
        <p className="hero-description">Una sesión de baño de pies iónico de 30 a 45 minutos para hacer una pausa, relajarte y dedicar tiempo a tu bienestar.</p>
        <div className="hero-actions"><WhatsAppLink placement="hero">Agendar mi sesión</WhatsAppLink><a className="explore-link" href="#experiencia">Conoce la experiencia <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div>
        <p className="hero-location"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />{business.city}, {business.region}<span>{business.sessionDuration} · Con cita</span></p>
      </div>
      <div className="hero-visual">
        <MediaSlot image={business.images.hero} label="El arte de hacer una pausa" note="Fotografía ilustrativa" className="hero-media" priority />
        <div className="hero-seal"><FontAwesomeIcon icon={faLeaf} aria-hidden="true" /><span>Tiempo<br /><i>para ti</i></span></div>
        <span className="image-index" aria-hidden="true">01 — LA CALMA COMIENZA AQUÍ</span>
      </div>
    </div>
    <div className="container hero-footnote"><span>Una pausa consciente. Un momento propio.</span><a href="#sesion">Descubre tu próxima pausa <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div>
  </section>;
}
