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
        <h1 id="hero-title">Baño iónico de pies.<br /><em>Un rato para ti.</em></h1>
        <p className="hero-service">Relajación y autocuidado en {business.city}</p>
        <p className="hero-description">¿Necesitas una pausa después de un día largo? Descansa con los pies en agua tibia durante {business.sessionDuration}, con atención cercana de principio a fin.</p>
        <div className="hero-actions"><WhatsAppLink placement="hero" intent="booking">Agenda tu sesión</WhatsAppLink><a className="text-link" href="#experiencia" data-service-link>Conoce el baño iónico <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></div>
        <a className="hero-gift" href="#regalo"><strong>Tu sesión incluye masaje de pies y té de cortesía.</strong><span>Conoce lo que te espera en tu visita <span aria-hidden="true">→</span></span></a>
        <p className="hero-location">{business.sessionDuration} <span>·</span> Nuevo Laredo <span>·</span> Atención con cita</p>
      </div>
      <div className="hero-visual">
        <MediaSlot image={business.images.hero} className="hero-media" sizes="(max-width: 767px) 100vw, (max-width: 1400px) 48vw, 620px" priority />
        <div className="hero-duration"><FontAwesomeIcon icon={faClock} aria-hidden="true" /><span><strong>{business.sessionDurationRange}</strong> minutos para hacer una pausa</span></div>
        <div className="hero-caption"><span>Baño iónico para pies</span></div>
      </div>
    </div>
    <div className="container hero-footnote"><span>El arte de dedicarte tiempo.</span><a href="#sesion">Así es tu sesión <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div>
  </section>;
}
