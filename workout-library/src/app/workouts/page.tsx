import { allWorkouts } from "@/data/workouts";
import { WorkoutLibrary } from "@/components/workout/WorkoutLibrary";
import type { MuscleGroupId } from "@/types";

export const metadata = { title: "Workouts" };

export default async function WorkoutsPage({ searchParams }: PageProps<"/workouts">) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? (params.category as MuscleGroupId) : undefined;

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 px-4 pt-4">
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Workouts</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{allWorkouts.length} preset workouts</p>
      </header>
      <WorkoutLibrary workouts={allWorkouts} initialCategory={category} />
    </main>
  );
}
