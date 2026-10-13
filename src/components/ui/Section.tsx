interface SectionProps {
  id: string;
  children: React.ReactNode;
  /** Use the very light lavender background */
  alt?: boolean;
  className?: string;
}

/** Consistent vertical rhythm + optional alternate background for each section. */
export default function Section({ id, children, alt = false, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-20 sm:py-28 ${alt ? "bg-alt" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
