"use client";

import Link from "next/link";
import { useCustomWorkouts } from "@/hooks/useCustomWorkouts";
import { WorkoutPlayer } from "@/components/workout/WorkoutPlayer";

export function CustomWorkoutPlayer({ id }: { id: string }) {
  const { getWorkout, hydrated } = useCustomWorkouts();
  const workout = getWorkout(id);

  if (!hydrated) return null;

  if (!workout) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-3 px-4 pt-16 text-center">
        <p className="text-lg font-bold">Workout not found</p>
        <Link href="/favourites?tab=custom" className="text-sm text-accent">
          Back to My Workouts
        </Link>
      </div>
    );
  }

  return <WorkoutPlayer workoutName={workout.name} customWorkoutId={workout.id} workoutExercises={workout.exercises} />;
}
