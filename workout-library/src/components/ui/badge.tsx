import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-[11px] font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AccentBadge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
