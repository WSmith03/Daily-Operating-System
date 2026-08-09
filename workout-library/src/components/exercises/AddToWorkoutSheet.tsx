"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCustomWorkouts } from "@/hooks/useCustomWorkouts";
import { uid } from "@/lib/utils";

export function AddToWorkoutSheet({ exerciseSlug, trigger }: { exerciseSlug: string; trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [addedTo, setAddedTo] = useState<string | null>(null);
  const { workouts, createWorkout, updateWorkout } = useCustomWorkouts();

  const addToExisting = (id: string) => {
    const workout = workouts.find((w) => w.id === id);
    if (!workout) return;
    updateWorkout(id, {
      exercises: [
        ...workout.exercises,
        { id: uid("cwe"), exerciseSlug, sets: 3, reps: "10", restSeconds: 60 },
      ],
    });
    setAddedTo(id);
  };

  const createAndAdd = () => {
    if (!newName.trim()) return;
    const workout = createWorkout(newName.trim(), [{ exerciseSlug, sets: 3, reps: "10", restSeconds: 60 }]);
    setAddedTo(workout.id);
    setNewName("");
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <Sheet open={open} onOpenChange={setOpen} title="Add to Workout">
        <div className="flex flex-col gap-4 pb-2">
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New workout name"
              className="h-11 flex-1 rounded-lg border border-border bg-surface-elevated px-3 text-[14px] outline-none"
            />
            <Button size="icon" onClick={createAndAdd} aria-label="Create workout">
              <Plus size={18} />
            </Button>
          </div>

          {workouts.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-[13px] font-semibold text-muted-foreground">Your workouts</p>
              {workouts.map((w) => (
                <button
                  key={w.id}
                  onClick={() => addToExisting(w.id)}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface p-3 text-left"
                >
                  <div>
                    <p className="text-[14px] font-semibold">{w.name}</p>
                    <p className="text-[12px] text-muted-foreground">{w.exercises.length} exercises</p>
                  </div>
                  {addedTo === w.id && <Check size={18} className="text-accent" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </Sheet>
    </>
  );
}
