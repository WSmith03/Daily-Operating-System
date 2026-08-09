"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { allExercises } from "@/data/exercises";

export function AddExerciseSheet({
  open,
  onOpenChange,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allExercises.slice(0, 30);
    return allExercises.filter((e) => e.name.toLowerCase().includes(q) || e.tags.some((t) => t.toLowerCase().includes(q))).slice(0, 40);
  }, [query]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange} title="Add Exercise" className="max-h-[90dvh]">
      <div className="flex flex-col gap-3 pb-2">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 h-11">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises…"
            className="w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
            autoFocus
          />
        </div>
        <div className="flex flex-col gap-2">
          {results.map((e) => (
            <button
              key={e.slug}
              onClick={() => {
                onSelect(e.slug);
                onOpenChange(false);
                setQuery("");
              }}
              className="flex items-center justify-between rounded-lg border border-border bg-surface p-3 text-left"
            >
              <div>
                <p className="text-[14px] font-semibold">{e.name}</p>
                <p className="text-[12px] text-muted-foreground">{e.primaryMuscles.join(", ")}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
