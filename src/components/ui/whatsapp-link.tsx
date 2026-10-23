"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { getWhatsAppUrl } from "@/config/business";
import { trackConversion, type ConversionPlacement } from "@/lib/analytics";

interface WhatsAppLinkProps {
  placement: ConversionPlacement;
  phone?: string;
  message?: string;
  intent?: "booking" | "information";
  children?: React.ReactNode;
  variant?: "primary" | "light" | "text" | "floating";
  className?: string;
}

export function WhatsAppLink({
  placement,
  phone,
  message,
  intent = "information",
  children = "Agendar por WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppLinkProps) {
  return (
    <a
      href={getWhatsAppUrl(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-link button-${variant} ${className}`}
      aria-label={variant === "floating" ? "Agendar por WhatsApp (abre en otra pestaña)" : undefined}
      onClick={() => {
        trackConversion({ name: "whatsapp_click", placement, service: "ionic-footbath" });
        if (intent === "booking") trackConversion({ name: "booking_click", placement, service: "ionic-footbath" });
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
      {variant !== "floating" && <span>{children}</span>}
      {variant !== "floating" && variant !== "text" && (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="button-arrow" aria-hidden="true" />
      )}
    </a>
  );
}
