import { Briefcase, GraduationCap } from "lucide-react";
import type { TimelineEntry } from "@/data/portfolio";

/**
 * A single entry on the vertical timeline. The parent list draws
 * the soft connecting line; this draws the violet dot and the card.
 */
export default function TimelineItem({ type, title, organization, dates, description }: TimelineEntry) {
  const Icon = type === "work" ? Briefcase : GraduationCap;

  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Violet dot sitting on the line */}
      <span
        aria-hidden="true"
        className="absolute top-7 left-[9px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:left-[17px]"
      >
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>

      <article className="rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-brand">
            <Icon size={16} aria-hidden="true" />
            {type === "work" ? "Experience" : "Education"}
          </p>
          <p className="rounded-full bg-accent-light px-3 py-0.5 text-xs font-medium text-badge">
            {dates}
          </p>
        </div>
        <h3 className="mt-3 text-lg sm:text-xl">{title}</h3>
        <p className="font-medium text-heading/80">{organization}</p>
        <p className="mt-2 text-sm">{description}</p>
      </article>
    </div>
  );
}
