"use client";
import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const questions = [
  { question: "¿Qué es la desintoxicación iónica?", answer: "Es el nombre comercial de un baño de pies con agua tibia y un dispositivo iónico. Se ofrece como una experiencia de relajación y autocuidado, no como tratamiento médico ni como un método demostrado para eliminar toxinas." },
  { question: "¿Cuánto dura una sesión?", answer: "Aproximadamente de 30 a 45 minutos. Al agendar, el equipo te ayudará a elegir un horario y confirmar los detalles de tu visita." },
  { question: "¿Qué se siente durante el baño iónico?", answer: "Permaneces sentado con los pies en agua tibia. La experiencia está pensada para ser cómoda. Si el agua está demasiado caliente o sientes dolor, irritación o cualquier molestia, avisa al equipo y detén la sesión." },
  { question: "¿Cómo debo prepararme?", answer: "Ven con ropa cómoda que permita descubrir pies y tobillos. Mantén tu hidratación habitual y confirma al reservar las indicaciones sobre alimentos, alcohol y cafeína. Sigue siempre las indicaciones de tu profesional de salud." },
  { question: "¿Quiénes deben consultar antes de realizarla?", answer: "Evita el baño iónico si tienes marcapasos u otro dispositivo eléctrico implantado, heridas abiertas en los pies o neuropatía diabética. Si estás embarazada, deseas reservar para un menor o tienes otra condición médica, consulta antes a un profesional de salud. No es adecuado para todas las personas ni se garantiza seguridad absoluta." },
  { question: "¿Cómo puedo reservar y consultar el precio?", answer: "Escríbenos por WhatsApp. Confirmaremos contigo el precio vigente, la disponibilidad y la ubicación antes de reservar. Puedes resolver tus dudas sin comprometerte a varias sesiones." },
  { question: "¿Qué dice la evidencia sobre las toxinas?", answer: "No hay evidencia científica válida que respalde que los baños iónicos extraigan toxinas o metales pesados del cuerpo. El cambio de color del agua no demuestra una desintoxicación. No sustituyen atención médica ni tratamientos indicados por profesionales de salud." },
  { question: "¿Qué puedo esperar de la primera sesión?", answer: "Un tiempo para hacer una pausa y dedicarte al cuidado personal. Las sensaciones son individuales; no se garantizan cambios en el sueño, la energía, el dolor ni otros resultados de salud." },
  { question: "¿Puedo organizar cuatro sesiones?", answer: "Puedes consultar disponibilidad para organizar cuatro visitas, por ejemplo una por semana. Antes de reservar varias, confirma si la experiencia es adecuada para ti. Es una opción de agenda, no una pauta médica ni una garantía de resultados." },
  { question: "¿Cada cuánto puedo volver?", answer: "Si deseas continuar, puedes consultar fechas cada dos o tres semanas. La frecuencia se acuerda al reservar; no existe una frecuencia universal ni necesitas comprometerte con varias visitas." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [showMore, setShowMore] = useState(false);
  const id = useId();
  function renderQuestion(item: typeof questions[number], index: number) {
    return <div key={item.question} className={`faq-item ${open === index ? "is-open" : ""}`}>
      <h3><button type="button" id={`${id}-q-${index}`} aria-expanded={open === index} aria-controls={`${id}-a-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><FontAwesomeIcon icon={faChevronDown} aria-hidden="true" /></button></h3>
      <div id={`${id}-a-${index}`} role="region" aria-labelledby={`${id}-q-${index}`} className="faq-answer" inert={open !== index}><div><p>{item.answer}</p></div></div>
    </div>;
  }
  return <section id="preguntas" className="section faq" aria-label="Preguntas frecuentes"><div className="container faq-grid">
    <div className="faq-intro"><SectionHeading number="04" eyebrow="Antes de tu visita" title="Respuestas para venir con calma." description="Lo que necesitas saber para decidir y preparar tu primera sesión." /><p className="faq-aside">La confianza también empieza por una conversación clara.</p></div>
    <div><div className="faq-list">{questions.slice(0, 6).map(renderQuestion)}<div id={`${id}-more`} hidden={!showMore}>{questions.slice(6).map((item, index) => renderQuestion(item, index + 6))}</div></div>
      <button type="button" className="faq-more" aria-expanded={showMore} aria-controls={`${id}-more`} onClick={() => { setShowMore(!showMore); if (showMore && open !== null && open >= 6) setOpen(null); }}><span>{showMore ? "Mostrar solo las preguntas principales" : "Evidencia científica y otras preguntas"}</span><FontAwesomeIcon icon={showMore ? faMinus : faPlus} aria-hidden="true" /></button>
      <div className="faq-action"><WhatsAppLink placement="faq" variant="text">¿Tienes otra duda? Escríbenos</WhatsAppLink></div>
    </div>
  </div></section>;
}
