import { WhatsAppLink } from "@/components/ui/whatsapp-link";
export function FinalCta() {
  return <section className="final-cta" aria-labelledby="final-title"><div className="container final-grid"><div><p className="eyebrow"><span className="gold-rule" />Tu momento empieza aquí</p><h2 id="final-title">Haz espacio<br />para <em>sentirte bien.</em></h2><p>A veces, el primer paso es simplemente hacer una pausa.</p></div><div className="final-action"><WhatsAppLink placement="final" variant="light">Agendar mi sesión</WhatsAppLink><span>Conversemos por WhatsApp, sin compromiso.</span></div></div></section>;
}
