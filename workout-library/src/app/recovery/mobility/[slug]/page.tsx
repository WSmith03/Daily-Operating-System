import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allMobilityExercises } from "@/data/mobility";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import { AccentBadge, Badge } from "@/components/ui/badge";
import { DetailSection, InstructionList } from "@/components/shared/DetailSection";

export function generateStaticParams() {
  return allMobilityExercises.map((m) => ({ slug: m.slug }));
}

export default async function MobilityDetailPage({ params }: PageProps<"/recovery/mobility/[slug]">) {
  const { slug } = await params;
  const item = allMobilityExercises.find((m) => m.slug === slug);
  if (!item) notFound();

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4 pb-10">
      <div className="flex items-center justify-between">
        <Link href="/recovery/mobility" className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <ArrowLeft size={16} /> Mobility
        </Link>
        <FavouriteButton kind="mobility" slug={item.slug} />
      </div>

      <header>
        <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">{item.bodyArea}</p>
        <h1 className="mt-1 text-[24px] font-extrabold leading-tight tracking-tight">{item.name}</h1>
        <p className="mt-2 text-[14px] text-muted-foreground">{item.purpose}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.duration && <AccentBadge>{item.duration}</AccentBadge>}
          {item.reps && <AccentBadge>{item.reps}</AccentBadge>}
          {item.whenToUse.map((w) => (
            <Badge key={w}>{w}</Badge>
          ))}
        </div>
      </header>

      <DetailSection title="How to Perform">
        <InstructionList items={item.instructions} />
      </DetailSection>

      <DetailSection title="Tags">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </DetailSection>
    </main>
  );
}
