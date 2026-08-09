"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Repeat, X } from "lucide-react";
import { allExercises } from "@/data/exercises";
import { useHistory } from "@/hooks/useHistory";
import { RestTimer } from "@/components/workout/RestTimer";
import { SwapExerciseSheet } from "@/components/workout/SwapExerciseSheet";
import { SetEntryPanel } from "@/components/workout/SetEntryPanel";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Exercise, HistoryExerciseEntry, WorkoutExercise } from "@/types";
import { formatSeconds } from "@/lib/utils";

export function WorkoutPlayer({
  workoutName,
  workoutSlug,
  customWorkoutId,
  workoutExercises,
}: {
  workoutName: string;
  workoutSlug?: string;
  customWorkoutId?: string;
  workoutExercises: WorkoutExercise[];
}) {
  const router = useRouter();
  const { addEntry, getLastSessionFor } = useHistory();

  const initialExercises = useMemo(
    () => workoutExercises.map((we) => allExercises.find((e) => e.slug === we.exerciseSlug)).filter((e): e is Exercise => Boolean(e)),
    [workoutExercises],
  );

  const [sessionExercises, setSessionExercises] = useState<Exercise[]>(initialExercises);
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const [setNumber, setSetNumber] = useState(1);
  const [logs, setLogs] = useState<Record<number, HistoryExerciseEntry["sets"]>>({});
  const [resting, setResting] = useState(false);
  const [restLeft, setRestLeft] = useState(0);
  const [restTotal, setRestTotal] = useState(0);
  const [swapOpen, setSwapOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const advanceAfterRest = useRef<() => void>(() => {});

  const currentWE = workoutExercises[exerciseIdx];
  const currentExercise = sessionExercises[exerciseIdx];
  const lastSession = currentExercise ? getLastSessionFor(currentExercise.slug) : undefined;

  useEffect(() => {
    if (finished) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [finished]);

  useEffect(() => {
    if (!resting) return;
    const id = setTimeout(() => {
      if (restLeft <= 1) {
        setResting(false);
        advanceAfterRest.current();
      } else {
        setRestLeft((s) => s - 1);
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [resting, restLeft]);

  const totalSets = workoutExercises.reduce((sum, e) => sum + e.sets, 0);
  const completedSets = workoutExercises
    .slice(0, exerciseIdx)
    .reduce((sum, e) => sum + e.sets, 0) + (setNumber - 1);
  const progressPct = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;

  const finishWorkout = useCallback(
    (finalLogs: Record<number, HistoryExerciseEntry["sets"]>) => {
      const exerciseEntries: HistoryExerciseEntry[] = workoutExercises.map((we, i) => ({
        exerciseSlug: sessionExercises[i]?.slug ?? we.exerciseSlug,
        sets: finalLogs[i] ?? [],
      }));
      addEntry({
        workoutSlug,
        customWorkoutId,
        workoutName,
        date: new Date().toISOString(),
        durationMinutes: Math.max(1, Math.round(elapsed / 60)),
        exercises: exerciseEntries,
      });
      setFinished(true);
    },
    [addEntry, customWorkoutId, elapsed, sessionExercises, workoutExercises, workoutName, workoutSlug],
  );

  const completeSet = (reps: number, weight: number | "") => {
    const entry = { setNumber, reps: Number(reps), weight: weight === "" ? undefined : Number(weight), completed: true };
    const nextLogs = { ...logs, [exerciseIdx]: [...(logs[exerciseIdx] ?? []), entry] };
    setLogs(nextLogs);

    const isLastSetOfExercise = setNumber >= currentWE.sets;
    const isLastExercise = exerciseIdx >= workoutExercises.length - 1;

    if (isLastSetOfExercise && isLastExercise) {
      finishWorkout(nextLogs);
      return;
    }

    advanceAfterRest.current = () => {
      if (isLastSetOfExercise) {
        setExerciseIdx((i) => i + 1);
        setSetNumber(1);
      } else {
        setSetNumber((s) => s + 1);
      }
    };

    if (currentWE.restSeconds > 0) {
      setRestTotal(currentWE.restSeconds);
      setRestLeft(currentWE.restSeconds);
      setResting(true);
    } else {
      advanceAfterRest.current();
    }
  };

  const skipToNextExercise = () => {
    setResting(false);
    setExerciseIdx((i) => Math.min(i + 1, workoutExercises.length - 1));
    setSetNumber(1);
  };

  if (finished) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 pt-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Check size={30} />
        </div>
        <h1 className="text-2xl font-extrabold">Workout Complete</h1>
        <p className="text-sm text-muted-foreground">
          {workoutName} · {Math.max(1, Math.round(elapsed / 60))} min · {workoutExercises.length} exercises
        </p>
        <Button className="mt-4 w-full" size="lg" onClick={() => router.push("/")}>
          Done
        </Button>
      </div>
    );
  }

  if (!currentExercise || !currentWE) {
    return <p className="px-4 pt-10 text-center text-sm text-muted-foreground">This workout has no exercises.</p>;
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4 pb-8">
      <div className="flex items-center justify-between">
        <button onClick={() => router.back()} className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated">
          <X size={18} />
        </button>
        <div className="flex flex-1 flex-col items-center">
          <p className="text-[12px] font-semibold text-muted-foreground">{formatSeconds(elapsed)}</p>
          <p className="text-[11px] text-muted-foreground">
            Exercise {exerciseIdx + 1} / {workoutExercises.length}
          </p>
        </div>
        <button
          onClick={() => setSwapOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated"
          aria-label="Swap exercise"
        >
          <Repeat size={16} />
        </button>
      </div>

      <Progress value={progressPct} />

      {resting ? (
        <RestTimer
          secondsLeft={restLeft}
          totalSeconds={restTotal}
          onSkip={() => {
            setResting(false);
            advanceAfterRest.current();
          }}
          onAddTime={(s) => setRestLeft((v) => v + s)}
        />
      ) : (
        <>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            Set {setNumber} of {currentWE.sets}
          </p>
          <SetEntryPanel
            key={`${exerciseIdx}-${setNumber}`}
            workoutExercise={currentWE}
            exercise={currentExercise}
            lastSession={lastSession}
            onCompleteSet={completeSet}
            onSwap={() => setSwapOpen(true)}
            onNext={skipToNextExercise}
            canGoNext={exerciseIdx < workoutExercises.length - 1}
          />
        </>
      )}

      <SwapExerciseSheet
        open={swapOpen}
        onOpenChange={setSwapOpen}
        current={currentExercise}
        onSelect={(ex) => setSessionExercises((prev) => prev.map((e, i) => (i === exerciseIdx ? ex : e)))}
      />
    </div>
  );
}
