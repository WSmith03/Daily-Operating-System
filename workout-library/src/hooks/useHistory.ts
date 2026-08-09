"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "@/lib/storage";
import { uid } from "@/lib/utils";
import type { WorkoutHistoryEntry } from "@/types";

export function useHistory() {
  const [history, setHistory, hydrated] = useLocalStorage<WorkoutHistoryEntry[]>(STORAGE_KEYS.history, []);

  const addEntry = useCallback(
    (entry: Omit<WorkoutHistoryEntry, "id">) => {
      const withId: WorkoutHistoryEntry = { ...entry, id: uid("hist") };
      setHistory((prev) => [withId, ...prev]);
      return withId;
    },
    [setHistory],
  );

  const deleteEntry = useCallback(
    (id: string) => {
      setHistory((prev) => prev.filter((h) => h.id !== id));
    },
    [setHistory],
  );

  const getLastSessionFor = useCallback(
    (exerciseSlug: string) => {
      for (const entry of history) {
        const match = entry.exercises.find((e) => e.exerciseSlug === exerciseSlug);
        if (match) return { entry, exercise: match };
      }
      return undefined;
    },
    [history],
  );

  return { history, addEntry, deleteEntry, getLastSessionFor, hydrated };
}
