import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { muscleGroups } from "@/data/muscles";
import { getExercisesByCategory } from "@/lib/generator";
import { allWorkouts } from "@/data/workouts";
import { MuscleGroupExplorer } from "@/components/exercises/MuscleGroupExplorer";

export const metadata = { title: "Kettlebell" };

export default function KettlebellPage() {
  const group = muscleGroups.find((g) => g.id === "kettlebell")!;
  const exercises = getExercisesByCategory("kettlebell");
  const workouts = allWorkouts.filter((w) => w.category === "kettlebell");

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4">
      <Link href="/recovery" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Recovery
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Kettlebell</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{group.blurb}</p>
      </header>
      <MuscleGroupExplorer group={group} exercises={exercises} workouts={workouts} />
    </main>
  );
}
