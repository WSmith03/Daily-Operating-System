import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allMobilityExercises } from "@/data/mobility";
import { MobilityLibrary } from "@/components/recovery/MobilityLibrary";

export const metadata = { title: "Mobility" };

export default function MobilityPage() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 px-4 pt-4">
      <Link href="/recovery" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Recovery
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Mobility</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{allMobilityExercises.length} drills for joint prep & control</p>
      </header>
      <MobilityLibrary items={allMobilityExercises} />
    </main>
  );
}
