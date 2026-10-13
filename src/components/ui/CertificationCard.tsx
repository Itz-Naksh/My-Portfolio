import Image from "next/image";
import { Award, BadgeCheck, Eye, Users } from "lucide-react";
import type { Certification } from "@/data/portfolio";
import { buttonStyles } from "@/lib/styles";

interface CertificationCardProps extends Certification {
  /** "membership" swaps the award icon for a people icon */
  variant?: "certification" | "membership";
}

/**
 * Certification or membership card.
 * With an `image` it shows the certificate picture plus "View Certificate"
 * and "Verify" buttons; without one it falls back to a compact icon card.
 */
export default function CertificationCard({
  name,
  issuer,
  year,
  url,
  image,
  variant = "certification",
}: CertificationCardProps) {
  const Icon = variant === "membership" ? Users : Award;

  const meta = (issuer || year) && (
    <p className="mt-1 text-sm">
      {issuer}
      {issuer && year && " · "}
      {year && <span className="text-brand">{year}</span>}
    </p>
  );

  // Card with the certificate image
  if (image) {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-white">
          <Image
            src={image}
            alt={`${name} certificate`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base leading-snug">{name}</h3>
          {meta}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            <a href={image} target="_blank" rel="noopener noreferrer" className={buttonStyles.small}>
              <Eye size={15} aria-hidden="true" />
              View Certificate
              <span className="sr-only"> for {name} (opens in a new tab)</span>
            </a>
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className={buttonStyles.smallOutline}>
                <BadgeCheck size={15} aria-hidden="true" />
                Verify
                <span className="sr-only"> {name} credential (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Compact icon card (no image yet, or memberships)
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-brand">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base leading-snug">{name}</h3>
        {meta}
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
