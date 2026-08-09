import { useState } from "react";
import { Check, ChevronRight, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { suggestProgressiveOverload } from "@/lib/progressiveOverload";
import type { Exercise, HistoryExerciseEntry, WorkoutExercise } from "@/types";

function parseLeadingNumber(text: string, fallback: number): number {
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : fallback;
}

/**
 * Owns the reps/weight input state for a single set. Mounted with a key of
 * `${exerciseIdx}-${setNumber}` by the parent so React resets this state
 * naturally on every new set/exercise, instead of syncing it via an effect.
 */
export function SetEntryPanel({
  workoutExercise,
  exercise,
  lastSession,
  onCompleteSet,
  onSwap,
  onNext,
  canGoNext,
}: {
  workoutExercise: WorkoutExercise;
  exercise: Exercise;
  lastSession?: { exercise: HistoryExerciseEntry };
  onCompleteSet: (reps: number, weight: number | "") => void;
  onSwap: () => void;
  onNext: () => void;
  canGoNext: boolean;
}) {
  const [reps, setReps] = useState(() => parseLeadingNumber(workoutExercise.reps, 10));
  const [weight, setWeight] = useState<number | "">("");

  const suggestion = lastSession ? suggestProgressiveOverload(lastSession.exercise.sets, workoutExercise.reps) : null;

  return (
    <>
      <div className="rounded-lg border border-border bg-surface p-5">
        <p className="mt-1 text-[13px] text-muted-foreground">Target: {workoutExercise.reps} reps</p>
        <h1 className="mt-1 text-[24px] font-extrabold leading-tight">{exercise.name}</h1>

        {lastSession && (
          <>
            <p className="mt-2 text-[12px] text-muted-foreground">
              Last time: {lastSession.exercise.sets.length} sets
              {lastSession.exercise.sets[0]?.weight ? ` · ${lastSession.exercise.sets[0].weight}kg` : ""}
              {lastSession.exercise.sets[0]?.reps ? ` · ${lastSession.exercise.sets[0].reps} reps` : ""}
            </p>
            {suggestion && <p className="mt-1 text-[12px] font-medium text-accent">{suggestion}</p>}
          </>
        )}

        <div className="mt-4 flex gap-3">
          <label className="flex-1">
            <span className="text-[11px] font-semibold text-muted-foreground">Reps</span>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(Number(e.target.value))}
              className="mt-1 h-12 w-full rounded-lg border border-border bg-surface-elevated px-3 text-center text-[16px] font-bold outline-none"
            />
          </label>
          <label className="flex-1">
            <span className="text-[11px] font-semibold text-muted-foreground">Weight (kg)</span>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="—"
              className="mt-1 h-12 w-full rounded-lg border border-border bg-surface-elevated px-3 text-center text-[16px] font-bold outline-none"
            />
          </label>
        </div>

        {workoutExercise.notes && <p className="mt-3 text-[12.5px] text-muted-foreground">{workoutExercise.notes}</p>}
      </div>

      {exercise.coachingCues && exercise.coachingCues.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exercise.coachingCues.slice(0, 2).map((c, i) => (
            <span key={i} className="rounded-lg bg-accent-soft px-3 py-2 text-[12.5px] font-medium text-accent">
              “{c}”
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Button size="lg" onClick={() => onCompleteSet(reps, weight)}>
          <Check size={18} /> Complete Set
        </Button>
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1" onClick={onSwap}>
            <Repeat size={16} /> Swap
          </Button>
          <Button variant="secondary" className="flex-1" onClick={onNext} disabled={!canGoNext}>
            Next <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </>
  );
}
