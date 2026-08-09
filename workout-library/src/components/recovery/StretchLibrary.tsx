"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import { FavouriteButton } from "@/components/shared/FavouriteButton";
import type { Stretch, StretchType } from "@/types";

const TYPES: StretchType[] = ["Dynamic", "Static", "Active", "Passive", "PNF"];

export function StretchLibrary({ items }: { items: Stretch[] }) {
  const bodyAreas = useMemo(() => Array.from(new Set(items.map((i) => i.bodyArea))), [items]);
  const [area, setArea] = useState<string | null>(null);
  const [type, setType] = useState<StretchType | null>(null);

  const filtered = items.filter((i) => (!area || i.bodyArea === area) && (!type || i.type === type));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {TYPES.map((t) => (
          <Chip key={t} active={type === t} onClick={() => setType((cur) => (cur === t ? null : t))}>
            {t}
          </Chip>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <Chip active={area === null} onClick={() => setArea(null)}>
          All Areas
        </Chip>
        {bodyAreas.map((a) => (
          <Chip key={a} active={area === a} onClick={() => setArea((cur) => (cur === a ? null : a))}>
            {a}
          </Chip>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {filtered.map((s) => (
          <Link key={s.slug} href={`/recovery/stretching/${s.slug}`} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14.5px] font-bold">{s.name}</p>
              <p className="truncate text-[12px] text-muted-foreground">{s.bodyArea} · {s.type} · {s.duration ?? s.reps}</p>
            </div>
            <FavouriteButton kind="stretches" slug={s.slug} size={16} className="h-8 w-8 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
