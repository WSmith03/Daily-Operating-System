import { cn } from "@/lib/utils";

export function Progress({ value, className }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated", className)}>
      <div className="h-full gradient-accent rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
    </div>
  );
}
