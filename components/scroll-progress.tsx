"use client";

import { useEffect, useRef } from "react";

// Reading-progress bar. Uses the CSS scroll-driven animation declared on
// .scroll-progress where the browser supports animation-timeline: scroll();
// otherwise falls back to a passive JS scroll listener.
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (CSS.supports("animation-timeline: scroll()")) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400"
    />
  );
}
