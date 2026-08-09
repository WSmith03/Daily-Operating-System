"use client";

import { useFavourites } from "@/hooks/useFavourites";
import { allWorkouts } from "@/data/workouts";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WorkoutCard } from "@/components/workout/WorkoutCard";

export function FavouriteWorkoutsRow() {
  const { favourites, hydrated } = useFavourites();
  if (!hydrated || favourites.workouts.length === 0) return null;

  const workouts = favourites.workouts
    .map((slug) => allWorkouts.find((w) => w.slug === slug))
    .filter((w): w is (typeof allWorkouts)[number] => Boolean(w))
    .slice(0, 4);

  if (workouts.length === 0) return null;

  return (
    <section>
      <SectionHeader title="Favourite Workouts" href="/favourites" />
      <div className="flex flex-col gap-3">
        {workouts.map((w) => (
          <WorkoutCard key={w.slug} workout={w} />
        ))}
      </div>
    </section>
  );
}
