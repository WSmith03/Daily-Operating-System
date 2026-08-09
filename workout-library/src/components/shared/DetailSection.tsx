export function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-[13px] font-bold uppercase tracking-wide text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function InstructionList({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[14.5px] leading-snug">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-[12px] font-bold text-accent">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function BulletList({ items, tone = "default" }: { items: string[]; tone?: "default" | "warning" }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-[14px] leading-snug text-foreground/90">
          <span className={tone === "warning" ? "text-danger" : "text-accent"}>&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
