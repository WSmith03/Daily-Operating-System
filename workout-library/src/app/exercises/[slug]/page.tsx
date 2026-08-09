import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Wind, Timer, Gauge } from "lucide-react";
import { allExercises } from "@/data/exercises";
import { getAlternatives } from "@/lib/generator";
import { Badge, AccentBadge } from "@/components/ui/badge";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import { DetailSection, InstructionList, BulletList } from "@/components/shared/DetailSection";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { AddToWorkoutSheet } from "@/components/exercises/AddToWorkoutSheet";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return allExercises.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/exercises/[slug]">) {
  const { slug } = await params;
  const exercise = allExercises.find((e) => e.slug === slug);
  return { title: exercise?.name ?? "Exercise" };
}

export default async function ExerciseDetailPage({ params }: PageProps<"/exercises/[slug]">) {
  const { slug } = await params;
  const exercise = allExercises.find((e) => e.slug === slug);
  if (!exercise) notFound();

  const alternatives = getAlternatives(exercise, 4);

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 px-4 pt-4 pb-6">
      <div className="flex items-center justify-between">
        <Link href={`/muscles/${exercise.category}`} className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <ArrowLeft size={16} /> Back
        </Link>
        <FavouriteButton kind="exercises" slug={exercise.slug} />
      </div>

      <header>
        <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">
          {exercise.primaryMuscles[0]}
        </p>
        <h1 className="mt-1 text-[26px] font-extrabold leading-tight tracking-tight">{exercise.name}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <AccentBadge>{exercise.difficulty}</AccentBadge>
          <Badge>{exercise.exerciseType}</Badge>
          <Badge>{exercise.laterality}</Badge>
          {exercise.equipment.map((eq) => (
            <Badge key={eq}>{eq}</Badge>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-surface p-3">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground">Primary</p>
          <p className="mt-0.5 text-[14px] font-semibold">{exercise.primaryMuscles.join(", ")}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground">Secondary</p>
          <p className="mt-0.5 text-[14px] font-semibold">{exercise.secondaryMuscles.join(", ") || "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground">Movement</p>
          <p className="mt-0.5 text-[14px] font-semibold">{exercise.movementPattern.join(", ")}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground">Goals</p>
          <p className="mt-0.5 text-[14px] font-semibold">{exercise.trainingGoals.slice(0, 2).join(", ")}</p>
        </div>
      </div>

      <div className="flex gap-3 rounded-lg border border-border bg-surface p-4">
        <div className="flex flex-1 flex-col items-center gap-1 border-r border-border">
          <Gauge size={16} className="text-accent" />
          <p className="text-[13px] font-bold">{exercise.recommendedSets ?? "3"} × {exercise.recommendedReps ?? "10"}</p>
          <p className="text-[10.5px] text-muted-foreground">Sets × Reps</p>
        </div>
        <div className="flex flex-1 flex-col items-center gap-1 border-r border-border">
          <Timer size={16} className="text-accent" />
          <p className="text-[13px] font-bold">{exercise.recommendedRest ?? "60-90 sec"}</p>
          <p className="text-[10.5px] text-muted-foreground">Rest</p>
        </div>
        <div className="flex flex-1 flex-col items-center gap-1">
          <Wind size={16} className="text-accent" />
          <p className="text-[13px] font-bold">{exercise.suggestedRPE ?? "7-8"}</p>
          <p className="text-[10.5px] text-muted-foreground">RPE</p>
        </div>
      </div>

      {exercise.setup && (
        <DetailSection title="Setup">
          <BulletList items={exercise.setup} />
        </DetailSection>
      )}

      <DetailSection title="How to Perform">
        <InstructionList items={exercise.execution ?? exercise.instructions} />
      </DetailSection>

      {exercise.breathing && (
        <DetailSection title="Breathing">
          <p className="text-[14px] text-foreground/90">{exercise.breathing}</p>
        </DetailSection>
      )}

      {exercise.coachingCues && exercise.coachingCues.length > 0 && (
        <DetailSection title="Coaching Cues">
          <div className="flex flex-wrap gap-2">
            {exercise.coachingCues.map((c, i) => (
              <span key={i} className="rounded-lg bg-accent-soft px-3 py-2 text-[13px] font-medium text-accent">
                “{c}”
              </span>
            ))}
          </div>
        </DetailSection>
      )}

      {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
        <DetailSection title="Common Mistakes">
          <BulletList items={exercise.commonMistakes} tone="warning" />
        </DetailSection>
      )}

      {(exercise.regressions?.length || exercise.progressions?.length) && (
        <div className="grid grid-cols-2 gap-3">
          {exercise.regressions && exercise.regressions.length > 0 && (
            <DetailSection title="Regression">
              <BulletList items={exercise.regressions} />
            </DetailSection>
          )}
          {exercise.progressions && exercise.progressions.length > 0 && (
            <DetailSection title="Progression">
              <BulletList items={exercise.progressions} />
            </DetailSection>
          )}
        </div>
      )}

      {alternatives.length > 0 && (
        <DetailSection title="Alternative Exercises">
          <div className="flex flex-col gap-2.5">
            {alternatives.map((alt) => (
              <ExerciseCard key={alt.slug} exercise={alt} />
            ))}
          </div>
        </DetailSection>
      )}

      <DetailSection title="Tags">
        <div className="flex flex-wrap gap-1.5">
          {exercise.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </DetailSection>

      <AddToWorkoutSheet
        exerciseSlug={exercise.slug}
        trigger={
          <Button className="w-full" size="lg">
            <Plus size={18} /> Add to Workout
          </Button>
        }
      />
    </main>
  );
}
