"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { muscleGroups } from "@/data/muscles";
import { DIFFICULTIES, EQUIPMENT_LIST, MOVEMENT_PATTERNS, TRAINING_GOALS } from "@/data/constants";
import type { Difficulty, Equipment, Exercise, ExerciseType, Laterality, MovementPattern, MuscleGroupId, TrainingGoal } from "@/types";

const CATEGORY_OPTIONS: MuscleGroupId[] = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "forearms",
  "legs",
  "glutes",
  "core",
  "kettlebell",
];

const EXERCISE_TYPES: ExerciseType[] = ["Compound", "Isolation", "Mobility", "Stretch", "Conditioning"];
const LATERALITIES: Laterality[] = ["Bilateral", "Unilateral", "Both"];

interface Filters {
  category: MuscleGroupId | null;
  equipment: Equipment[];
  goal: TrainingGoal | null;
  difficulty: Difficulty | null;
  movementPattern: MovementPattern | null;
  exerciseType: ExerciseType | null;
  laterality: Laterality | null;
}

const EMPTY_FILTERS: Filters = {
  category: null,
  equipment: [],
  goal: null,
  difficulty: null,
  movementPattern: null,
  exerciseType: null,
  laterality: null,
};

export function ExerciseLibrary({ exercises, initialCategory }: { exercises: Exercise[]; initialCategory?: MuscleGroupId }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({ ...EMPTY_FILTERS, category: initialCategory ?? null });
  const [sheetOpen, setSheetOpen] = useState(false);

  const activeAdvancedCount = [filters.movementPattern, filters.exerciseType, filters.laterality].filter(Boolean).length;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return exercises.filter((e) => {
      if (q && !e.name.toLowerCase().includes(q) && !e.tags.some((t) => t.toLowerCase().includes(q))) return false;
      if (filters.category && e.category !== filters.category) return false;
      if (filters.equipment.length && !e.equipment.some((eq) => filters.equipment.includes(eq))) return false;
      if (filters.goal && !e.trainingGoals.includes(filters.goal)) return false;
      if (filters.difficulty && e.difficulty !== filters.difficulty) return false;
      if (filters.movementPattern && !e.movementPattern.includes(filters.movementPattern)) return false;
      if (filters.exerciseType && e.exerciseType !== filters.exerciseType) return false;
      if (filters.laterality && e.laterality !== filters.laterality) return false;
      return true;
    });
  }, [exercises, query, filters]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 h-12">
        <Search size={17} className="text-muted-foreground shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search exercises…"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
        />
        <button
          onClick={() => setSheetOpen(true)}
          className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated"
          aria-label="Filters"
        >
          <SlidersHorizontal size={16} />
          {activeAdvancedCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">
              {activeAdvancedCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip active={filters.category === null} onClick={() => setFilters((f) => ({ ...f, category: null }))}>
          All Muscles
        </Chip>
        {CATEGORY_OPTIONS.map((c) => {
          const group = muscleGroups.find((g) => g.id === c);
          return (
            <Chip
              key={c}
              active={filters.category === c}
              onClick={() => setFilters((f) => ({ ...f, category: f.category === c ? null : c }))}
            >
              {group?.name ?? c}
            </Chip>
          );
        })}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {DIFFICULTIES.map((d) => (
          <Chip
            key={d}
            active={filters.difficulty === d}
            onClick={() => setFilters((f) => ({ ...f, difficulty: f.difficulty === d ? null : d }))}
          >
            {d}
          </Chip>
        ))}
        {TRAINING_GOALS.slice(0, 6).map((g) => (
          <Chip
            key={g}
            active={filters.goal === g}
            onClick={() => setFilters((f) => ({ ...f, goal: f.goal === g ? null : g }))}
          >
            {g}
          </Chip>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {EQUIPMENT_LIST.filter((eq) => !["No Equipment"].includes(eq)).map((eq) => (
          <Chip
            key={eq}
            active={filters.equipment.includes(eq)}
            onClick={() =>
              setFilters((f) => ({
                ...f,
                equipment: f.equipment.includes(eq) ? f.equipment.filter((e) => e !== eq) : [...f.equipment, eq],
              }))
            }
          >
            {eq}
          </Chip>
        ))}
      </div>

      <p className="text-[12.5px] text-muted-foreground">{filtered.length} exercises</p>

      <div className="flex flex-col gap-2.5 pb-4">
        {filtered.map((e) => (
          <ExerciseCard key={e.slug} exercise={e} />
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No exercises match those filters.</p>}
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen} title="More Filters">
        <div className="flex flex-col gap-5 pb-2">
          <div>
            <p className="mb-2 text-[13px] font-semibold text-muted-foreground">Movement Pattern</p>
            <div className="flex flex-wrap gap-2">
              {MOVEMENT_PATTERNS.map((p) => (
                <Chip
                  key={p}
                  active={filters.movementPattern === p}
                  onClick={() => setFilters((f) => ({ ...f, movementPattern: f.movementPattern === p ? null : p }))}
                >
                  {p}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[13px] font-semibold text-muted-foreground">Type</p>
            <div className="flex flex-wrap gap-2">
              {EXERCISE_TYPES.map((t) => (
                <Chip
                  key={t}
                  active={filters.exerciseType === t}
                  onClick={() => setFilters((f) => ({ ...f, exerciseType: f.exerciseType === t ? null : t }))}
                >
                  {t}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[13px] font-semibold text-muted-foreground">Laterality</p>
            <div className="flex flex-wrap gap-2">
              {LATERALITIES.map((l) => (
                <Chip
                  key={l}
                  active={filters.laterality === l}
                  onClick={() => setFilters((f) => ({ ...f, laterality: f.laterality === l ? null : l }))}
                >
                  {l}
                </Chip>
              ))}
            </div>
          </div>
          <Button variant="secondary" onClick={() => setFilters(EMPTY_FILTERS)}>
            Clear all filters
          </Button>
        </div>
      </Sheet>
    </div>
  );
}
