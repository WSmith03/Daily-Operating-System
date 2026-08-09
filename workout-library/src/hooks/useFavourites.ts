"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "@/lib/storage";
import type { FavouritesState } from "@/types";

const EMPTY: FavouritesState = { exercises: [], workouts: [], stretches: [], mobility: [], routines: [] };

type FavKind = keyof FavouritesState;

export function useFavourites() {
  const [favourites, setFavourites, hydrated] = useLocalStorage<FavouritesState>(STORAGE_KEYS.favourites, EMPTY);

  const isFavourite = useCallback(
    (kind: FavKind, slug: string) => favourites[kind]?.includes(slug) ?? false,
    [favourites],
  );

  const toggleFavourite = useCallback(
    (kind: FavKind, slug: string) => {
      setFavourites((prev) => {
        const list = prev[kind] ?? [];
        const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug];
        return { ...prev, [kind]: next };
      });
    },
    [setFavourites],
  );

  return { favourites, isFavourite, toggleFavourite, hydrated };
}
