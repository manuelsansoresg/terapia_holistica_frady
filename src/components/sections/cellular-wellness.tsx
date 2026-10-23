import Image from "next/image";
import cells from "../../../public/images/frady/celulas-entorno.png";
import ions from "../../../public/images/frady/iones-negativos-positivos.png";
import { SectionHeading } from "@/components/ui/section-heading";

export function CellularWellness() {
  return (
    <section id="celulas-e-iones" className="cellular-wellness" aria-label="Células, entorno e iones">
      <div className="container">
        <div className="learning-heading">
          <SectionHeading eyebrow="Una mirada al interior" title="Células, entorno y equilibrio." />
          <p>Conoce los conceptos que acompañan la explicación de nuestra terapia y forman parte del material informativo de Frady.</p>
        </div>
        <div className="learning-grid">
          <article className="learning-article">
            <figure><Image src={cells} alt="Ilustración de células rodeadas por un medio líquido, en tonos azules y rosados." sizes="(max-width: 767px) 90vw, 45vw" /><figcaption>Una representación visual del entorno de las células.</figcaption></figure>
            <div className="learning-copy"><p className="eyebrow">01 · El entorno celular</p><h3>El líquido que rodea nuestras células.</h3>
              <p>Nuestro cuerpo está formado por células que se organizan en tejidos y órganos. A su alrededor se encuentra el líquido intersticial, un medio que participa en el intercambio de sustancias entre la sangre y los tejidos.</p>
              <p>Esta ilustración ayuda a visualizar ese entorno. No representa un efecto del baño iónico en el organismo.</p>
              <blockquote>Comprender nuestro cuerpo también es una forma de cuidarnos.</blockquote>
            </div>
          </article>
          <article className="learning-article">
            <figure><Image src={ions} alt="Gráfico del folleto que compara iones negativos y positivos y los asocia, respectivamente, con aire saludable y contaminado." sizes="(max-width: 767px) 90vw, 45vw" /><figcaption>Representación de iones incluida en el material de Frady.</figcaption></figure>
            <div className="learning-copy"><p className="eyebrow">02 · La mirada iónica</p><h3>Iones negativos y positivos.</h3>
              <p>Los iones son átomos o moléculas con carga eléctrica. El dispositivo utilizado durante el baño de pies produce reacciones electroquímicas en el agua.</p>
              <p>El folleto utiliza la comparación entre iones negativos y positivos para presentar el enfoque de la terapia. Los signos indican una carga eléctrica: por sí solos no significan que una sustancia sea saludable o contaminante.</p>
              <a className="inline-link" href="#terapia-en-video">Conoce más en nuestro video</a>
            </div>
          </article>
        </div>
        <p className="learning-note">El “entorno tóxico” y la desintoxicación son conceptos utilizados en el material promocional; estas ilustraciones no describen un diagnóstico ni demuestran que el baño iónico limpie el líquido intersticial.</p>
      </div>
    </section>
  );
}
