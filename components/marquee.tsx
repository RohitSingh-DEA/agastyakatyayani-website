export function Marquee({ items }: { items: string[] }) {
  // The list is rendered twice; the marquee keyframe translates -50% so the
  // second copy seamlessly replaces the first.
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-track mask-fade-x overflow-hidden">
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
