import { Suspense } from "react";
import { FavouritesTabs } from "@/components/favourites/FavouritesTabs";

export const metadata = { title: "Favourites" };

export default function FavouritesPage() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-5 px-4 pt-4">
      <header>
        <h1 className="text-[26px] font-extrabold tracking-tight">Favourites</h1>
        <p className="mt-1 text-[13.5px] text-muted-foreground">Saved items, custom workouts & training history</p>
      </header>
      <Suspense fallback={null}>
        <FavouritesTabs />
      </Suspense>
    </main>
  );
}
