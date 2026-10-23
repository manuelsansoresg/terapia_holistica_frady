import { SectionHeading } from "@/components/ui/section-heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/config/business";
import styles from "./therapy-video.module.css";

export function TherapyVideo() {
  return (
    <section id="terapia-en-video" className={`section ${styles.section}`} aria-label="Conoce la terapia de Frady en video">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading number="04" eyebrow="Conoce Terapia Holística Frady" title="Tu terapia de pies, de principio a fin." description="Un primer vistazo a tu momento de bienestar. Conoce el baño iónico de pies y la atención que acompaña cada visita a Frady." />
          <dl className={styles.details}>
            <div><FontAwesomeIcon icon={faClock} aria-hidden="true" /><div><dt>Un tiempo para ti</dt><dd>{business.sessionDuration} por sesión</dd></div></div>
            <div><FontAwesomeIcon icon={faHeart} aria-hidden="true" /><div><dt>Relajación y bienestar</dt><dd>Una pausa para descansar y cuidarte.</dd></div></div>
            <div><FontAwesomeIcon icon={faHandHoldingHeart} aria-hidden="true" /><div><dt>Acompañamiento holístico</dt><dd>Atención cercana durante tu experiencia.</dd></div></div>
          </dl>
          <p className="form-note">El video conserva la presentación del material de Frady. Sus explicaciones no demuestran eliminación de toxinas ni beneficios clínicos del baño iónico.</p>
          <a className={`inline-link ${styles.contact}`} href="#contacto">Resuelve tus dudas y agenda tu visita</a>
        </div>
        <figure className={styles.film}>
          <div className={styles.frame}>
            <video controls playsInline preload="none" poster="/video/frady-cuadrado-portada.jpg" width={720} height={720} aria-label="Presentación de la terapia de desintoxicación iónica de pies de Frady" aria-describedby="video-description"><source src="/video/frady-cuadrado-web.mp4" type="video/mp4" />Tu navegador no permite reproducir este video. <a href="/video/frady-cuadrado-web.mp4">Abre el video de Frady</a>.</video>
          </div>
          <figcaption id="video-description"><span>Terapia Holística Frady</span><span>Presentación del servicio · 1 min 39 s</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
