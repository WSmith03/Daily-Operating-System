import type { TrainingGoal } from "@/types";

export interface SetRepRestGuidance {
  sets: number;
  reps: string;
  restSeconds: number;
}

/** Conservative, general-fitness defaults per goal. Not medical advice. */
export const GOAL_GUIDANCE: Record<TrainingGoal, SetRepRestGuidance> = {
  Hypertrophy: { sets: 3, reps: "8-12", restSeconds: 90 },
  Strength: { sets: 4, reps: "3-6", restSeconds: 180 },
  "Muscular Endurance": { sets: 3, reps: "15-20", restSeconds: 45 },
  Conditioning: { sets: 3, reps: "12-20", restSeconds: 30 },
  Power: { sets: 4, reps: "3-5", restSeconds: 150 },
  "Athletic Performance": { sets: 3, reps: "6-10", restSeconds: 90 },
  Mobility: { sets: 2, reps: "30-60 sec", restSeconds: 15 },
  Stability: { sets: 3, reps: "8-12", restSeconds: 45 },
  "Injury Prevention": { sets: 3, reps: "10-15", restSeconds: 60 },
  Recovery: { sets: 1, reps: "As needed", restSeconds: 0 },
  "General Fitness": { sets: 3, reps: "10-15", restSeconds: 75 },
};

/** Isolation work typically wants slightly shorter rest than the goal default. */
export function restForExerciseType(goal: TrainingGoal, isIsolation: boolean): number {
  const base = GOAL_GUIDANCE[goal].restSeconds;
  if (!isIsolation) return base;
  return Math.max(30, Math.round(base * 0.7));
}
