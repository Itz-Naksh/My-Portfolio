"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/** Re-render whenever <html data-theme> changes. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
// On the server we don't know the visitor's choice yet
const getServerTheme = (): Theme | null => null;

/** Sun/moon button that switches between light and dark mode and remembers the choice. */
export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);
  const isDark = theme !== "light";

  const toggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-heading transition-colors hover:text-brand"
    >
      {/* Nothing until the browser value is known, so the icon never flips on load */}
      {theme && (isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />)}
    </button>
  );
}
