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
    message: "Hola, me gustaría recibir información y agendar una sesión en Terapia Holística Frady.",
  },
  sessionDuration: "20–30 minutos",
  sessionDurationRange: "20–30",
  secondaryPhone: { international: "528345472783", display: "834 547 2783" },
  location: {
    address: "Bocanegra 918, local 3, col. Victoria, C.P. 88030" as string | null,
    mapsUrl: null as string | null,
    /** Only configure a verified venue map. */
    mapEmbedUrl: null as string | null,
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
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  privacyUrl: null as string | null,
  openGraphImage: null as BrandImage | null,
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
