import benefitsPhoto from "../../public/images/frady/beneficios-bano-pies.png";
import reflexologyMap from "../../public/images/frady/mapa-reflexologia.png";

export interface BrandImage {
  /** Public path and intrinsic dimensions. Images are illustrative, not venue photos. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

function illustration(file: string, width: number, height: number, alt: string): BrandImage {
  return { src: `/images/frady/${file}.webp`, width, height, alt };
}

export const contactPhones = [
  { whatsapp: true, international: "528674748059", display: "867 474 8059" },
  { whatsapp: true, international: "528672291078", display: "867 229 1078" },
  { whatsapp: true, international: "528672447894", display: "867 244 7894" },
  { whatsapp: false, international: "528345472783", display: "834 547 2783" },
] as const;

export const business = {
  name: "Terapia Holística Frady",
  service: "Desintoxicación iónica",
  city: "Nuevo Laredo",
  region: "Tamaulipas",
  country: "México",
  locale: "es_MX",
  timezone: "America/Matamoros",
  phone: {
    ...contactPhones[0],
    message: "Hola, me interesa conocer la disponibilidad para una sesión de baño iónico de pies.",
  },
  sessionDuration: "20–30 minutos",
  sessionDurationRange: "20–30",
  secondaryPhone: contactPhones[1],
  location: {
    postalCode: "88030",
    address: "Bocanegra 918, local 3, col. Victoria, C.P. 88030" as string | null,
    mapsUrl: "https://www.google.com/maps/@27.4913006,-99.4898634,3a,75y,226.42h,74.75t/data=!3m4!1e1!3m2!1sOawnz1KqICWX9eaSSdh3KQ!2e0" as string | null,
    /** Only configure a verified venue map. */
    mapEmbedUrl: "https://www.google.com/maps?q=27.4913006,-99.4898634&z=17&output=embed" as string | null,
  },
  logo: { src: "/images/logo.png", alt: "Terapia Holística Frady", width: 840, height: 260 } as BrandImage,
  images: {
    // Static import gives replacements a new content hash, avoiding stale optimized images.
    benefitsPoster: { src: benefitsPhoto.src, alt: "Pies en un baño iónico con agua clara y dispositivo visible, junto a plantas, una vela y toallas.", width: benefitsPhoto.width, height: benefitsPhoto.height } as BrandImage,
    bathProgression: { src: "/images/frady/progresion-bano-pies-ph.png", alt: "Ilustración de un baño de pies a los 20, 25 y 30 minutos, con cambios de color en el agua y una escala de pH de referencia.", width: 1448, height: 1086 } as BrandImage,
    reflexology: { src: reflexologyMap.src, alt: "Mapa tradicional de reflexología del pie medial en tonos verde y dorado, con áreas asociadas a distintas partes del cuerpo; no representa correspondencias médicas demostradas.", width: reflexologyMap.width, height: reflexologyMap.height } as BrandImage,
    hero: illustration("hero-bano-ionico", 1400, 1749, "Pies en un baño iónico con el dispositivo visible, rodeados de toallas y tonos cálidos."),
    heroPanorama: illustration("hero-bano-ionico-horizontal", 1100, 328, "Vista panorámica de un baño iónico para pies con su dispositivo."),
    introduction: illustration("experiencia-bano-pies", 713, 480, "Detalle de pies sumergidos en un recipiente con un dispositivo iónico."),
    introductionDetail: illustration("experiencia-sales-preparacion", 727, 329, "Cuenco de sales sobre una toalla con vegetación al fondo."),
    feetDetail: illustration("experiencia-pies-primer-plano", 902, 552, "Primer plano de pies y dispositivo en un baño iónico."),
    care: illustration("experiencia-cuidados", 662, 331, "Toallas, sales y elementos de cuidado personal."),
    benefits: illustration("beneficio-relajacion", 694, 482, "Una persona descansa con los ojos cerrados en una silla junto a plantas."),
    naturalDetail: illustration("beneficio-ambiente-natural", 722, 334, "Luz cálida sobre hojas verdes."),
    process: [
      illustration("proceso-preparacion", 718, 394, "Toallas limpias y una rama verde preparadas para la sesión."),
      illustration("proceso-dispositivo", 636, 485, "Panel de control de un dispositivo iónico junto a una toalla."),
      illustration("proceso-sesion", 720, 394, "Pies en el agua junto al dispositivo iónico durante la sesión."),
      illustration("proceso-finalizacion", 679, 377, "Pies secándose con una toalla al finalizar el baño."),
    ],
    gallery: [
      illustration("galeria-sala-relajacion", 790, 394, "Sillones, plantas y luz cálida en una escena de inspiración."),
      illustration("galeria-rincon-natural", 713, 394, "Rincón con sillón, plantas y luz natural."),
      illustration("galeria-toallas-bienestar", 713, 391, "Toallas de textura suave con una rama verde."),
      illustration("galeria-detalle-aromatico", 660, 394, "Vela, difusor y una planta sobre una superficie de madera."),
    ],
    final: illustration("cta-final-ambiente", 718, 377, "Vela encendida y piedras sobre una superficie natural."),
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://fradybienestar.com",
  privacyUrl: null as string | null,
  openGraphImage: illustration("hero-bano-ionico-horizontal", 1100, 328, "Baño iónico de pies de Terapia Holística Frady") as BrandImage | null,
} as const;

export const navigation = [
  { href: "#experiencia", label: "La experiencia" },
  { href: "#sesion", label: "Tu sesión" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function getWhatsAppUrl(phone: string = business.phone.international, message: string = business.phone.message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
export function getMapsUrl() {
  return business.location.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.location.address
      ? `${business.location.address}, ${business.city}, ${business.region}, ${business.country}`
      : `${business.city}, ${business.region}, ${business.country}`,
  )}`;
}
