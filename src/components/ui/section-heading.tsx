interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
}
export function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return <div className="section-heading"><p className="eyebrow">{number && <span>{number}</span>}{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
