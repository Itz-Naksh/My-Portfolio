import { Award, Users } from "lucide-react";
import type { Certification } from "@/data/portfolio";

interface CertificationCardProps extends Certification {
  /** "membership" swaps the award icon for a people icon */
  variant?: "certification" | "membership";
}

/** Small card showing a certification or membership; becomes a link when `url` is set. */
export default function CertificationCard({
  name,
  issuer,
  year,
  url,
  variant = "certification",
}: CertificationCardProps) {
  const Icon = variant === "membership" ? Users : Award;

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-primary">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base leading-snug">{name}</h3>
        {(issuer || year) && (
          <p className="mt-1 text-sm">
            {issuer}
            {issuer && year && " · "}
            {year && <span className="text-primary">{year}</span>}
          </p>
        )}
      </div>
    </>
  );

  const classes =
    "flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift";

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <article className={classes}>{content}</article>
  );
}
