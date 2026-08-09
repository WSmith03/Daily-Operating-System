import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { muscleGroups } from "@/data/muscles";
import type { MuscleGroupId } from "@/types";

const PRIMARY_IDS: MuscleGroupId[] = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "forearms",
  "legs",
  "glutes",
  "core",
  "full-body",
];

export function MuscleGroupGrid() {
  const groups = muscleGroups.filter((g) => PRIMARY_IDS.includes(g.id));

  return (
    <div className="grid grid-cols-2 gap-3">
      {groups.map((group) => {
        const Icon = (Icons[group.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Dumbbell;
        return (
          <Link
            key={group.id}
            href={`/muscles/${group.id}`}
            className="group relative overflow-hidden rounded-lg border border-border bg-surface p-4 active:scale-[0.98] transition-transform"
          >
            <Icon size={22} className="text-accent" strokeWidth={2.2} />
            <p className="mt-3 text-[15px] font-bold leading-tight">{group.name}</p>
            <p className="mt-0.5 text-[11.5px] text-muted-foreground line-clamp-1">{group.blurb}</p>
          </Link>
        );
      })}
    </div>
  );
}
