const isBrowser = typeof window !== "undefined";

export const STORAGE_KEYS = {
  favourites: "wl:favourites",
  customWorkouts: "wl:customWorkouts",
  history: "wl:history",
  lastWorkout: "wl:lastWorkout",
} as const;

export function readStorage<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T): void {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable (private browsing, quota). Fail silently.
  }
}
