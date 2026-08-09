import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allRoutines } from "@/data/routines";
import { allMobilityExercises } from "@/data/mobility";
import { allStretches } from "@/data/stretches";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import { AccentBadge } from "@/components/ui/badge";

export function generateStaticParams() {
  return allRoutines.map((r) => ({ slug: r.slug }));
}

export default async function RoutineDetailPage({ params }: PageProps<"/recovery/routines/[slug]">) {
  const { slug } = await params;
  const routine = allRoutines.find((r) => r.slug === slug);
  if (!routine) notFound();

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4 pb-10">
      <div className="flex items-center justify-between">
        <Link href="/recovery" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <ArrowLeft size={16} /> Recovery
        </Link>
        <FavouriteButton kind="routines" slug={routine.slug} />
      </div>

      <header>
        <h1 className="text-[24px] font-extrabold leading-tight tracking-tight">{routine.name}</h1>
        <p className="mt-2 text-[13.5px] text-muted-foreground">{routine.description}</p>
        <div className="mt-3 flex gap-1.5">
          <AccentBadge>{routine.durationMinutes} min</AccentBadge>
          <AccentBadge>{routine.items.length} items</AccentBadge>
        </div>
      </header>

      <div className="flex flex-col gap-2.5">
        {routine.items.map((item, i) => {
          const detail =
            item.type === "mobility"
              ? allMobilityExercises.find((m) => m.slug === item.slug)
              : allStretches.find((s) => s.slug === item.slug);
          const href = item.type === "mobility" ? `/recovery/mobility/${item.slug}` : `/recovery/stretching/${item.slug}`;
          return (
            <Link key={i} href={href} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-[13px] font-bold text-accent">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-bold">{detail?.name ?? item.slug}</p>
                <p className="text-[12px] text-muted-foreground">{item.duration ?? item.reps ?? ""}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
