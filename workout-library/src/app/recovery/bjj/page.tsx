import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { allWorkouts } from "@/data/workouts";
import { allRoutines } from "@/data/routines";
import { WorkoutCard } from "@/components/workout/WorkoutCard";

export const metadata = { title: "BJJ Training" };

export default function BjjPage() {
  const workouts = allWorkouts.filter((w) => w.tags.some((t) => t.toLowerCase() === "bjj"));
  const routines = allRoutines.filter((r) => r.category === "bjj");

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 px-4 pt-4">
      <Link href="/recovery" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Recovery
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">BJJ Training</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">
          Strength, mobility, grip & conditioning built for grappling
        </p>
      </header>

      {workouts.length > 0 && (
        <section>
          <h2 className="mb-2 text-[15px] font-bold">Strength & Conditioning</h2>
          <div className="flex flex-col gap-2.5">
            {workouts.map((w) => (
              <WorkoutCard key={w.slug} workout={w} />
            ))}
          </div>
        </section>
      )}

      {routines.length > 0 && (
        <section>
          <h2 className="mb-2 text-[15px] font-bold">Mobility & Recovery</h2>
          <div className="flex flex-col gap-2.5">
            {routines.map((r) => (
              <Link key={r.slug} href={`/recovery/routines/${r.slug}`} className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5">
                <div className="min-w-0">
                  <p className="truncate text-[14.5px] font-bold">{r.name}</p>
                  <p className="text-[12px] text-muted-foreground">{r.durationMinutes} min · {r.items.length} items</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {workouts.length === 0 && routines.length === 0 && (
        <p className="text-sm text-muted-foreground">BJJ content is loading — check back shortly.</p>
      )}
    </main>
  );
}
