import { allExercises } from "@/data/exercises";
import { GOAL_GUIDANCE, restForExerciseType } from "@/lib/trainingGuidance";
import type { Difficulty, Exercise, MuscleGroupId, QuickWorkoutParams, WorkoutExercise } from "@/types";

const DIFFICULTY_RANK: Record<Difficulty, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };

/** Roughly how many minutes one exercise (all sets + rest) consumes. */
function estimateExerciseMinutes(sets: number, restSeconds: number): number {
  const workSeconds = sets * 40; // ~40s of working time per set incl. setup
  const restTotal = Math.max(0, sets - 1) * restSeconds;
  return (workSeconds + restTotal) / 60;
}

function matchesEquipment(exercise: Exercise, selected: string[]): boolean {
  if (selected.length === 0) return true;
  if (exercise.equipment.includes("Bodyweight") || exercise.equipment.includes("No Equipment")) return true;
  return exercise.equipment.some((eq) => selected.includes(eq));
}

function matchesDifficulty(exercise: Exercise, selected: Difficulty): boolean {
  return DIFFICULTY_RANK[exercise.difficulty] <= DIFFICULTY_RANK[selected];
}

/**
 * Builds a pool of candidate exercises for a muscle group / focus area,
 * respecting equipment, difficulty and training goal filters.
 */
export function getCandidatePool(params: QuickWorkoutParams): Exercise[] {
  const { muscleGroup, focusArea, equipment, difficulty, trainingGoal } = params;

  return allExercises.filter((ex) => {
    if (ex.category !== muscleGroup) return false;
    if (focusArea && !ex.muscleSubdivision?.some((s) => s.toLowerCase() === focusArea.toLowerCase())) {
      // Fall back to tag match if subdivision doesn't line up exactly.
      if (!ex.tags.some((t) => t.toLowerCase() === focusArea.toLowerCase())) return false;
    }
    if (!matchesEquipment(ex, equipment)) return false;
    if (!matchesDifficulty(ex, difficulty)) return false;
    if (!ex.trainingGoals.includes(trainingGoal)) return false;
    return true;
  });
}

/**
 * Selects a movement-pattern-diverse set of exercises from a pool.
 * Prioritises compounds first, then fills with isolation work, while
 * avoiding picking multiple exercises that share the same primary
 * movement pattern once alternatives exist.
 */
export function pickDiverseExercises(pool: Exercise[], count: number): Exercise[] {
  const compounds = pool.filter((e) => e.exerciseType === "Compound");
  const isolations = pool.filter((e) => e.exerciseType !== "Compound");

  const selected: Exercise[] = [];
  const usedPatterns = new Set<string>();
  const usedSlugs = new Set<string>();

  const tryAdd = (candidates: Exercise[], allowPatternRepeat: boolean) => {
    for (const ex of candidates) {
      if (selected.length >= count) return;
      if (usedSlugs.has(ex.slug)) continue;
      const patternKey = ex.movementPattern[0] ?? ex.slug;
      if (!allowPatternRepeat && usedPatterns.has(patternKey)) continue;
      selected.push(ex);
      usedSlugs.add(ex.slug);
      usedPatterns.add(patternKey);
    }
  };

  // Pass 1: diverse compounds
  tryAdd(shuffle(compounds), false);
  // Pass 2: diverse isolations
  if (selected.length < count) tryAdd(shuffle(isolations), false);
  // Pass 3: allow pattern repeats from remaining pool if still short
  if (selected.length < count) {
    const remaining = pool.filter((e) => !usedSlugs.has(e.slug));
    tryAdd(shuffle(remaining), true);
  }

  return selected.slice(0, count);
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface GeneratedWorkout {
  exercises: WorkoutExercise[];
  exerciseDetails: Exercise[];
  estimatedMinutes: number;
}

export function generateQuickWorkout(params: QuickWorkoutParams): GeneratedWorkout | null {
  const pool = getCandidatePool(params);
  if (pool.length === 0) return null;

  const guidance = GOAL_GUIDANCE[params.trainingGoal];
  const targetCount = params.exerciseCount ?? estimateExerciseCount(params.durationMinutes, guidance.sets, guidance.restSeconds);

  const chosen = pickDiverseExercises(pool, Math.min(targetCount, pool.length));

  const exercises: WorkoutExercise[] = chosen.map((ex) => {
    const restSeconds = restForExerciseType(params.trainingGoal, ex.exerciseType === "Isolation");
    return {
      exerciseSlug: ex.slug,
      sets: guidance.sets,
      reps: guidance.reps,
      restSeconds,
      section: "main",
    };
  });

  const estimatedMinutes = exercises.reduce(
    (total, e) => total + estimateExerciseMinutes(e.sets, e.restSeconds),
    0,
  );

  return { exercises, exerciseDetails: chosen, estimatedMinutes: Math.round(estimatedMinutes) };
}

function estimateExerciseCount(durationMinutes: number, sets: number, restSeconds: number): number {
  const perExercise = estimateExerciseMinutes(sets, restSeconds) + 1; // +1 min transition/setup
  const count = Math.round(durationMinutes / perExercise);
  return Math.max(2, Math.min(8, count));
}

export function getAlternatives(exercise: Exercise, limit = 5): Exercise[] {
  if (exercise.alternatives?.length) {
    const bySlug = exercise.alternatives
      .map((slug) => allExercises.find((e) => e.slug === slug))
      .filter((e): e is Exercise => Boolean(e));
    if (bySlug.length) return bySlug.slice(0, limit);
  }
  return allExercises
    .filter(
      (e) =>
        e.slug !== exercise.slug &&
        e.primaryMuscles.some((m) => exercise.primaryMuscles.includes(m)) &&
        e.movementPattern.some((p) => exercise.movementPattern.includes(p)),
    )
    .slice(0, limit);
}

export function getExercisesByCategory(category: MuscleGroupId): Exercise[] {
  return allExercises.filter((e) => e.category === category);
}
