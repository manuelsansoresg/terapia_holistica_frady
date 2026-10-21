import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { business } from "@/config/business";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BookingShortcuts } from "@/components/layout/booking-shortcuts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { VisualEffects } from "@/components/ui/visual-effects";
import "./globals.css";

config.autoAddCss = false;

const heading = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-heading", display: "swap" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

const title = `Baño iónico para pies en ${business.city} | ${business.name}`;
const description = `Conoce ${business.name} en ${business.city}, ${business.region}. Sesiones de baño iónico para pies de 30 a 45 minutos. Consulta precio y disponibilidad por WhatsApp.`;

export const metadata: Metadata = {
  title,
  description,
  applicationName: business.name,
  ...(business.siteUrl ? { metadataBase: new URL(business.siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: business.locale,
    siteName: business.name,
    title,
    description,
    ...(business.siteUrl ? { url: business.siteUrl } : {}),
    ...(business.openGraphImage ? { images: [{ url: business.openGraphImage.src, width: business.openGraphImage.width, height: business.openGraphImage.height, alt: business.openGraphImage.alt }] } : {}),
  },
  twitter: { card: business.openGraphImage ? "summary_large_image" : "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#0F3D2E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido" tabIndex={-1}>{children}</main>
        <Footer />
        <BookingShortcuts />
        <VisualEffects />
      </body>
    </html>
  );
}
