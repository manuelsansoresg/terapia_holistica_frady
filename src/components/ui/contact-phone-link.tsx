import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import type { contactPhones } from "@/config/business";
import type { ConversionPlacement } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function ContactPhoneLink({ phone, placement }: {
  phone: typeof contactPhones[number];
  placement: ConversionPlacement;
}) {
  if (phone.whatsapp) {
    return <WhatsAppLink placement={placement} variant="text" phone={phone.international}>{phone.display}</WhatsAppLink>;
  }

  return <a className="whatsapp-link button-text" href={`tel:+${phone.international}`} aria-label={`Llamar al ${phone.display}, teléfono fijo`}>
    <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
    <span>{phone.display} · Teléfono fijo</span>
  </a>;
}
