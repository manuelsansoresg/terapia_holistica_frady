import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaSlot } from "@/components/ui/media-slot";

export function Trust() {
  return <section id="espacio" className="section atmosphere" aria-label="Atmósfera e inspiración"><div className="container">
    <div className="atmosphere-heading"><SectionHeading number="04" eyebrow="Una mirada a la calma" title="Los pequeños detalles también importan." /><p>Una selección visual de texturas,<br className="desktop-break" /> luz y materiales naturales.</p></div>
    <div className="gallery-editorial">
      <MediaSlot image={business.images.gallery[0]} className="gallery-main" sizes="(max-width: 767px) 90vw, 58vw" />
      <MediaSlot image={business.images.gallery[2]} className="gallery-texture" sizes="(max-width: 767px) 44vw, 30vw" />
      <div className="gallery-phrase"><span>El valor de lo sencillo.</span><p>Menos prisa.<br /><em>Más presente.</em></p></div>
      <MediaSlot image={business.images.gallery[3]} className="gallery-detail" sizes="(max-width: 767px) 44vw, 30vw" />
      <MediaSlot image={business.images.gallery[1]} className="gallery-corner" sizes="(max-width: 767px) 90vw, 40vw" />
    </div>
    <p className="gallery-footnote">Imágenes ilustrativas generadas con IA. Son referencias de atmósfera; no representan las instalaciones, clientes ni amenidades de Terapia Holística Frady.</p>
  </div></section>;
}
