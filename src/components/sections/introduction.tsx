import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { MediaSlot } from "@/components/ui/media-slot";
import { SectionHeading } from "@/components/ui/section-heading";

export function Introduction() {
  return <section id="experiencia" className="section section-white" aria-label="La experiencia">
    <div className="container intro-grid">
      <div className="intro-image-wrap"><MediaSlot image={business.images.introduction} label="Pequeños rituales de bienestar" note="Fotografía ilustrativa" className="intro-media" /><p className="image-side-note">MENOS PRISA. MÁS PRESENTE.</p></div>
      <div className="intro-copy"><SectionHeading number="01" eyebrow="La experiencia" title="El bienestar empieza con una pausa." />
        <p>Entre las responsabilidades y el ritmo de cada día, también hay lugar para ti.</p>
        <p className="muted">En Terapia Holística Frady, la desintoxicación iónica consiste en un baño de pies con agua tibia y un dispositivo iónico. Una experiencia sin agujas, centrada en el cuidado personal y en hacer espacio para la calma.</p>
        <blockquote>Equilibrio, bienestar y armonía. Un momento para conectar contigo.</blockquote>
        <a className="text-link" href="#sesion">Así será tu visita <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
