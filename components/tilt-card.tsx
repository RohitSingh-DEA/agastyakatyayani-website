"use client";

import { useRef } from "react";

const MAX_TILT = 5; // degrees

// 3D tilt-on-hover with a cursor-following glare. Sets --rx/--ry/--mx/--my,
// consumed by .tilt-card and .tilt-glare in globals.css. Mouse only — touch
// and reduced-motion users get a static card.
export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--ry", `${(px - 0.5) * 2 * MAX_TILT}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 2 * MAX_TILT}deg`);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt-card ${className}`}
    >
      <div aria-hidden="true" className="tilt-glare pointer-events-none absolute inset-0 rounded-2xl" />
      {children}
    </article>
  );
}
