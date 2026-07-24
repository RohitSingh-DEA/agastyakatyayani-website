"use client";

import { useRef } from "react";

// Tracks the cursor and exposes it as --sx/--sy custom properties, consumed
// by the .spotlight-layer radial gradient (see globals.css).
export function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={onPointerMove} className={className}>
      <div aria-hidden="true" className="spotlight-layer pointer-events-none absolute inset-0" />
      {children}
    </div>
  );
}
