import { Plus, SkipForward } from "lucide-react";
import { formatSeconds } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function RestTimer({
  secondsLeft,
  totalSeconds,
  onSkip,
  onAddTime,
}: {
  secondsLeft: number;
  totalSeconds: number;
  onSkip: () => void;
  onAddTime: (seconds: number) => void;
}) {
  const pct = totalSeconds > 0 ? ((totalSeconds - secondsLeft) / totalSeconds) * 100 : 100;

  return (
    <div className="flex flex-col items-center gap-5 rounded-lg border border-border bg-surface p-6">
      <p className="text-[13px] font-semibold uppercase tracking-widest text-muted-foreground">Rest</p>
      <div className="relative flex h-36 w-36 items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="var(--surface-elevated)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 44}
            strokeDashoffset={2 * Math.PI * 44 * (1 - pct / 100)}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="text-3xl font-extrabold tabular-nums">{formatSeconds(secondsLeft)}</span>
      </div>
      <div className="flex w-full gap-2">
        <Button variant="secondary" className="flex-1" onClick={() => onAddTime(15)}>
          <Plus size={16} /> 15s
        </Button>
        <Button variant="primary" className="flex-1" onClick={onSkip}>
          <SkipForward size={16} /> Skip
        </Button>
      </div>
    </div>
  );
}
