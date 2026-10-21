import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { MediaSlot } from "@/components/ui/media-slot";
import { SectionHeading } from "@/components/ui/section-heading";

export function Introduction() {
  return <section id="experiencia" className="section introduction" aria-label="La experiencia">
    <div className="container intro-grid">
      <div className="intro-art">
        <MediaSlot image={business.images.introduction} className="intro-media" sizes="(max-width: 767px) 92vw, 48vw" />
        <MediaSlot image={business.images.introductionDetail} className="intro-detail" sizes="(max-width: 767px) 55vw, 280px" />
        <p className="art-caption">Imágenes ilustrativas generadas con IA.</p>
      </div>
      <div className="intro-copy"><SectionHeading number="01" eyebrow="La experiencia" title="Un momento que comienza contigo." />
        <p>Agua tibia, un baño de pies y tiempo para dejar de mirar el reloj.</p>
        <p className="muted">La sesión utiliza un dispositivo iónico en el agua mientras permaneces sentado. El equipo te explica el proceso y resuelve tus preguntas antes de comenzar.</p>
        <blockquote>Sin prisa.<br /><em>Con tiempo para ti.</em></blockquote>
        <a className="text-link" href="#sesion">Conoce cada momento <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
