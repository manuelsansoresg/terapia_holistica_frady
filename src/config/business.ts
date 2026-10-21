export interface BrandImage {
  /** Path relative to /public, e.g. /images/logo-oficial.png. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const business = {
  name: "Terapia Holística Frady",
  service: "Desintoxicación iónica",
  city: "Nuevo Laredo",
  region: "Tamaulipas",
  country: "México",
  locale: "es_MX",
  timezone: "America/Matamoros",
  phone: {
    international: "528672447894",
    display: "867 244 7894",
    message:
      "Hola, me gustaría recibir información y agendar una sesión en Terapia Holística Frady.",
  },
  sessionDuration: "30–45 minutos",
  secondaryPhone: { international: "528345472783", display: "834 547 2783" },
  location: {
    /** Replace only when the actual venue is confirmed. */
    address: null as string | null,
    mapsUrl: null as string | null,
    /** Optional verified Google Maps embed URL. Never embed an assumed address. */
    mapEmbedUrl: null as string | null,
  },
  /** Official, unmodified PNG in /public. */
  logo: { src: "/images/logo.png", alt: "Terapia Holística Frady", width: 840, height: 260 } as BrandImage,
  images: {
    hero: { src: "/images/hero.webp", alt: "Baño de pies con pétalos en un ambiente cálido de spa. Fotografía ilustrativa.", width: 1400, height: 2100 } as BrandImage,
    introduction: { src: "/images/experience.webp", alt: "Preparación de un baño de pies con sales. Fotografía ilustrativa.", width: 1100, height: 1650 } as BrandImage,
    space: { src: "/images/space.webp", alt: "Toallas y elementos naturales de spa. Fotografía ambiental ilustrativa.", width: 1400, height: 2100 } as BrandImage,
    session: { src: "/images/details.webp", alt: "Agua vertida en un baño de pies con pétalos. Fotografía ilustrativa.", width: 1100, height: 1650 } as BrandImage,
  },
  /** Final public domain, privacy notice, and OG image remain unconfigured. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  privacyUrl: null as string | null,
  openGraphImage: null as BrandImage | null,
} as const;

export const navigation = [
  { href: "#experiencia", label: "La experiencia" },
  { href: "#sesion", label: "Tu sesión" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Ubicación" },
] as const;

export function getWhatsAppUrl(phone: string = business.phone.international) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(business.phone.message)}`;
}

export function getMapsUrl() {
  return (
    business.location.mapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      business.location.address
        ? `${business.location.address}, ${business.city}, ${business.region}, ${business.country}`
        : `${business.city}, ${business.region}, ${business.country}`,
    )}`
  );
}
