"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Tech-themed hero illustration (laptop, code, database and chart cards).
 * Drawn inline with the site's CSS colour variables, so it follows light/dark mode automatically.
 */
export default function HeroIllustration() {
  const reduceMotion = useReducedMotion();

  // Gentle floating motion for the small cards
  const float = (delay: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <svg
      viewBox="0 0 480 420"
      role="img"
      aria-label="Illustration of a laptop showing code, with database, chart and code cards around it"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="hi-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-primary)" />
          <stop offset="1" stopColor="var(--color-accent)" />
        </linearGradient>
        <filter id="hi-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Soft backdrop circle */}
      <circle cx="240" cy="210" r="170" fill="url(#hi-brand)" opacity="0.14" />
      <circle cx="240" cy="210" r="120" fill="url(#hi-brand)" opacity="0.1" />

      {/* Laptop screen */}
      <g filter="url(#hi-shadow)">
        <rect x="95" y="105" width="290" height="185" rx="14" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
        {/* Window bar */}
        <rect x="95" y="105" width="290" height="30" rx="14" fill="var(--color-alt)" />
        <rect x="95" y="122" width="290" height="13" fill="var(--color-alt)" />
        <circle cx="115" cy="120" r="5" fill="#F87171" />
        <circle cx="132" cy="120" r="5" fill="#FBBF24" />
        <circle cx="149" cy="120" r="5" fill="#34D399" />
        {/* Code lines */}
        <g strokeLinecap="round" strokeWidth="8">
          <line x1="120" y1="160" x2="170" y2="160" stroke="var(--color-brand)" />
          <line x1="180" y1="160" x2="260" y2="160" stroke="var(--color-accent)" />
          <line x1="140" y1="184" x2="230" y2="184" stroke="var(--color-body)" opacity="0.5" />
          <line x1="240" y1="184" x2="290" y2="184" stroke="var(--color-brand)" />
          <line x1="140" y1="208" x2="200" y2="208" stroke="var(--color-accent)" />
          <line x1="210" y1="208" x2="320" y2="208" stroke="var(--color-body)" opacity="0.5" />
          <line x1="160" y1="232" x2="250" y2="232" stroke="var(--color-brand)" />
          <line x1="120" y1="256" x2="160" y2="256" stroke="var(--color-accent)" />
        </g>
        {/* Blinking cursor */}
        <rect x="168" y="248" width="4" height="16" rx="2" fill="var(--color-brand)">
          {!reduceMotion && <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />}
        </rect>
      </g>

      {/* Laptop base */}
      <path d="M70 292 H410 L392 312 H88 Z" fill="var(--color-border)" />
      <rect x="205" y="292" width="70" height="6" rx="3" fill="var(--color-alt)" />

      {/* Floating card: code tag */}
      <motion.g {...float(0)}>
        <g filter="url(#hi-shadow)">
          <rect x="18" y="70" width="104" height="58" rx="14" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="70" y="108" textAnchor="middle" fontFamily="Consolas, monospace" fontSize="26" fontWeight="700" fill="var(--color-brand)">
            {"</>"}
          </text>
        </g>
      </motion.g>

      {/* Floating card: database */}
      <motion.g {...float(1.2)}>
        <g filter="url(#hi-shadow)">
          <rect x="372" y="48" width="90" height="90" rx="16" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <g fill="none" stroke="var(--color-accent)" strokeWidth="5">
            <ellipse cx="417" cy="74" rx="22" ry="8" />
            <path d="M395 74 V110 C395 116 439 116 439 110 V74" />
            <path d="M395 92 C395 98 439 98 439 92" />
          </g>
        </g>
      </motion.g>

      {/* Floating card: bar chart */}
      <motion.g {...float(2.4)}>
        <g filter="url(#hi-shadow)">
          <rect x="360" y="300" width="104" height="84" rx="16" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <rect x="380" y="350" width="14" height="20" rx="3" fill="var(--color-brand)" opacity="0.6" />
          <rect x="402" y="336" width="14" height="34" rx="3" fill="var(--color-brand)" opacity="0.8" />
          <rect x="424" y="320" width="14" height="50" rx="3" fill="url(#hi-brand)" />
        </g>
      </motion.g>

      {/* Floating card: check / deployed */}
      <motion.g {...float(0.6)}>
        <g filter="url(#hi-shadow)">
          <rect x="16" y="300" width="132" height="54" rx="14" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <circle cx="42" cy="327" r="13" fill="#34D399" opacity="0.2" />
          <path d="M36 327 L41 332 L49 322" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="64" y="333" fontFamily="Segoe UI, Arial, sans-serif" fontSize="15" fontWeight="600" fill="var(--color-heading)">
            Deployed
          </text>
        </g>
      </motion.g>

      {/* Sparkles */}
      <path d="M210 40 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="var(--color-accent)" opacity="0.8" />
      <circle cx="300" cy="60" r="6" fill="var(--color-brand)" opacity="0.6" />
    </svg>
  );
}
