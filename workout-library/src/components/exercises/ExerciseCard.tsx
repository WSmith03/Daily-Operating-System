import Link from "next/link";
import type { Exercise } from "@/types";
import { Badge } from "@/components/ui/badge";
import { FavouriteButton } from "@/components/shared/FavouriteButton";

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Link
      href={`/exercises/${exercise.slug}`}
      className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3.5 active:scale-[0.99] transition-transform"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-bold leading-tight">{exercise.name}</p>
        <p className="mt-0.5 truncate text-[12.5px] text-muted-foreground">
          {exercise.primaryMuscles.slice(0, 2).join(", ")}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Badge>{exercise.difficulty}</Badge>
          <Badge>{exercise.equipment[0]}</Badge>
          <Badge>{exercise.exerciseType}</Badge>
        </div>
      </div>
      <FavouriteButton kind="exercises" slug={exercise.slug} />
    </Link>
  );
}
