import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { Benefits } from "@/components/sections/benefits";
import { Session } from "@/components/sections/session";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FinalCta } from "@/components/sections/final-cta";
import { CellularWellness } from "@/components/sections/cellular-wellness";
import { WaterColors } from "@/components/sections/water-colors";
import { SectionHeading } from "@/components/ui/section-heading";
import { TherapyVideo } from "@/components/sections/therapy-video";
import { homeMetadata, homeStructuredData } from "@/config/seo";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c") }} />
      <Hero />
      <Introduction />
      <Benefits />
      <Session />
      <TherapyVideo />
      <section className="section reference-material" aria-label="Más información sobre el baño iónico">
        <div className="container">
          <SectionHeading number="05" eyebrow="Si quieres saber más" title="Información clara antes de decidir." />
          <details className="reference-disclosure"><summary>El dispositivo, los iones y el material de Frady</summary><CellularWellness /></details>
          <details className="reference-disclosure"><summary>Qué significa el cambio de color del agua</summary><WaterColors /></details>
        </div>
      </section>
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}
