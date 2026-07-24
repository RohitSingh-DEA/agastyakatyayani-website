"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-24 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:text-amber-400 md:bottom-8 md:right-6 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
