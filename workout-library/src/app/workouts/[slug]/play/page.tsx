import { notFound } from "next/navigation";
import { allWorkouts } from "@/data/workouts";
import { WorkoutPlayer } from "@/components/workout/WorkoutPlayer";

export function generateStaticParams() {
  return allWorkouts.map((w) => ({ slug: w.slug }));
}

export default async function WorkoutPlayPage({ params }: PageProps<"/workouts/[slug]/play">) {
  const { slug } = await params;
  const workout = allWorkouts.find((w) => w.slug === slug);
  if (!workout) notFound();

  return (
    <WorkoutPlayer
      workoutName={workout.name}
      workoutSlug={workout.slug}
      workoutExercises={workout.exercises}
    />
  );
}
