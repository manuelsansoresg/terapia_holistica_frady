import Image from "next/image";
import { business } from "@/config/business";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#inicio" aria-label={`${business.name}, inicio`} className={`brand-logo ${inverse ? "brand-logo-surface" : ""}`}>
    <Image src={business.logo.src} alt={business.logo.alt} width={business.logo.width} height={business.logo.height} sizes="(max-width: 767px) 175px, 220px" className="official-logo" preload={!inverse} />
  </a>;
}
