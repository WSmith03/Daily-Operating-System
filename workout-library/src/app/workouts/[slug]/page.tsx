import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { allWorkouts } from "@/data/workouts";
import { allExercises } from "@/data/exercises";
import { AccentBadge, Badge } from "@/components/ui/badge";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import { DetailSection } from "@/components/shared/DetailSection";
import { WorkoutExerciseRow } from "@/components/workout/WorkoutExerciseRow";
import { Button } from "@/components/ui/button";
import { formatMinutes } from "@/lib/utils";

export function generateStaticParams() {
  return allWorkouts.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/workouts/[slug]">) {
  const { slug } = await params;
  return { title: allWorkouts.find((w) => w.slug === slug)?.name ?? "Workout" };
}

export default async function WorkoutDetailPage({ params }: PageProps<"/workouts/[slug]">) {
  const { slug } = await params;
  const workout = allWorkouts.find((w) => w.slug === slug);
  if (!workout) notFound();

  const findExercise = (s: string) => allExercises.find((e) => e.slug === s);

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 px-4 pt-4 pb-28">
      <div className="flex items-center justify-between">
        <Link href="/workouts" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <ArrowLeft size={16} /> Workouts
        </Link>
        <FavouriteButton kind="workouts" slug={workout.slug} />
      </div>

      <header>
        <h1 className="text-[26px] font-extrabold leading-tight tracking-tight">{workout.name}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <AccentBadge>{formatMinutes(workout.durationMinutes)}</AccentBadge>
          <Badge>{workout.difficulty}</Badge>
          {workout.trainingGoals.slice(0, 2).map((g) => (
            <Badge key={g}>{g}</Badge>
          ))}
          {workout.equipment.map((eq) => (
            <Badge key={eq}>{eq}</Badge>
          ))}
        </div>
        {workout.notes && <p className="mt-3 text-[13.5px] text-muted-foreground">{workout.notes}</p>}
      </header>

      {workout.warmup && workout.warmup.length > 0 && (
        <DetailSection title="Warm-Up">
          <div className="flex flex-col gap-2">
            {workout.warmup.map((item, i) => (
              <WorkoutExerciseRow key={i} item={item} exercise={findExercise(item.exerciseSlug)} index={i} />
            ))}
          </div>
        </DetailSection>
      )}

      <DetailSection title="Main Workout">
        <div className="flex flex-col gap-2">
          {workout.exercises.map((item, i) => (
            <WorkoutExerciseRow key={i} item={item} exercise={findExercise(item.exerciseSlug)} index={i} />
          ))}
        </div>
      </DetailSection>

      {workout.finisher && workout.finisher.length > 0 && (
        <DetailSection title="Optional Finisher">
          <div className="flex flex-col gap-2">
            {workout.finisher.map((item, i) => (
              <WorkoutExerciseRow key={i} item={item} exercise={findExercise(item.exerciseSlug)} index={i} />
            ))}
          </div>
        </DetailSection>
      )}

      {workout.cooldown && workout.cooldown.length > 0 && (
        <DetailSection title="Cooldown">
          <div className="flex flex-col gap-2">
            {workout.cooldown.map((item, i) => (
              <WorkoutExerciseRow key={i} item={item} exercise={findExercise(item.exerciseSlug)} index={i} />
            ))}
          </div>
        </DetailSection>
      )}

      <div className="fixed inset-x-0 bottom-20 z-40 mx-auto max-w-lg px-4">
        <Link href={`/workouts/${workout.slug}/play`}>
          <Button size="lg" className="w-full shadow-lg">
            <Play size={18} /> Start Workout
          </Button>
        </Link>
      </div>
    </main>
  );
}
