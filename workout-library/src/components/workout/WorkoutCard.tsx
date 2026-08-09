import Link from "next/link";
import { Clock, BarChart3 } from "lucide-react";
import type { Workout } from "@/types";
import { AccentBadge, Badge } from "@/components/ui/badge";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import { formatMinutes } from "@/lib/utils";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.slug}`}
      className="block rounded-lg border border-border bg-surface p-4 active:scale-[0.99] transition-transform"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[16px] font-bold leading-tight">{workout.name}</p>
        <FavouriteButton kind="workouts" slug={workout.slug} size={16} className="h-8 w-8 shrink-0" />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-[12.5px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock size={13} /> {formatMinutes(workout.durationMinutes)}
        </span>
        <span className="flex items-center gap-1">
          <BarChart3 size={13} /> {workout.difficulty}
        </span>
        <span>{workout.exercises.length} exercises</span>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <AccentBadge>{workout.trainingGoals[0]}</AccentBadge>
        {workout.equipment.slice(0, 2).map((eq) => (
          <Badge key={eq}>{eq}</Badge>
        ))}
      </div>
    </Link>
  );
}
