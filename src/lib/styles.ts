/** Shared Tailwind class strings so buttons look identical everywhere. */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

export const buttonStyles = {
  primary: `${base} bg-primary px-6 py-3 text-white shadow-soft hover:bg-primary-hover hover:shadow-lift`,
  outline: `${base} border-2 border-primary px-6 py-[10px] text-primary hover:bg-primary hover:text-white`,
  small: `${base} bg-primary px-4 py-2 text-sm text-white hover:bg-primary-hover`,
  smallOutline: `${base} border border-border bg-surface px-4 py-2 text-sm text-heading hover:border-primary hover:text-primary`,
};
