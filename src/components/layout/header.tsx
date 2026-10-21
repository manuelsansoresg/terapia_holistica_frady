import { BrandLogo } from "@/components/ui/brand-logo";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { navigation } from "@/config/business";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <WhatsAppLink placement="header" className="header-cta">Agendar mi sesión</WhatsAppLink>
        <MobileMenu />
      </div>
    </header>
  );
}
