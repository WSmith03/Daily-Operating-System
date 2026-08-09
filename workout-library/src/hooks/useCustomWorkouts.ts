"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "@/lib/storage";
import { uid } from "@/lib/utils";
import type { CustomWorkout, CustomWorkoutExercise } from "@/types";

export function useCustomWorkouts() {
  const [workouts, setWorkouts, hydrated] = useLocalStorage<CustomWorkout[]>(STORAGE_KEYS.customWorkouts, []);

  const createWorkout = useCallback(
    (name: string, exercises: Omit<CustomWorkoutExercise, "id">[] = []) => {
      const now = new Date().toISOString();
      const workout: CustomWorkout = {
        id: uid("cw"),
        name,
        exercises: exercises.map((e) => ({ ...e, id: uid("cwe") })),
        createdAt: now,
        updatedAt: now,
      };
      setWorkouts((prev) => [workout, ...prev]);
      return workout;
    },
    [setWorkouts],
  );

  const updateWorkout = useCallback(
    (id: string, patch: Partial<Omit<CustomWorkout, "id" | "createdAt">>) => {
      setWorkouts((prev) =>
        prev.map((w) => (w.id === id ? { ...w, ...patch, updatedAt: new Date().toISOString() } : w)),
      );
    },
    [setWorkouts],
  );

  const deleteWorkout = useCallback(
    (id: string) => {
      setWorkouts((prev) => prev.filter((w) => w.id !== id));
    },
    [setWorkouts],
  );

  const getWorkout = useCallback((id: string) => workouts.find((w) => w.id === id), [workouts]);

  return { workouts, createWorkout, updateWorkout, deleteWorkout, getWorkout, hydrated };
}
