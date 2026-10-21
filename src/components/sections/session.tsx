import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const steps = [
  { title: "Te recibimos y resolvemos tus dudas", text: "Antes de comenzar, el equipo te explica la sesión. Comparte cualquier condición de salud y las dudas que tengas sobre el uso del dispositivo." },
  { title: "Preparamos el baño de pies", text: "Colocas los pies en un recipiente con agua tibia. El equipo prepara el dispositivo iónico y los materiales de la sesión." },
  { title: "Disfruta de tu momento", text: "Permaneces sentado mientras se utiliza el dispositivo en el agua. Dedica ese tiempo a descansar; avisa al equipo si sientes alguna molestia." },
  { title: "Cierra tu pausa con calma", text: "Al terminar, retiras y secas tus pies. Puedes resolver tus dudas finales y consultar disponibilidad si deseas otra visita." },
];
const recommendations = [
  { label: "Antes de tu sesión", title: "Ven con comodidad.", items: ["Elige ropa cómoda que permita descubrir tus pies y tobillos.", "Mantén tu hidratación habitual y evita llegar tras una comida pesada.", "Consulta al reservar las indicaciones sobre alimentos, alcohol y cafeína.", "Si tienes una condición de salud, pregunta a tu profesional de salud antes de agendar."] },
  { label: "Después de tu sesión", title: "Continúa a tu ritmo.", items: ["Seca bien tus pies y vuelve a colocarte el calzado con calma.", "Mantén tus hábitos de hidratación y descanso, según tus necesidades.", "Confirma con el equipo cualquier indicación para después de tu visita.", "Descansa si lo necesitas. Si aparece alguna molestia, consulta a un profesional de salud."] },
];

export function Session() {
  return <section id="sesion" className="section section-white" aria-label="Cómo es una sesión">
    <div className="container session-grid">
      <div><SectionHeading number="03" eyebrow="Cómo funciona" title="Un baño de pies. Una pausa para ti." description="Conoce el recorrido de tu sesión de desintoxicación iónica, desde la bienvenida hasta el último momento." /><p className="session-duration"><FontAwesomeIcon icon={faClock} aria-hidden="true" /> Duración aproximada: {business.sessionDuration}.</p><WhatsAppLink placement="session" variant="text">Consultar precio y agendar</WhatsAppLink></div>
      <ol className="session-steps">{steps.map((step, index) => <li key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
    </div>
    <div className="container visit-guide" aria-labelledby="visit-guide-title">
      <div className="visit-guide-heading"><p className="eyebrow">Prepara tu momento</p><h3 id="visit-guide-title">Pequeños detalles para tu visita.</h3></div>
      <div className="recommendation-grid">{recommendations.map((group) => <div className="recommendation" key={group.label}><p className="eyebrow">{group.label}</p><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item}><FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" /><span>{item}</span></li>)}</ul></div>)}</div>
      <p className="visit-guide-note">Estas sugerencias son de comodidad personal y no sustituyen indicaciones médicas. Sigue las recomendaciones de tu profesional de salud.</p>
    </div>
  </section>;
}
