import type { Stat } from "@/data/portfolio";

export default function StatCard({ value, label }: Stat) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-2 py-4 text-center shadow-soft sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <p className="text-gradient font-heading text-2xl font-semibold sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs leading-snug sm:text-sm">{label}</p>
    </div>
  );
}
