"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { WorkoutCard } from "@/components/workout/WorkoutCard";
import { muscleGroups } from "@/data/muscles";
import { DIFFICULTIES, DURATION_OPTIONS, TRAINING_GOALS } from "@/data/constants";
import { formatMinutes } from "@/lib/utils";
import type { Difficulty, MuscleGroupId, TrainingGoal, Workout } from "@/types";

const CATEGORY_OPTIONS: MuscleGroupId[] = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "legs",
  "glutes",
  "core",
  "full-body",
  "kettlebell",
];

export function WorkoutLibrary({ workouts, initialCategory }: { workouts: Workout[]; initialCategory?: MuscleGroupId }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MuscleGroupId | null>(initialCategory ?? null);
  const [goal, setGoal] = useState<TrainingGoal | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [maxDuration, setMaxDuration] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return workouts.filter((w) => {
      if (q && !w.name.toLowerCase().includes(q) && !w.tags.some((t) => t.toLowerCase().includes(q))) return false;
      if (category && w.category !== category && !w.secondaryCategories?.includes(category)) return false;
      if (goal && !w.trainingGoals.includes(goal)) return false;
      if (difficulty && w.difficulty !== difficulty) return false;
      if (maxDuration && w.durationMinutes > maxDuration) return false;
      return true;
    });
  }, [workouts, query, category, goal, difficulty, maxDuration]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 h-12">
        <Search size={17} className="text-muted-foreground shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search workouts…"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip active={category === null} onClick={() => setCategory(null)}>
          All
        </Chip>
        {CATEGORY_OPTIONS.map((c) => (
          <Chip key={c} active={category === c} onClick={() => setCategory((cur) => (cur === c ? null : c))}>
            {muscleGroups.find((g) => g.id === c)?.name ?? c}
          </Chip>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {DURATION_OPTIONS.filter((d) => d <= 60).map((d) => (
          <Chip key={d} active={maxDuration === d} onClick={() => setMaxDuration((cur) => (cur === d ? null : d))}>
            ≤ {formatMinutes(d)}
          </Chip>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {DIFFICULTIES.map((d) => (
          <Chip key={d} active={difficulty === d} onClick={() => setDifficulty((cur) => (cur === d ? null : d))}>
            {d}
          </Chip>
        ))}
        {TRAINING_GOALS.slice(0, 6).map((g) => (
          <Chip key={g} active={goal === g} onClick={() => setGoal((cur) => (cur === g ? null : g))}>
            {g}
          </Chip>
        ))}
      </div>

      <p className="text-[12.5px] text-muted-foreground">{filtered.length} workouts</p>

      <div className="flex flex-col gap-3 pb-4">
        {filtered.map((w) => (
          <WorkoutCard key={w.slug} workout={w} />
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No workouts match those filters.</p>}
      </div>
    </div>
  );
}
