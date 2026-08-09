"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import type { MobilityExercise } from "@/types";

export function MobilityLibrary({ items }: { items: MobilityExercise[] }) {
  const bodyAreas = useMemo(() => Array.from(new Set(items.map((i) => i.bodyArea))), [items]);
  const [area, setArea] = useState<string | null>(null);

  const filtered = area ? items.filter((i) => i.bodyArea === area) : items;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip active={area === null} onClick={() => setArea(null)}>
          All
        </Chip>
        {bodyAreas.map((a) => (
          <Chip key={a} active={area === a} onClick={() => setArea((cur) => (cur === a ? null : a))}>
            {a}
          </Chip>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {filtered.map((m) => (
          <Link key={m.slug} href={`/recovery/mobility/${m.slug}`} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14.5px] font-bold">{m.name}</p>
              <p className="truncate text-[12px] text-muted-foreground">{m.bodyArea} · {m.duration ?? m.reps}</p>
            </div>
            <FavouriteButton kind="mobility" slug={m.slug} size={16} className="h-8 w-8 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
