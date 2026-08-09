"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { WorkoutCard } from "@/components/workout/WorkoutCard";
import type { Exercise, MuscleGroup, Workout } from "@/types";

export function MuscleGroupExplorer({
  group,
  exercises,
  workouts,
}: {
  group: MuscleGroup;
  exercises: Exercise[];
  workouts: Workout[];
}) {
  const [focus, setFocus] = useState<string | null>(null);
  const [tab, setTab] = useState<"workouts" | "exercises">("workouts");

  const filteredExercises = useMemo(() => {
    if (!focus) return exercises;
    const focusName = group.focusAreas.find((f) => f.id === focus)?.name.toLowerCase();
    return exercises.filter(
      (e) =>
        e.muscleSubdivision?.some((s) => s.toLowerCase() === focusName) ||
        e.tags.some((t) => t.toLowerCase() === focusName),
    );
  }, [exercises, focus, group.focusAreas]);

  const filteredWorkouts = useMemo(() => {
    if (!focus) return workouts;
    const focusName = group.focusAreas.find((f) => f.id === focus)?.name.toLowerCase();
    return workouts.filter((w) => w.tags.some((t) => t.toLowerCase() === focusName));
  }, [workouts, focus, group.focusAreas]);

  const generatorHref = `/generator?muscle=${group.id}${focus ? `&focus=${encodeURIComponent(group.focusAreas.find((f) => f.id === focus)?.name ?? "")}` : ""}`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        <Chip active={focus === null} onClick={() => setFocus(null)}>
          All {group.name}
        </Chip>
        {group.focusAreas.map((fa) => (
          <Chip key={fa.id} active={focus === fa.id} onClick={() => setFocus(fa.id)}>
            {fa.name}
          </Chip>
        ))}
      </div>

      <Link
        href={generatorHref}
        className="flex items-center gap-3 rounded-lg gradient-surface border border-border p-4 active:scale-[0.99] transition-transform"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Sparkles size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[14.5px] font-bold">Build me a workout</p>
          <p className="text-[12px] text-muted-foreground">Auto-select exercises for this focus</p>
        </div>
      </Link>

      <div className="flex gap-1.5 rounded-full bg-surface-elevated p-1">
        <button
          onClick={() => setTab("workouts")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${tab === "workouts" ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
        >
          Workouts ({filteredWorkouts.length})
        </button>
        <button
          onClick={() => setTab("exercises")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${tab === "exercises" ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
        >
          Exercises ({filteredExercises.length})
        </button>
      </div>

      {tab === "workouts" ? (
        <div className="flex flex-col gap-3">
          {filteredWorkouts.length === 0 && (
            <p className="text-sm text-muted-foreground">No preset workouts for this focus yet — try the generator above.</p>
          )}
          {filteredWorkouts.map((w) => (
            <WorkoutCard key={w.slug} workout={w} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          {filteredExercises.length === 0 && (
            <p className="text-sm text-muted-foreground">No exercises tagged for this focus yet.</p>
          )}
          {filteredExercises.map((e) => (
            <ExerciseCard key={e.slug} exercise={e} />
          ))}
        </div>
      )}
    </div>
  );
}
