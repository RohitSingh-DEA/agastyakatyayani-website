export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="40" height="40" rx="8" fill="#0f172a" />
        <path d="M20 7 L31 31 H26.5 L20 16.5 L13.5 31 H9 Z" fill="#f59e0b" />
        <path d="M16.8 24.5 H23.2 L24.8 28 H15.2 Z" fill="#fbbf24" />
      </svg>
      <span className="leading-tight">
        <span
          className={`block text-base font-bold tracking-tight ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Agastya Katyayani
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Private Limited
        </span>
      </span>
    </span>
  );
}
