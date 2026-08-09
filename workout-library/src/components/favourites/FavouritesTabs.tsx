"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Plus, Play, Pencil, Clock, Trash2 } from "lucide-react";
import { useFavourites } from "@/hooks/useFavourites";
import { useCustomWorkouts } from "@/hooks/useCustomWorkouts";
import { useHistory } from "@/hooks/useHistory";
import { allExercises } from "@/data/exercises";
import { allWorkouts } from "@/data/workouts";
import { allStretches } from "@/data/stretches";
import { allMobilityExercises } from "@/data/mobility";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { WorkoutCard } from "@/components/workout/WorkoutCard";
import { Button } from "@/components/ui/button";

type Tab = "favourites" | "custom" | "history";

export function FavouritesTabs() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as Tab) ?? "favourites";
  const [tab, setTab] = useState<Tab>(initialTab);

  const { favourites, hydrated: favHydrated } = useFavourites();
  const { workouts, createWorkout, deleteWorkout, hydrated: customHydrated } = useCustomWorkouts();
  const { history, deleteEntry, hydrated: historyHydrated } = useHistory();

  const favExercises = allExercises.filter((e) => favourites.exercises.includes(e.slug));
  const favWorkouts = allWorkouts.filter((w) => favourites.workouts.includes(w.slug));
  const favStretches = allStretches.filter((s) => favourites.stretches.includes(s.slug));
  const favMobility = allMobilityExercises.filter((m) => favourites.mobility.includes(m.slug));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-1.5 rounded-full bg-surface-elevated p-1">
        {(["favourites", "custom", "history"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-full py-2 text-[13.5px] font-semibold capitalize transition-colors ${
              tab === t ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            {t === "custom" ? "My Workouts" : t}
          </button>
        ))}
      </div>

      {tab === "favourites" && (
        <div className="flex flex-col gap-6">
          {!favHydrated ? null : (
            <>
              {favWorkouts.length > 0 && (
                <section>
                  <p className="mb-2 text-[13px] font-bold text-muted-foreground">Workouts</p>
                  <div className="flex flex-col gap-2.5">
                    {favWorkouts.map((w) => (
                      <WorkoutCard key={w.slug} workout={w} />
                    ))}
                  </div>
                </section>
              )}
              {favExercises.length > 0 && (
                <section>
                  <p className="mb-2 text-[13px] font-bold text-muted-foreground">Exercises</p>
                  <div className="flex flex-col gap-2.5">
                    {favExercises.map((e) => (
                      <ExerciseCard key={e.slug} exercise={e} />
                    ))}
                  </div>
                </section>
              )}
              {(favStretches.length > 0 || favMobility.length > 0) && (
                <section>
                  <p className="mb-2 text-[13px] font-bold text-muted-foreground">Mobility & Stretching</p>
                  <div className="flex flex-col gap-2">
                    {favMobility.map((m) => (
                      <Link key={m.slug} href={`/recovery/mobility/${m.slug}`} className="rounded-lg border border-border bg-surface p-3.5">
                        <p className="text-[14px] font-semibold">{m.name}</p>
                        <p className="text-[12px] text-muted-foreground">{m.bodyArea}</p>
                      </Link>
                    ))}
                    {favStretches.map((s) => (
                      <Link key={s.slug} href={`/recovery/stretching/${s.slug}`} className="rounded-lg border border-border bg-surface p-3.5">
                        <p className="text-[14px] font-semibold">{s.name}</p>
                        <p className="text-[12px] text-muted-foreground">{s.bodyArea} · {s.type}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              {favWorkouts.length === 0 && favExercises.length === 0 && favStretches.length === 0 && favMobility.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Nothing favourited yet. Tap the heart on any exercise or workout to save it here.
                </p>
              )}
            </>
          )}
        </div>
      )}

      {tab === "custom" && (
        <div className="flex flex-col gap-3">
          <Button variant="secondary" onClick={() => createWorkout("New Workout")}>
            <Plus size={16} /> Create Workout
          </Button>
          {customHydrated &&
            workouts.map((w) => (
              <div key={w.id} className="flex items-center gap-2 rounded-lg border border-border bg-surface p-3.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14.5px] font-bold">{w.name}</p>
                  <p className="text-[12px] text-muted-foreground">{w.exercises.length} exercises</p>
                </div>
                <Link href={`/custom/${w.id}/edit`} className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated">
                  <Pencil size={15} />
                </Link>
                <Link href={`/custom/${w.id}/play`} className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Play size={15} />
                </Link>
                <button onClick={() => deleteWorkout(w.id)} className="flex h-9 w-9 items-center justify-center rounded-full bg-danger/15 text-danger">
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          {customHydrated && workouts.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No custom workouts yet. Build one here, or save one from the Quick Workout generator.
            </p>
          )}
        </div>
      )}

      {tab === "history" && (
        <div className="flex flex-col gap-2.5">
          {historyHydrated && history.length === 0 && (
            <p className="text-sm text-muted-foreground">No workouts logged yet — finish a session to see it here.</p>
          )}
          {history.map((h) => (
            <div key={h.id} className="flex items-center gap-2 rounded-lg border border-border bg-surface p-3.5">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14.5px] font-bold">{h.workoutName}</p>
                <p className="flex items-center gap-1 text-[12px] text-muted-foreground">
                  <Clock size={11} />
                  {new Date(h.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })} ·{" "}
                  {h.durationMinutes} min · {h.exercises.length} exercises
                </p>
              </div>
              <button onClick={() => deleteEntry(h.id)} className="flex h-9 w-9 items-center justify-center rounded-full bg-danger/15 text-danger">
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
