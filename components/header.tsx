"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { ScrollProgress } from "./scroll-progress";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur transition-shadow dark:bg-slate-950/85 ${
        scrolled
          ? "border-slate-200 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_8px_24px_-16px_rgba(15,23,42,0.35)] dark:border-slate-800"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" aria-label="Agastya Katyayani — home" className="transition-transform hover:scale-[1.02]">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-amber-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <ThemeToggle />
          <Link
            href="#contact"
            className="ml-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-amber-500/30 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-md hover:shadow-amber-500/40"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile"
        className={`grid overflow-hidden border-t border-slate-200 bg-white transition-[grid-template-rows] duration-300 ease-out dark:border-slate-800 dark:bg-slate-950 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                className="block rounded-lg bg-amber-500 px-3 py-2.5 text-center text-sm font-semibold text-slate-900 hover:bg-amber-400"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ScrollProgress />
    </header>
  );
}
