/** Blush badge used for tech tags. */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-primary-hover">
      {children}
    </span>
  );
}
