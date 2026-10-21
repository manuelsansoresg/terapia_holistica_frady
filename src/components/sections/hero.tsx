import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { MediaSlot } from "@/components/ui/media-slot";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Hero() {
  return <section id="inicio" aria-labelledby="hero-title" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">Terapia Holística Frady <span aria-hidden="true">·</span> Nuevo Laredo</p>
        <h1 id="hero-title">Baja el ritmo.<br /><em>Vuelve a ti.</em></h1>
        <p className="hero-service">Sesiones de desintoxicación<br className="desktop-break" /> iónica para pies</p>
        <p className="hero-description">Dedica de 30 a 45 minutos a una experiencia de baño iónico para pies, pensada para desconectarte de la rutina y disfrutar de un momento de tranquilidad.</p>
        <div className="hero-actions"><WhatsAppLink placement="hero">Agendar mi sesión</WhatsAppLink><a className="text-link" href="#experiencia">Descubre la experiencia <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></div>
        <p className="hero-location">{business.sessionDuration} <span>·</span> Nuevo Laredo <span>·</span> Atención con cita</p>
      </div>
      <div className="hero-visual">
        <MediaSlot image={business.images.hero} className="hero-media" sizes="(max-width: 767px) 100vw, (max-width: 1400px) 48vw, 620px" priority />
        <div className="hero-duration"><FontAwesomeIcon icon={faClock} aria-hidden="true" /><span><strong>30–45</strong> minutos para hacer una pausa</span></div>
        <div className="hero-caption"><span>Baño iónico para pies</span></div>
      </div>
    </div>
    <div className="container hero-footnote"><span>El arte de dedicarte tiempo.</span><a href="#sesion">Así es tu sesión <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div>
  </section>;
}
