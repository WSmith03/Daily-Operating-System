"use client";

import { Heart } from "lucide-react";
import { useFavourites } from "@/hooks/useFavourites";
import { cn } from "@/lib/utils";

type FavKind = "exercises" | "workouts" | "stretches" | "mobility" | "routines";

export function FavouriteButton({
  kind,
  slug,
  size = 18,
  className,
}: {
  kind: FavKind;
  slug: string;
  size?: number;
  className?: string;
}) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const active = isFavourite(kind, slug);

  return (
    <button
      type="button"
      aria-label={active ? "Remove from favourites" : "Add to favourites"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavourite(kind, slug);
      }}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated tap-highlight-none active:scale-90 transition-transform",
        className,
      )}
    >
      <Heart size={size} className={active ? "fill-accent text-accent" : "text-muted-foreground"} />
    </button>
  );
}
