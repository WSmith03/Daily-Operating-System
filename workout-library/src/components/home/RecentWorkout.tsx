"use client";

import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import { useHistory } from "@/hooks/useHistory";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function RecentWorkout() {
  const { history, hydrated } = useHistory();
  if (!hydrated || history.length === 0) return null;

  const last = history[0];

  return (
    <section>
      <SectionHeader title="Recent Workout" href="/favourites?tab=history" action="History" />
      <Link
        href={last.workoutSlug ? `/workouts/${last.workoutSlug}` : "/favourites?tab=history"}
        className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 active:scale-[0.99] transition-transform"
      >
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-bold">{last.workoutName}</p>
          <p className="mt-0.5 flex items-center gap-1 text-[12.5px] text-muted-foreground">
            <Clock size={12} /> {new Date(last.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
            {" · "}
            {last.durationMinutes} min
          </p>
        </div>
        <ChevronRight size={18} className="text-muted-foreground" />
      </Link>
    </section>
  );
}
