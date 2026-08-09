"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Play, RefreshCw, Save } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { muscleGroups } from "@/data/muscles";
import { DIFFICULTIES, DURATION_OPTIONS, EQUIPMENT_LIST, TRAINING_GOALS } from "@/data/constants";
import { generateQuickWorkout } from "@/lib/generator";
import { useCustomWorkouts } from "@/hooks/useCustomWorkouts";
import type { Difficulty, Equipment, MuscleGroupId, QuickWorkoutParams, TrainingGoal } from "@/types";
import { formatMinutes } from "@/lib/utils";

const MUSCLE_OPTIONS: MuscleGroupId[] = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "forearms",
  "legs",
  "glutes",
  "core",
  "full-body",
  "kettlebell",
];

export function GeneratorFlow({ initialMuscle, initialFocus }: { initialMuscle?: MuscleGroupId; initialFocus?: string }) {
  const [muscle, setMuscle] = useState<MuscleGroupId>(initialMuscle ?? "chest");
  const [focus, setFocus] = useState<string | undefined>(initialFocus);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [duration, setDuration] = useState(30);
  const [difficulty, setDifficulty] = useState<Difficulty>("Intermediate");
  const [goal, setGoal] = useState<TrainingGoal>("Hypertrophy");
  const [seed, setSeed] = useState(0);
  const { createWorkout } = useCustomWorkouts();
  const [savedId, setSavedId] = useState<string | null>(null);

  const group = muscleGroups.find((g) => g.id === muscle);

  const params: QuickWorkoutParams = useMemo(
    () => ({ muscleGroup: muscle, focusArea: focus, equipment, durationMinutes: duration, difficulty, trainingGoal: goal }),
    [muscle, focus, equipment, duration, difficulty, goal],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const result = useMemo(() => generateQuickWorkout(params), [params, seed]);

  const toggleEquipment = (eq: Equipment) =>
    setEquipment((prev) => (prev.includes(eq) ? prev.filter((e) => e !== eq) : [...prev, eq]));

  const saveAsCustom = () => {
    if (!result) return;
    const workout = createWorkout(
      `${group?.name}${focus ? ` — ${focus}` : ""} (${formatMinutes(duration)})`,
      result.exercises.map((e) => ({ exerciseSlug: e.exerciseSlug, sets: e.sets, reps: e.reps, restSeconds: e.restSeconds })),
    );
    setSavedId(workout.id);
  };

  return (
    <div className="flex flex-col gap-6 pb-10">
      <section>
        <p className="mb-2 text-[13px] font-bold text-muted-foreground">Muscle Group</p>
        <div className="flex flex-wrap gap-2">
          {MUSCLE_OPTIONS.map((m) => (
            <Chip
              key={m}
              active={muscle === m}
              onClick={() => {
                setMuscle(m);
                setFocus(undefined);
              }}
            >
              {muscleGroups.find((g) => g.id === m)?.name}
            </Chip>
          ))}
        </div>
      </section>

      {group && group.focusAreas.length > 0 && (
        <section>
          <p className="mb-2 text-[13px] font-bold text-muted-foreground">Focus Area</p>
          <div className="flex flex-wrap gap-2">
            <Chip active={!focus} onClick={() => setFocus(undefined)}>
              Any
            </Chip>
            {group.focusAreas.map((fa) => (
              <Chip key={fa.id} active={focus === fa.name} onClick={() => setFocus(fa.name)}>
                {fa.name}
              </Chip>
            ))}
          </div>
        </section>
      )}

      <section>
        <p className="mb-2 text-[13px] font-bold text-muted-foreground">Equipment</p>
        <div className="flex flex-wrap gap-2">
          {EQUIPMENT_LIST.map((eq) => (
            <Chip key={eq} active={equipment.includes(eq)} onClick={() => toggleEquipment(eq)}>
              {eq}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-2 text-[13px] font-bold text-muted-foreground">Duration</p>
        <div className="flex flex-wrap gap-2">
          {DURATION_OPTIONS.map((d) => (
            <Chip key={d} active={duration === d} onClick={() => setDuration(d)}>
              {formatMinutes(d)}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-2 text-[13px] font-bold text-muted-foreground">Difficulty</p>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => (
            <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>
              {d}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-2 text-[13px] font-bold text-muted-foreground">Training Goal</p>
        <div className="flex flex-wrap gap-2">
          {TRAINING_GOALS.map((g) => (
            <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>
              {g}
            </Chip>
          ))}
        </div>
      </section>

      <div className="sticky bottom-0 -mx-4 border-t border-border bg-background/95 px-4 pb-2 pt-3 backdrop-blur-xl">
        {result ? (
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[13px] text-muted-foreground">
              {result.exerciseDetails.length} exercises · ~{result.estimatedMinutes} min
            </p>
            <button onClick={() => setSeed((s) => s + 1)} className="flex items-center gap-1 text-[13px] font-semibold text-accent">
              <RefreshCw size={14} /> Reshuffle
            </button>
          </div>
        ) : (
          <p className="mb-3 text-[13px] text-muted-foreground">No exercises match yet — widen your filters.</p>
        )}
      </div>

      {result && (
        <>
          <div className="flex flex-col gap-2.5">
            {result.exerciseDetails.map((e) => (
              <ExerciseCard key={e.slug} exercise={e} />
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1" onClick={saveAsCustom} disabled={!!savedId}>
              <Save size={16} /> {savedId ? "Saved" : "Save Workout"}
            </Button>
            <Link href={savedId ? `/custom/${savedId}/play` : "#"} className="flex-1">
              <Button className="w-full" disabled={!savedId}>
                <Play size={16} /> Go Start It
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
