import Link from "next/link";
import { Weight, RefreshCw, Waves, Swords, ChevronRight } from "lucide-react";
import { allRoutines } from "@/data/routines";

const sections = [
  { href: "/recovery/kettlebell", label: "Kettlebell", blurb: "Swings, grinds, carries & conditioning", icon: Weight },
  { href: "/recovery/mobility", label: "Mobility", blurb: "Active joint prep & range of motion", icon: RefreshCw },
  { href: "/recovery/stretching", label: "Stretching", blurb: "Dynamic, static, PNF & more", icon: Waves },
  { href: "/recovery/bjj", label: "BJJ", blurb: "Grappling strength, mobility & recovery", icon: Swords },
];

export const metadata = { title: "Recovery" };

export default function RecoveryPage() {
  const featured = allRoutines.filter((r) => r.category === "mobility" || r.category === "stretching").slice(0, 4);

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 px-4 pt-4">
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Recovery</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">Mobility, stretching, kettlebell & BJJ training</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {sections.map(({ href, label, blurb, icon: Icon }) => (
          <Link key={href} href={href} className="rounded-lg border border-border bg-surface p-4">
            <Icon size={20} className="text-accent" />
            <p className="mt-3 text-[15px] font-bold">{label}</p>
            <p className="mt-0.5 text-[11.5px] text-muted-foreground line-clamp-2">{blurb}</p>
          </Link>
        ))}
      </div>

      {featured.length > 0 && (
        <section>
          <h2 className="mb-2 text-[17px] font-bold tracking-tight">Popular Routines</h2>
          <div className="flex flex-col gap-2.5">
            {featured.map((r) => (
              <Link
                key={r.slug}
                href={`/recovery/routines/${r.slug}`}
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5"
              >
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
    </main>
  );
}
