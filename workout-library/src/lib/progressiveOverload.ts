import type { HistorySetEntry } from "@/types";

function parseUpperBound(range: string, fallback: number): number {
  const numbers = range.match(/\d+/g);
  if (!numbers) return fallback;
  return Number(numbers[numbers.length - 1]);
}

/**
 * Conservative, general suggestion only — not a prescriptive training plan.
 * Compares last session's average reps against the target rep range.
 */
export function suggestProgressiveOverload(lastSets: HistorySetEntry[], targetReps: string): string | null {
  const withReps = lastSets.filter((s) => typeof s.reps === "number");
  if (withReps.length === 0) return null;

  const avgReps = withReps.reduce((sum, s) => sum + (s.reps ?? 0), 0) / withReps.length;
  const upperTarget = parseUpperBound(targetReps, 12);

  if (avgReps >= upperTarget) return "Hit the top of your range last time — consider a small weight increase.";
  if (avgReps < upperTarget * 0.7) return "Below target reps last time — maintain this weight for now.";
  return "Close to target — aim for 1-2 more reps before adding weight.";
}
