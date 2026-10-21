import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMoon, faWater, faHeart, faFeatherPointed, faSun } from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/ui/section-heading";
const themes = [
  { title: "Relajación", text: "Un momento para soltar las prisas y disfrutar de una pausa tranquila.", icon: faLeaf },
  { title: "Descanso", text: "Tiempo lejos de las actividades del día para bajar el ritmo.", icon: faMoon },
  { title: "Ligereza", text: "Una invitación a dejar de lado, por un momento, el peso de la rutina.", icon: faFeatherPointed },
  { title: "Renovación", text: "Haz una pausa antes de retomar tus actividades con una nueva intención.", icon: faSun },
  { title: "Equilibrio", text: "Encuentra espacio para ti entre tus responsabilidades y tu cuidado personal.", icon: faWater },
  { title: "Bienestar integral", text: "Un ritual que puedes sumar a tus momentos de descanso y hábitos de autocuidado.", icon: faHeart },
];
export function Benefits() {
  return <section id="bienestar" className="section benefits" aria-label="Beneficios de bienestar"><div className="container">
    <div className="section-topline"><SectionHeading number="02" eyebrow="Beneficios de la experiencia" title="Tu bienestar, en el centro." /><p className="section-description">No necesitas una ocasión especial<br className="desktop-break" /> para dedicarte un momento.</p></div>
    <div className="benefit-grid">{themes.map((theme, index) => <div className="benefit-item" key={theme.title}><div className="benefit-top"><FontAwesomeIcon icon={theme.icon} aria-hidden="true" /><span className="item-number">0{index + 1}</span></div><h3>{theme.title}</h3><p>{theme.text}</p></div>)}</div>
    <p className="wellness-note">Estos son los objetivos de la experiencia; las sensaciones son personales y pueden variar. No se garantizan efectos médicos.</p>
  </div></section>;
}
