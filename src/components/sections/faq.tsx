"use client";
import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { business } from "@/config/business";

const questions = [
  { question: "¿Cuánto dura una sesión?", answer: `Aproximadamente ${business.sessionDuration}. Un espacio en tu día para sentarte, bajar el ritmo y disfrutar de tu baño iónico para pies.` },
  { question: "¿Es dolorosa? ¿Qué voy a sentir?", answer: "Permaneces sentado con los pies en agua tibia, en una experiencia pensada para la comodidad y la relajación. Si sientes dolor, irritación o el agua está demasiado caliente, avisa al equipo y detén la sesión." },
  { question: "¿Qué puedo esperar desde la primera sesión?", answer: "Un momento de descanso y desconexión de la rutina. Cada persona vive la experiencia de forma diferente; ven con tiempo para disfrutar tu pausa y compartir tus dudas con el equipo." },
  { question: "¿Cómo debo prepararme?", answer: "Ven con ropa cómoda que permita descubrir pies y tobillos, y mantén tu hidratación habitual. Al reservar, confirma las indicaciones sobre comidas, alcohol y cafeína. Después, seca bien tus pies y retoma tus actividades con calma." },
  { question: "¿Cada cuánto puedo agendar?", answer: "Puedes consultar la opción de organizar cuatro visitas, una por semana, o preguntar por fechas cada dos o tres semanas si deseas regresar. El equipo te ayudará a coordinar la disponibilidad y los detalles antes de reservar." },
  { question: "¿Quiénes pueden realizarla?", answer: "Consulta antes con un profesional de salud si estás embarazada, deseas reservar para un menor o tienes una condición médica. Evita el baño iónico si tienes marcapasos u otro dispositivo eléctrico implantado, heridas abiertas en los pies o neuropatía diabética. Es una experiencia de autocuidado y no sustituye atención médica." },
  { question: "¿Cómo consulto el precio y reservo mi cita?", answer: "Escríbenos por WhatsApp. Si lo prefieres, prepara tu consulta con el formulario: abrirá WhatsApp para que revises y envíes el mensaje. La cita queda confirmada cuando acordemos contigo el horario y los detalles." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  function renderQuestion(item: typeof questions[number], index: number) {
    return <div key={item.question} className={`faq-item ${open === index ? "is-open" : ""}`}>
      <h3><button type="button" id={`${id}-q-${index}`} aria-expanded={open === index} aria-controls={`${id}-a-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><FontAwesomeIcon icon={faChevronDown} aria-hidden="true" /></button></h3>
      <div id={`${id}-a-${index}`} role="region" aria-labelledby={`${id}-q-${index}`} className="faq-answer" inert={open !== index}><div><p>{item.answer}</p></div></div>
    </div>;
  }
  return <section id="preguntas" className="section faq" aria-label="Preguntas frecuentes"><div className="container faq-grid">
    <div className="faq-intro"><SectionHeading number="06" eyebrow="Antes de tu visita" title="Respuestas para venir con calma." description="Lo que necesitas saber para decidir y preparar tu primera sesión." /><p className="faq-aside">La confianza también empieza por una conversación clara.</p></div>
    <div><div className="faq-list">{questions.map(renderQuestion)}</div>
      <div className="faq-action"><p className="faq-booking-note">Consulta disponibilidad y elige un horario.</p><WhatsAppLink placement="faq" intent="booking">Agenda tu sesión</WhatsAppLink></div>
    </div>
  </div></section>;
}
