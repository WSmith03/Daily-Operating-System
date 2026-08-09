import { search } from "@/lib/search";
import { SearchBar } from "@/components/shared/SearchBar";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { WorkoutCard } from "@/components/workout/WorkoutCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const results = q ? search(q, 20) : null;

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 px-4 pt-4">
      <h1 className="text-[22px] font-extrabold tracking-tight">Search</h1>
      <SearchBar initialQuery={q} />

      {!results && <p className="text-sm text-muted-foreground">Try “upper chest”, “hip”, or “kettlebell swing”.</p>}

      {results && (
        <>
          {results.muscles.length > 0 && (
            <section>
              <SectionHeader title="Muscle Groups" />
              <div className="flex flex-wrap gap-2">
                {results.muscles.map((m) => (
                  <Link
                    key={m.id}
                    href={`/muscles/${m.id}`}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium"
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.workouts.length > 0 && (
            <section>
              <SectionHeader title="Workouts" />
              <div className="flex flex-col gap-3">
                {results.workouts.map((w) => (
                  <WorkoutCard key={w.slug} workout={w} />
                ))}
              </div>
            </section>
          )}

          {results.exercises.length > 0 && (
            <section>
              <SectionHeader title="Exercises" />
              <div className="flex flex-col gap-2.5">
                {results.exercises.map((e) => (
                  <ExerciseCard key={e.slug} exercise={e} />
                ))}
              </div>
            </section>
          )}

          {results.mobility.length > 0 && (
            <section>
              <SectionHeader title="Mobility" />
              <div className="flex flex-col gap-2">
                {results.mobility.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/recovery/mobility/${m.slug}`}
                    className="rounded-lg border border-border bg-surface p-3.5"
                  >
                    <p className="text-[14px] font-semibold">{m.name}</p>
                    <p className="text-[12px] text-muted-foreground">{m.bodyArea}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.stretches.length > 0 && (
            <section>
              <SectionHeader title="Stretches" />
              <div className="flex flex-col gap-2">
                {results.stretches.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/recovery/stretching/${s.slug}`}
                    className="rounded-lg border border-border bg-surface p-3.5"
                  >
                    <p className="text-[14px] font-semibold">{s.name}</p>
                    <p className="text-[12px] text-muted-foreground">{s.bodyArea} · {s.type}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {q &&
            results.exercises.length === 0 &&
            results.workouts.length === 0 &&
            results.mobility.length === 0 &&
            results.stretches.length === 0 &&
            results.muscles.length === 0 && (
              <p className="text-sm text-muted-foreground">No results for “{q}”. Try a different term.</p>
            )}
        </>
      )}
    </main>
  );
}
