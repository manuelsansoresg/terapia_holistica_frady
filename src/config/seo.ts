import type { Metadata } from "next";
import { business, contactPhones } from "@/config/business";

export const homeTitle = "Terapia Holística en Nuevo Laredo | Frady Bienestar";
export const homeDescription = "Conoce Terapia Holística Frady en Nuevo Laredo, Tamaulipas. Baño iónico de pies de 20–30 minutos, masaje y té de cortesía. Consulta precio y agenda por WhatsApp.";
export const homeUrl = new URL("/", business.siteUrl).href;
const absolute = (path: string) => new URL(path, business.siteUrl).href;

export const homeMetadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: homeUrl },
  openGraph: {
    type: "website",
    locale: business.locale,
    siteName: business.name,
    url: homeUrl,
    title: homeTitle,
    description: homeDescription,
    ...(business.openGraphImage ? { images: [{ ...business.openGraphImage, url: absolute(business.openGraphImage.src) }] } : {}),
  },
  twitter: {
    card: business.openGraphImage ? "summary_large_image" : "summary",
    title: homeTitle,
    description: homeDescription,
    ...(business.openGraphImage ? { images: [{ url: absolute(business.openGraphImage.src), alt: business.openGraphImage.alt }] } : {}),
  },
};

// Only facts already published in the business configuration and visible on the page.
// LocalBusiness is also an Organization: a second entity would duplicate the business.
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${homeUrl}#negocio`,
      name: business.name,
      url: homeUrl,
      telephone: `+${business.phone.international}`,
      logo: { "@type": "ImageObject", url: absolute(business.logo.src), width: business.logo.width, height: business.logo.height },
      image: absolute(business.images.hero.src),
      description: homeDescription,
      areaServed: { "@type": "City", name: `${business.city}, ${business.region}, ${business.country}` },
      ...(business.location.address ? { address: {
        "@type": "PostalAddress",
        streetAddress: business.location.address,
        addressLocality: business.city,
        addressRegion: business.region,
        postalCode: business.location.postalCode,
        addressCountry: "MX",
      } } : {}),
      ...(business.location.mapsUrl ? { hasMap: business.location.mapsUrl } : {}),
      contactPoint: contactPhones.map(phone => ({ "@type": "ContactPoint", telephone: `+${phone.international}`, contactType: "Información y citas", availableLanguage: "es" })),
    },
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#sitio`,
      url: homeUrl,
      name: business.name,
      inLanguage: "es-MX",
      publisher: { "@id": `${homeUrl}#negocio` },
    },
    {
      "@type": "WebPage",
      "@id": `${homeUrl}#pagina`,
      url: homeUrl,
      name: homeTitle,
      description: homeDescription,
      inLanguage: "es-MX",
      isPartOf: { "@id": `${homeUrl}#sitio` },
      about: { "@id": `${homeUrl}#negocio` },
      mainEntity: { "@id": `${homeUrl}#bano-ionico` },
    },
    {
      "@type": "Service",
      "@id": `${homeUrl}#bano-ionico`,
      name: "Baño iónico de pies",
      serviceType: "Sesión de bienestar y relajación",
      url: `${homeUrl}#experiencia`,
      description: `Baño de pies con agua tibia y dispositivo iónico, de ${business.sessionDuration}. Incluye masaje de pies y té de cortesía. No sustituye atención médica ni se ha demostrado que elimine toxinas.`,
      provider: { "@id": `${homeUrl}#negocio` },
      areaServed: { "@type": "City", name: `${business.city}, ${business.region}, ${business.country}` },
      mainEntityOfPage: { "@id": `${homeUrl}#pagina` },
    },
  ],
};
