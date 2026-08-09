import Link from "next/link";
import type { Exercise, WorkoutExercise } from "@/types";
import { formatSeconds } from "@/lib/utils";

export function WorkoutExerciseRow({ item, exercise, index }: { item: WorkoutExercise; exercise?: Exercise; index: number }) {
  return (
    <Link
      href={exercise ? `/exercises/${exercise.slug}` : "#"}
      className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3.5"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-[13px] font-bold text-accent">
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14.5px] font-bold">{exercise?.name ?? item.exerciseSlug}</p>
        <p className="text-[12px] text-muted-foreground">
          {item.sets} × {item.reps} · Rest {formatSeconds(item.restSeconds)}
        </p>
      </div>
    </Link>
  );
}
