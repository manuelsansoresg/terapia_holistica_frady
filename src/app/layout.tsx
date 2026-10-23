import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { business } from "@/config/business";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BookingShortcuts } from "@/components/layout/booking-shortcuts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { VisualEffects } from "@/components/ui/visual-effects";
import "./globals.css";

config.autoAddCss = false;

const heading = localFont({
  src: "./fonts/cormorant-garamond-variable.ttf",
  weight: "300 700",
  style: "normal",
  variable: "--font-heading",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});
const body = localFont({
  src: "./fonts/manrope-variable.ttf",
  weight: "200 800",
  style: "normal",
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: business.name, template: `%s | ${business.name}` },
  applicationName: business.name,
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
