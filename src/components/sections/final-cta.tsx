import { business } from "@/config/business";
import { MediaSlot } from "@/components/ui/media-slot";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function FinalCta() {
  return <section className="final-cta" aria-labelledby="final-title"><div className="container final-grid">
    <div className="final-copy"><p className="eyebrow">Un tiempo que es tuyo</p><h2 id="final-title">Tu momento de pausa <em>comienza aquí.</em></h2><p>Regálate un espacio para desconectarte de la rutina y disfrutar de una experiencia de bienestar.</p><WhatsAppLink placement="final" variant="light">Consultar disponibilidad por WhatsApp</WhatsAppLink><span className="final-note">Conoce el precio y resuelve tus dudas antes de reservar.</span></div>
    <div className="final-art"><MediaSlot image={business.images.final} sizes="(max-width: 767px) 85vw, 460px" className="final-media" /><p className="art-caption">Una invitación a bajar el ritmo. Imagen ilustrativa · IA.</p></div>
  </div></section>;
}
