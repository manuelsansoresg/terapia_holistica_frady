export type ConversionPlacement =
  | "header"
  | "mobile-menu"
  | "hero"
  | "session"
  | "benefits"
  | "faq"
  | "contact-secondary"
  | "contact"
  | "final"
  | "footer"
  | "floating"
  | "mobile-bar";

export interface ConversionEvent {
  name: "whatsapp_click";
  placement: ConversionPlacement;
}

/** Local integration point only: no provider, cookies, or personal data. */
export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<ConversionEvent>("frady:conversion", { detail: event }),
  );
}
