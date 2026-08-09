import { cn } from "@/lib/utils";

export function Chip({
  active,
  onClick,
  children,
  className,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors tap-highlight-none active:scale-[0.97]",
        active
          ? "border-accent bg-accent-soft text-accent"
          : "border-border bg-surface text-muted-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}
