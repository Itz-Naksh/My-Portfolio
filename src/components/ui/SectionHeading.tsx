import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Must match the parent Section id so aria-labelledby works */
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Small eyebrow label, main heading, and optional subtitle, centred. */
export default function SectionHeading({ id, eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 inline-block rounded-full bg-accent-light px-4 py-1 text-sm font-medium text-badge">
        {eyebrow}
      </p>
      <h2 id={`${id}-heading`} className="text-3xl sm:text-4xl">
        {title}
      </h2>
      <span aria-hidden="true" className="bg-gradient-brand mx-auto mt-4 block h-1 w-14 rounded-full" />
      {subtitle && <p className="mt-5 text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
