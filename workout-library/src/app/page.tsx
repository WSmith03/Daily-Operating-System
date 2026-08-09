import { SearchBar } from "@/components/shared/SearchBar";
import { MuscleGroupGrid } from "@/components/home/MuscleGroupGrid";
import { QuickWorkoutCallout } from "@/components/home/QuickWorkoutCallout";
import { RecoveryShortcuts } from "@/components/home/RecoveryShortcuts";
import { RecentWorkout } from "@/components/home/RecentWorkout";
import { FavouriteWorkoutsRow } from "@/components/home/FavouriteWorkoutsRow";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-7 px-4 pt-4">
      <header>
        <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">Workout Library</p>
        <h1 className="mt-1 text-[26px] font-extrabold tracking-tight">What are you training today?</h1>
      </header>

      <SearchBar />

      <QuickWorkoutCallout />

      <section>
        <MuscleGroupGrid />
      </section>

      <RecentWorkout />
      <FavouriteWorkoutsRow />

      <section>
        <SectionHeader title="Recovery & Skill Work" href="/recovery" />
        <RecoveryShortcuts />
      </section>

      <p className="pb-2 text-center text-[11px] leading-relaxed text-muted-foreground">
        This app provides general fitness information and is not medical advice. It does not diagnose
        injuries. Consult a qualified professional before starting a new training program.
      </p>
    </main>
  );
}
