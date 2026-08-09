"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, GripVertical, Play, Plus, Trash2 } from "lucide-react";
import { useCustomWorkouts } from "@/hooks/useCustomWorkouts";
import { allExercises } from "@/data/exercises";
import { AddExerciseSheet } from "@/components/custom/AddExerciseSheet";
import { Button } from "@/components/ui/button";
import { uid } from "@/lib/utils";

export function CustomWorkoutEditor({ id }: { id: string }) {
  const router = useRouter();
  const { getWorkout, updateWorkout, deleteWorkout, hydrated } = useCustomWorkouts();
  const workout = getWorkout(id);
  const [addOpen, setAddOpen] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

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

  const findExercise = (slug: string) => allExercises.find((e) => e.slug === slug);

  const reorder = (from: number, to: number) => {
    if (from === to) return;
    const next = [...workout.exercises];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    updateWorkout(id, { exercises: next });
  };

  const patchExercise = (exId: string, patch: Partial<(typeof workout.exercises)[number]>) => {
    updateWorkout(id, { exercises: workout.exercises.map((e) => (e.id === exId ? { ...e, ...patch } : e)) });
  };

  const removeExercise = (exId: string) => {
    updateWorkout(id, { exercises: workout.exercises.filter((e) => e.id !== exId) });
  };

  const addExercise = (slug: string) => {
    updateWorkout(id, {
      exercises: [...workout.exercises, { id: uid("cwe"), exerciseSlug: slug, sets: 3, reps: "10", restSeconds: 60 }],
    });
  };

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4 pb-24">
      <div className="flex items-center justify-between">
        <Link href="/favourites?tab=custom" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <ArrowLeft size={16} /> My Workouts
        </Link>
        <button
          onClick={() => {
            deleteWorkout(id);
            router.push("/favourites?tab=custom");
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-danger/15 text-danger"
          aria-label="Delete workout"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <input
        value={workout.name}
        onChange={(e) => updateWorkout(id, { name: e.target.value })}
        className="w-full bg-transparent text-[24px] font-extrabold tracking-tight outline-none"
      />

      <div className="flex flex-col gap-2.5">
        {workout.exercises.map((item, index) => {
          const exercise = findExercise(item.exerciseSlug);
          return (
            <div
              key={item.id}
              draggable
              onDragStart={() => setDragIndex(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragIndex !== null) reorder(dragIndex, index);
                setDragIndex(null);
              }}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface p-3"
            >
              <GripVertical size={16} className="shrink-0 cursor-grab text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-bold">{exercise?.name ?? item.exerciseSlug}</p>
                <div className="mt-1.5 flex gap-2">
                  <input
                    type="number"
                    value={item.sets}
                    onChange={(e) => patchExercise(item.id, { sets: Number(e.target.value) })}
                    className="h-8 w-14 rounded-md border border-border bg-surface-elevated text-center text-[12.5px] outline-none"
                  />
                  <input
                    value={item.reps}
                    onChange={(e) => patchExercise(item.id, { reps: e.target.value })}
                    className="h-8 w-16 rounded-md border border-border bg-surface-elevated text-center text-[12.5px] outline-none"
                  />
                  <input
                    type="number"
                    value={item.restSeconds}
                    onChange={(e) => patchExercise(item.id, { restSeconds: Number(e.target.value) })}
                    className="h-8 w-16 rounded-md border border-border bg-surface-elevated text-center text-[12.5px] outline-none"
                  />
                </div>
                <p className="mt-1 text-[10px] text-muted-foreground">sets · reps · rest (sec)</p>
              </div>
              <button onClick={() => removeExercise(item.id)} className="shrink-0 text-muted-foreground" aria-label="Remove">
                <Trash2 size={16} />
              </button>
            </div>
          );
        })}
        {workout.exercises.length === 0 && (
          <p className="text-sm text-muted-foreground">No exercises yet — add one below.</p>
        )}
      </div>

      <Button variant="secondary" onClick={() => setAddOpen(true)}>
        <Plus size={16} /> Add Exercise
      </Button>

      <div className="fixed inset-x-0 bottom-20 z-40 mx-auto max-w-lg px-4">
        <Link href={`/custom/${id}/play`}>
          <Button size="lg" className="w-full shadow-lg" disabled={workout.exercises.length === 0}>
            <Play size={18} /> Start Workout
          </Button>
        </Link>
      </div>

      <AddExerciseSheet open={addOpen} onOpenChange={setAddOpen} onSelect={addExercise} />
    </main>
  );
}
