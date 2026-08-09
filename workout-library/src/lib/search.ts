import { allExercises } from "@/data/exercises";
import { allWorkouts } from "@/data/workouts";
import { allStretches } from "@/data/stretches";
import { allMobilityExercises } from "@/data/mobility";
import { muscleGroups } from "@/data/muscles";
import type { Exercise, MobilityExercise, MuscleGroup, Stretch, Workout } from "@/types";

export interface SearchResults {
  exercises: Exercise[];
  workouts: Workout[];
  stretches: Stretch[];
  mobility: MobilityExercise[];
  muscles: MuscleGroup[];
}

function norm(v: string): string {
  return v.toLowerCase();
}

function textMatches(haystacks: (string | undefined)[], query: string): boolean {
  const q = norm(query);
  return haystacks.some((h) => h && norm(h).includes(q));
}

export function search(query: string, limit = 8): SearchResults {
  const q = query.trim();
  if (!q) return { exercises: [], workouts: [], stretches: [], mobility: [], muscles: [] };

  const exercises = allExercises
    .filter((e) =>
      textMatches(
        [e.name, e.category, ...e.primaryMuscles, ...e.secondaryMuscles, ...(e.muscleSubdivision ?? []), ...e.tags, ...e.movementPattern],
        q,
      ),
    )
    .slice(0, limit);

  const workouts = allWorkouts
    .filter((w) => textMatches([w.name, w.category, ...w.tags, ...w.trainingGoals], q))
    .slice(0, limit);

  const stretches = allStretches
    .filter((s) => textMatches([s.name, s.bodyArea, ...s.targetMuscles, ...s.tags], q))
    .slice(0, limit);

  const mobility = allMobilityExercises
    .filter((m) => textMatches([m.name, m.bodyArea, ...m.tags], q))
    .slice(0, limit);

  const muscles = muscleGroups
    .filter((m) => textMatches([m.name, m.blurb, ...m.muscles, ...m.focusAreas.map((f) => f.name)], q))
    .slice(0, limit);

  return { exercises, workouts, stretches, mobility, muscles };
}

export function hasResults(results: SearchResults): boolean {
  return (
    results.exercises.length > 0 ||
    results.workouts.length > 0 ||
    results.stretches.length > 0 ||
    results.mobility.length > 0 ||
    results.muscles.length > 0
  );
}
