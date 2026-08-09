import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export function QuickWorkoutCallout() {
  return (
    <Link
      href="/generator"
      className="flex items-center gap-3 rounded-lg gradient-surface border border-border p-4 active:scale-[0.99] transition-transform"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
        <Sparkles size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold">Quick Workout</p>
        <p className="text-[12.5px] text-muted-foreground">
          Muscle, equipment, time & goal → we build the session
        </p>
      </div>
      <ChevronRight size={18} className="text-muted-foreground" />
    </Link>
  );
}
