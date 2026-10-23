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
      </div>
      <div className="intro-copy"><SectionHeading number="01" eyebrow="La experiencia" title="Baño iónico de pies en Frady." />
        <p>Agua tibia, un baño de pies y tiempo para dejar de mirar el reloj.</p>
        <p className="muted">En nuestro espacio de Nuevo Laredo, Tamaulipas, la sesión utiliza un dispositivo iónico en el agua mientras permaneces sentado. El equipo te explica el proceso y resuelve tus preguntas antes de comenzar.</p>
        <blockquote>Sin prisa.<br /><em>Con tiempo para ti.</em></blockquote>
        <a className="text-link" href="#sesion">Conoce cada momento <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="container service-approach" id="enfoque" aria-labelledby="approach-title">
      <div className="approach-heading"><div><p className="eyebrow">Para decidir con confianza</p><h3 id="approach-title">Qué incluye tu visita.</h3></div><p>El servicio se conoce como desintoxicación iónica. En Frady lo presentamos como una experiencia de relajación y autocuidado.</p></div>
      <ul className="approach-points">
        <li><span aria-hidden="true">01</span><h4>Baño iónico de pies</h4><p>Agua tibia y un dispositivo iónico mientras descansas sentado.</p></li>
        <li><span aria-hidden="true">02</span><h4>Masaje de cortesía</h4><p>Un momento de cuidado para tus pies al terminar el baño.</p></li>
        <li><span aria-hidden="true">03</span><h4>Una taza de té</h4><p>Incluida para cerrar tu visita con calma.</p></li>
        <li><span aria-hidden="true">04</span><h4>Espacio para tus dudas</h4><p>Consulta el precio, las precauciones y los horarios antes de reservar.</p></li>
      </ul>
      <p className="approach-note">No se ha demostrado que el baño iónico elimine toxinas ni que prevenga o trate enfermedades. No sustituye la atención médica.</p>
    </div>
  </section>;
}
