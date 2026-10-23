export type ConversionPlacement =
  | "header" | "mobile-menu" | "hero" | "session" | "benefits" | "faq"
  | "contact-secondary" | "contact-form" | "contact" | "final" | "footer"
  | "floating" | "mobile-bar" | "video";

export interface ConversionEvent {
  name: "whatsapp_click" | "booking_click" | "service_select" | "contact_handoff" | "video_play";
  placement: ConversionPlacement;
  service?: "ionic-footbath";
}

/** Provider-neutral hook. Never include names, phones, free text, or WhatsApp URLs. */
export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ConversionEvent>("frady:conversion", { detail: event }));
}
