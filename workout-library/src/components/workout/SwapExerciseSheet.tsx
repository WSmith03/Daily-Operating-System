"use client";

import { Sheet } from "@/components/ui/sheet";
import { getAlternatives } from "@/lib/generator";
import type { Exercise } from "@/types";
import { Badge } from "@/components/ui/badge";

export function SwapExerciseSheet({
  open,
  onOpenChange,
  current,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  current: Exercise;
  onSelect: (exercise: Exercise) => void;
}) {
  const alternatives = getAlternatives(current, 6);

  return (
    <Sheet open={open} onOpenChange={onOpenChange} title={`Swap "${current.name}"`}>
      <div className="flex flex-col gap-2.5 pb-2">
        {alternatives.length === 0 && (
          <p className="text-sm text-muted-foreground">No close alternatives found for this exercise.</p>
        )}
        {alternatives.map((alt) => (
          <button
            key={alt.slug}
            onClick={() => {
              onSelect(alt);
              onOpenChange(false);
            }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5 text-left"
          >
            <div className="min-w-0">
              <p className="truncate text-[14.5px] font-bold">{alt.name}</p>
              <p className="truncate text-[12px] text-muted-foreground">{alt.primaryMuscles.join(", ")}</p>
            </div>
            <Badge className="shrink-0">{alt.equipment[0]}</Badge>
          </button>
        ))}
      </div>
    </Sheet>
  );
}
