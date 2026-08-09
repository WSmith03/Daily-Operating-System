import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GeneratorFlow } from "@/components/generator/GeneratorFlow";
import type { MuscleGroupId } from "@/types";

export const metadata = { title: "Quick Workout Generator" };

export default async function GeneratorPage({ searchParams }: PageProps<"/generator">) {
  const params = await searchParams;
  const muscle = typeof params.muscle === "string" ? (params.muscle as MuscleGroupId) : undefined;
  const focus = typeof params.focus === "string" ? params.focus : undefined;

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4">
      <Link href="/" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Home
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Quick Workout</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">
          Pick your parameters — we&apos;ll build a session with sensible movement variety.
        </p>
      </header>
      <GeneratorFlow initialMuscle={muscle} initialFocus={focus} />
    </main>
  );
}
