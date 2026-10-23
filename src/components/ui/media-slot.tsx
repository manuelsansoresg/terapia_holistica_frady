import Image from "next/image";
import type { BrandImage } from "@/config/business";

interface MediaSlotProps {
  image: BrandImage;
  label?: string;
  note?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** The parent sets a reserved aspect ratio; image dimensions are never stretched. */
export function MediaSlot({ image, label, note, className = "", priority = false, sizes = "(max-width: 767px) 100vw, 50vw" }: MediaSlotProps) {
  return <figure className={`media-slot ${className}`}>
    <Image src={image.src} alt={image.alt} fill sizes={sizes} className="media-image" preload={priority} />
    {(label || note) && <figcaption className="photo-label">{label && <span>{label}</span>}{note && <span>{note}</span>}</figcaption>}
  </figure>;
}
