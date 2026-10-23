import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function BookingShortcuts() {
  return (
    <>
      <aside className="floating-booking" aria-label="Contacto rápido">
        <WhatsAppLink placement="floating" variant="floating" />
      </aside>
      <aside className="mobile-booking" aria-label="Agendado rápido">
        <WhatsAppLink placement="mobile-bar" intent="booking">Agenda tu sesión</WhatsAppLink>
      </aside>
    </>
  );
}
