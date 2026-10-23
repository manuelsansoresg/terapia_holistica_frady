import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faClock, faGift } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaSlot } from "@/components/ui/media-slot";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const steps = [
  { title: "Te recibimos", text: "Resolvemos tus dudas y te explicamos cómo será la sesión antes de comenzar." },
  { title: "Preparamos el baño", text: "El equipo prepara el agua tibia y el dispositivo iónico para tu baño de pies." },
  { title: "Disfrutas de tu sesión", text: "Permaneces sentado con los pies en el agua. Si algo te incomoda, avisa al equipo." },
  { title: "Un regalo para ti", text: "Al finalizar, disfruta de un relajante masaje en los pies y una taza de té de cortesía para cerrar tu experiencia con calma." },
];
export function Session() {
  return <section id="sesion" className="section session" aria-label="Así es tu sesión"><div className="container">
    <div className="session-heading"><SectionHeading number="03" eyebrow="Así es tu sesión" title="Así comienza tu momento de bienestar." /><p className="duration-label"><FontAwesomeIcon icon={faClock} aria-hidden="true" /><span>Duración aproximada<strong>{business.sessionDuration}</strong></span></p></div>
    <ol className="session-story">{steps.map((step, index) => <li key={step.title}><MediaSlot image={business.images.process[index]} className="step-media" sizes="(max-width: 767px) 85vw, (max-width: 1023px) 44vw, 290px" /><div className="step-copy"><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div></li>)}</ol>
    <aside id="regalo" className="session-gift" aria-labelledby="session-gift-title">
      <FontAwesomeIcon icon={faGift} aria-hidden="true" />
      <div><p className="eyebrow">Incluido en tu visita · De cortesía</p><h3 id="session-gift-title">¡Un regalo especial para ti! 🌿</h3><p>Al finalizar tu sesión de desintoxicación iónica de pies, recibe un relajante masaje en los pies y disfruta de una deliciosa taza de té, para completar tu experiencia de bienestar y relajación.</p><p className="gift-closing">✨ Un momento para consentirte, descansar y renovar tu energía.</p></div>
    </aside>
    <div className="bath-progression" aria-labelledby="bath-progression-title">
      <div><p className="eyebrow">Durante tu baño de pies</p><h3 id="bath-progression-title">De 20 a 30 minutos para ti.</h3><p>Esta ilustración muestra el aspecto que puede tomar el agua durante el uso del dispositivo iónico, junto con una escala de pH como referencia visual.</p></div>
      <figure><Image src={business.images.bathProgression.src} alt={business.images.bathProgression.alt} width={business.images.bathProgression.width} height={business.images.bathProgression.height} sizes="(max-width: 767px) 90vw, 75vw" /><figcaption>Imagen ilustrativa. El color del agua puede variar por las reacciones del dispositivo y los minerales presentes; no demuestra eliminación de toxinas ni permite conocer el pH del cuerpo.</figcaption></figure>
    </div>
    <div className="visit-guide" aria-labelledby="visit-guide-title"><div><p className="eyebrow" id="visit-guide-title">Para disfrutar tu visita</p><p className="guide-intro">Pequeños detalles.<br /><em>Menos dudas.</em></p></div><div className="guide-column"><h3>Antes de llegar</h3><p>Ven con ropa cómoda y mantén tu hidratación habitual. Confirma al reservar las indicaciones sobre alimentos, alcohol y cafeína.</p><a className="inline-link" href="#preguntas">Consulta las precauciones antes de agendar</a></div><div className="guide-column"><h3>Al terminar</h3><p>Seca bien tus pies y retoma tus actividades con calma. Sigue las indicaciones de tu profesional de salud y consulta si aparece alguna molestia.</p></div></div>
    <div className="session-action"><p>Tu primera visita empieza con una conversación.</p><WhatsAppLink placement="session">Consultar precio y disponibilidad</WhatsAppLink></div>
  </div></section>;
}
