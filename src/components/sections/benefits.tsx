import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faLeaf, faShoePrints, faWater, faHeart } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const themes = [
  { title: "Relajación y bienestar", text: "El contacto con agua tibia puede favorecer una sensación de descanso y relajación.", icon: faLeaf },
  { title: "Confort en los pies", text: "Un momento de descanso después de pasar muchas horas de pie. Consulta las precauciones antes de agendar.", icon: faShoePrints },
  { title: "Experiencia de autocuidado", text: "Desconectarte del estrés cotidiano y dedicar tiempo a tu bienestar personal.", icon: faHeart },
  { title: "Equilibrio y armonía", text: "Desde nuestro enfoque holístico, un espacio para reconectar con cuerpo, mente y espíritu.", icon: faWater },
];
export function Benefits() {
  return <section id="bienestar" className="section benefits" aria-label="Objetivos de bienestar"><div className="container">
    <div className="benefits-heading"><SectionHeading number="02" eyebrow="Lo que buscamos" title="Hay pausas que merecen un lugar en tu día." /><p>No hace falta una ocasión especial.<br />Solo un momento que sea tuyo.</p></div>
    <div className="benefits-composition">
      <figure className="benefits-art benefits-poster"><Image src={business.images.benefitsPoster.src} alt={business.images.benefitsPoster.alt} width={business.images.benefitsPoster.width} height={business.images.benefitsPoster.height} sizes="(max-width: 767px) 90vw, 40vw" /><figcaption>Tu bienestar comienza por tus pies.</figcaption></figure>
      <div className="benefit-list">{themes.map((theme, index) => <div className="benefit-item" key={theme.title}><span className="item-number">0{index + 1}</span><div><h3><FontAwesomeIcon icon={theme.icon} aria-hidden="true" />{theme.title}</h3><p>{theme.text}</p></div></div>)}<WhatsAppLink placement="benefits" variant="text">Consultar disponibilidad</WhatsAppLink></div>
    </div>
    <p className="wellness-note">Objetivos de relajación y autocuidado. Las sensaciones son individuales; no se garantizan resultados médicos.</p>
    <div className="foot-care" aria-labelledby="foot-care-title">
      <div className="foot-care-copy">
        <p className="eyebrow">Cuidado de los pies · Reflexología</p>
        <h3 id="foot-care-title">Tus pies también merecen una pausa.</h3>
        <p>Tus pies sostienen tu postura durante el día. Prestar atención a los dedos, el arco, el talón y los laterales es una forma de reconocer cómo se sienten y dedicarles un momento de cuidado.</p>
        <div className="foot-care-lists">
          <div><h4>Observa cómo te sientes después de…</h4><ul><li>Pasar muchas horas sentado o de pie.</li><li>Usar calzado incómodo.</li><li>Caminar con incomodidad al apoyar.</li><li>Un día de estrés, cansancio o rigidez corporal.</li></ul></div>
          <div><h4>Molestias que conviene atender</h4><ul><li>Dolor en el arco o sensibilidad en el talón.</li><li>Tensión que se extiende hacia la pierna.</li><li>Molestias en la cadera o la zona lumbar.</li><li>Zonas del pie que duelen al presionar.</li></ul></div>
        </div>
        <p>En la reflexología tradicional se utilizan mapas que relacionan áreas del pie con zonas como cuello, hombros, espalda, cadera y rodilla. El masaje de cortesía está pensado como un momento de relajación y cuidado personal.</p>
        <p className="foot-care-note">El mapa es una referencia tradicional, no una herramienta de diagnóstico: estas correspondencias no están demostradas científicamente. Si las molestias persisten, consulta a un profesional de salud.</p>
      </div>
      <figure className="reflexology-figure">
        <Image src={business.images.reflexology.src} alt={business.images.reflexology.alt} width={business.images.reflexology.width} height={business.images.reflexology.height} sizes="(max-width: 767px) 90vw, 40vw" />
        <figcaption>Mapa tradicional de reflexología. Imagen de referencia proporcionada para conocer esta práctica.</figcaption>
      </figure>
    </div>
  </div></section>;
}
