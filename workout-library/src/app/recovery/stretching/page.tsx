import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allStretches } from "@/data/stretches";
import { StretchLibrary } from "@/components/recovery/StretchLibrary";

export const metadata = { title: "Stretching" };

export default function StretchingPage() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 px-4 pt-4">
      <Link href="/recovery" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <ArrowLeft size={16} /> Recovery
      </Link>
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Stretching</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">{allStretches.length} stretches across every body area</p>
      </header>
      <StretchLibrary items={allStretches} />
    </main>
  );
}
