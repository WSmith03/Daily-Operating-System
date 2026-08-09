import { allExercises } from "@/data/exercises";
import { ExerciseLibrary } from "@/components/exercises/ExerciseLibrary";
import type { MuscleGroupId } from "@/types";

export const metadata = { title: "Exercise Library" };

export default async function ExercisesPage({ searchParams }: PageProps<"/exercises">) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? (params.category as MuscleGroupId) : undefined;

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 px-4 pt-4">
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Exercises</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{allExercises.length} exercises in the library</p>
      </header>
      <ExerciseLibrary exercises={allExercises} initialCategory={category} />
    </main>
  );
}
