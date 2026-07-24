"use client";

import { useEffect, useRef } from "react";

const DURATION = 1600; // ms

// Counts from 0 to `value` when scrolled into view. Renders the final value
// on the server so the number is always present without JS.
export function Counter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(eased * value)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        el.textContent = `0${suffix}`;
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
