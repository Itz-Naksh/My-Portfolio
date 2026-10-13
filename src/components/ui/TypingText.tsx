"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingTextProps {
  phrases: string[];
  typeSpeed?: number; // ms per character while typing
  deleteSpeed?: number; // ms per character while deleting
  pause?: number; // ms to hold a full phrase before deleting
}

/**
 * Subtle typewriter effect that cycles through `phrases`.
 * Screen readers get the first phrase as static text; users who prefer
 * reduced motion see the first phrase with no animation at all.
 */
export default function TypingText({ phrases, typeSpeed = 80, deleteSpeed = 40, pause = 1800 }: TypingTextProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) return;

    const current = phrases[index % phrases.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduceMotion, typeSpeed, deleteSpeed, pause]);

  if (reduceMotion) return <span>{phrases[0]}</span>;

  return (
    <>
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true">
        {text}
        <span className="typing-caret ml-0.5 inline-block w-[2px] bg-primary align-middle" style={{ height: "1.1em" }} />
      </span>
    </>
  );
}
