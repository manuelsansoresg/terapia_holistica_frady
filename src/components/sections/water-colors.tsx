import { SectionHeading } from "@/components/ui/section-heading";

export function WaterColors() {
  return <section id="colores-del-agua" className="water-colors" aria-label="Los colores del agua">
    <div className="container">
      <SectionHeading eyebrow="Durante el baño" title="El color del agua no mide tu salud." />
      <div className="color-context"><strong>¿Por qué puede cambiar de aspecto?</strong><p>Los minerales del agua y las reacciones del dispositivo y sus electrodos pueden producir cambios de color y partículas, incluso sin introducir los pies.</p></div>
      <p className="color-table-note">Las asociaciones del folleto entre colores, órganos y síntomas no están validadas médicamente. El aspecto del agua no identifica enfermedades ni demuestra la eliminación de toxinas o metales pesados. Si tienes molestias, consulta a un profesional de salud.</p>
    </div>
  </section>;
}
