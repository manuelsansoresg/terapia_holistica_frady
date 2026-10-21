"use client";
import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/ui/section-heading";
const questions = [
  { question: "¿Qué es la desintoxicación iónica?", answer: "Es el nombre comercial de una experiencia de baño de pies con agua tibia y un dispositivo iónico. Se ofrece como un momento de relajación y autocuidado, no como un tratamiento médico." },
  { question: "¿Cuánto dura una sesión y cuál es el precio?", answer: "La duración aproximada es de 30 a 45 minutos. Escríbenos por WhatsApp para consultar el precio vigente y encontrar un horario para ti." },
  { question: "¿Es dolorosa?", answer: "La experiencia está pensada para ser cómoda y relajante. Si el agua está demasiado caliente o sientes dolor, irritación o cualquier molestia, avisa de inmediato al equipo y detén la sesión." },
  { question: "¿Es segura y quién puede realizarla?", answer: "No es adecuada para todas las personas ni puede garantizarse una seguridad del 100 %. Evita el baño iónico si tienes marcapasos u otro dispositivo eléctrico implantado, heridas abiertas en los pies o neuropatía diabética. Si estás embarazada, deseas reservar para un menor o tienes otra condición médica, consulta antes con un profesional de salud." },
  { question: "¿Cómo me preparo y qué hago después?", answer: "Ven con ropa cómoda y mantén tu hidratación habitual. Antes de la visita, confirma las indicaciones sobre comida, alcohol y cafeína. Al terminar, seca bien tus pies y retoma tus actividades con calma. Encontrarás más sugerencias en la sección de tu sesión." },
  { question: "¿Puedo organizar cuatro sesiones?", answer: "Si deseas organizar cuatro visitas, consulta disponibilidad para agendar una por semana. Antes de reservar varias, confirma si la experiencia es adecuada para ti. Esta opción de agenda no es una pauta médica ni garantiza resultados." },
  { question: "¿Cada cuánto puedo volver?", answer: "Si deseas continuar, puedes consultar fechas cada dos o tres semanas. La frecuencia se acuerda al reservar; no existe una frecuencia universal ni es necesario comprometerte con varias sesiones para consultar el servicio." },
  { question: "¿Qué puedo esperar desde la primera sesión?", answer: "Un tiempo dedicado a hacer una pausa y al cuidado personal. Las sensaciones de relajación o bienestar son individuales; no se garantizan cambios en el sueño, la energía, el dolor ni otros resultados de salud." },
  { question: "¿Elimina toxinas o metales pesados?", answer: "No hay evidencia científica válida que respalde que los baños iónicos extraigan toxinas o metales pesados del cuerpo. Los cambios de color del agua no demuestran una desintoxicación. El servicio no sustituye atención médica ni tratamientos indicados por profesionales de salud." },
  { question: "¿Cómo agendo mi cita?", answer: "Selecciona “Agendar por WhatsApp” o “Consultar precio y agendar”. El equipo te ayudará a confirmar el costo, la disponibilidad y los detalles de tu visita antes de reservar." },
];
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return <section id="preguntas" className="section section-white" aria-label="Preguntas frecuentes"><div className="container faq-grid">
    <div><SectionHeading number="05" eyebrow="Preguntas frecuentes" title="Ven con calma. Y sin dudas." description="Lo que te gustaría saber antes de reservar tu momento de bienestar." /><a className="text-link" href="#contacto">Hablemos de tu próxima visita <span aria-hidden="true">↗</span></a></div>
    <div className="faq-list">{questions.map((item, i) => <div key={item.question} className={`faq-item ${open === i ? "is-open" : ""}`}><h3><button type="button" id={`${id}-q-${i}`} aria-expanded={open === i} aria-controls={`${id}-a-${i}`} onClick={() => setOpen(open === i ? null : i)}><span className="faq-number">{String(i + 1).padStart(2, "0")}</span><span>{item.question}</span><FontAwesomeIcon icon={faChevronDown} aria-hidden="true" /></button></h3><div id={`${id}-a-${i}`} role="region" aria-labelledby={`${id}-q-${i}`} className="faq-answer" inert={open !== i}><div><p>{item.answer}</p></div></div></div>)}</div>
  </div></section>;
}
