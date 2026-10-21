import Image from "next/image";
import type { BrandImage } from "@/config/business";

interface MediaSlotProps {
  image: BrandImage;
  label: string;
  note: string;
  className?: string;
  priority?: boolean;
}

export function MediaSlot({ image, label, note, className = "", priority = false }: MediaSlotProps) {
  return <figure className={`media-slot ${className}`}>
    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1300px) 50vw, 650px" className="media-image" preload={priority} />
    <figcaption className="photo-label"><span>{label}</span><span>{note}</span></figcaption>
  </figure>;
}
