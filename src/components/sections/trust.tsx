import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaSlot } from "@/components/ui/media-slot";
export function Trust() {
  return <section id="espacio" className="section trust" aria-label="Nuestro espacio e inspiración"><div className="container">
    <div className="section-topline"><SectionHeading number="04" eyebrow="Nuestro espacio · inspiración" title="La calma está en los detalles." /><p className="section-description">Texturas naturales, tonos cálidos<br className="desktop-break" /> y una invitación a bajar el ritmo.</p></div>
    <div className="gallery-grid"><MediaSlot image={business.images.space} label="La sencillez de lo natural" note="Ambiente ilustrativo" /><div className="gallery-secondary"><MediaSlot image={business.images.session} label="El placer de hacer una pausa" note="Experiencia ilustrativa" /><p className="gallery-quote">Respira. <em>Este momento es tuyo.</em></p></div></div>
    <p className="gallery-footnote">Galería de inspiración con fotografías de stock. No muestra las instalaciones ni sesiones reales de Terapia Holística Frady.</p>
  </div></section>;
}
