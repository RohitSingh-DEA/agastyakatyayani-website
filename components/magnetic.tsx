"use client";

import { useRef } from "react";

const PULL = 0.25;

// Wrapper that nudges its child toward the cursor while hovered.
export function Magnetic({
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * PULL}px, ${dy * PULL}px)`;
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
