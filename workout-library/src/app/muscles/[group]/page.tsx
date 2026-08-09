import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { muscleGroups } from "@/data/muscles";
import { getExercisesByCategory } from "@/lib/generator";
import { allWorkouts } from "@/data/workouts";
import { MuscleGroupExplorer } from "@/components/exercises/MuscleGroupExplorer";

export function generateStaticParams() {
  return muscleGroups
    .filter((g) => !["mobility", "stretching", "recovery"].includes(g.id))
    .map((g) => ({ group: g.id }));
}

export default async function MuscleGroupPage({ params }: PageProps<"/muscles/[group]">) {
  const { group: groupId } = await params;
  const group = muscleGroups.find((g) => g.id === groupId);
  if (!group) notFound();

  const exercises = getExercisesByCategory(group.id);
  const workouts = allWorkouts.filter((w) => w.category === group.id || w.secondaryCategories?.includes(group.id));

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4">
      <Link href="/" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Home
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">{group.name}</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{group.blurb}</p>
      </header>

      {group.muscles.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {group.muscles.map((m) => (
            <span key={m} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
              {m}
            </span>
          ))}
        </div>
      )}

      <MuscleGroupExplorer group={group} exercises={exercises} workouts={workouts} />
    </main>
  );
}
