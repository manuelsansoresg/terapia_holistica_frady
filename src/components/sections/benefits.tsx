import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMoon, faWater, faHeart } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaSlot } from "@/components/ui/media-slot";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const themes = [
  { title: "Relajación", text: "Bajar el ritmo, lejos de las prisas del día.", icon: faLeaf },
  { title: "Tiempo para descansar", text: "Hacer una pausa sin otra tarea que estar aquí.", icon: faMoon },
  { title: "Tranquilidad", text: "Dedicar un momento a disfrutar del presente.", icon: faWater },
  { title: "Cuidado personal", text: "Darte espacio entre todo lo que haces por los demás.", icon: faHeart },
];
export function Benefits() {
  return <section id="bienestar" className="section benefits" aria-label="Objetivos de bienestar"><div className="container">
    <div className="benefits-heading"><SectionHeading number="02" eyebrow="Lo que buscamos" title="Hay pausas que merecen un lugar en tu día." /><p>No hace falta una ocasión especial.<br />Solo un momento que sea tuyo.</p></div>
    <div className="benefits-composition">
      <div className="benefits-art"><MediaSlot image={business.images.benefits} className="benefits-media" sizes="(max-width: 767px) 90vw, 480px" /></div>
      <div className="benefit-list">{themes.map((theme, index) => <div className="benefit-item" key={theme.title}><span className="item-number">0{index + 1}</span><div><h3><FontAwesomeIcon icon={theme.icon} aria-hidden="true" />{theme.title}</h3><p>{theme.text}</p></div></div>)}<WhatsAppLink placement="benefits" variant="text">Consultar disponibilidad</WhatsAppLink></div>
    </div>
    <p className="wellness-note">Objetivos de relajación y autocuidado. Las sensaciones son individuales; no se garantizan resultados médicos.</p>
  </div></section>;
}
