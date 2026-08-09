# Seed data contract (read this fully before writing any data file)

You are contributing seed data to a Next.js + TypeScript workout library app. Multiple agents are
writing different data files in parallel, so **strict adherence to the shared contract below is
required** — the app will fail to build otherwise.

## 1. Type contract

Read `src/types/index.ts` in full before writing anything — it defines every interface
(`Exercise`, `Workout`, `WorkoutExercise`, `MobilityExercise`, `Stretch`, `MobilityRoutine`, etc.)
and every string-literal union (`Equipment`, `TrainingGoal`, `MovementPattern`, `Difficulty`,
`MuscleGroupId`, `ExerciseType`, `Laterality`, `StretchType`, `MobilityBodyArea`). You may ONLY use
values from those unions — inventing a new equipment name, goal, or pattern will break the type
check.

Also read `src/data/muscles.ts` for the muscle-group taxonomy (`MuscleGroupId` values, their
`focusAreas` ids/names, and the anatomical `muscles` list) and `src/data/constants.ts` for the
canonical equipment/goal/pattern/difficulty lists.

## 2. File format

Every data file:
- Starts with `import type { Exercise } from "@/types";` (or the relevant type).
- Exports ONE named `const` array, fully typed, e.g. `export const chestExercises: Exercise[] = [...]`.
- No default export. No side effects. No dependencies on other data files.
- Valid, buildable TypeScript — every object must satisfy the interface exactly (all required
  fields present, no extra fields, no typos in union values).

## 3. Slugs & IDs

- `slug` is kebab-case, globally unique across the ENTIRE app (e.g. `dumbbell-bench-press`,
  `kettlebell-goblet-squat`, `couch-stretch`). Prefix ambiguous names with context if needed
  (e.g. `kettlebell-clean` vs `barbell-power-clean`).
- `id` should equal `slug` (keeps things simple and guarantees uniqueness).
- When referencing another exercise (e.g. `alternatives`, or a workout's `exerciseSlug`), the
  slug MUST exactly match a slug defined in the corresponding exercise file. If you're not 100%
  sure a slug exists, don't reference it — omit the field instead of guessing.

## 4. Content quality bar (this is the most important rule)

No filler. Every exercise needs REAL, specific, technically useful coaching content — as if
written by a strength coach, not a placeholder generator. Never write generic lines like "Perform
the movement with good form."

Good coaching cue examples (match this specificity and tone):
- "Drive your elbows toward your hips as the bar passes your ribcage."
- "Keep ribs stacked over your pelvis — don't let your lower back arch."
- "Screw your feet into the floor to create tension through both hips."
- "Keep the kettlebell close to your body during the clean to avoid banging your wrist."
- "Exhale sharply at the top of the rep to reinforce bracing."

`instructions` should be a clear numbered-feeling sequence (3-6 short strings) covering setup
through the full rep. `commonMistakes` should name a specific error and its consequence (e.g.
"Flaring elbows to 90° — increases shoulder strain and reduces chest tension"), not just "bad
form". `coachingCues` should be short, imperative, sayable-out-loud during a set (this app shows
them live during workouts).

## 5. Safety language

Never make medical claims or guarantee injury prevention. Use phrasing like "may help improve",
"commonly used to strengthen", "can support", never "will fix", "cures", "guarantees".

## 6. Equipment & goals must be realistic per exercise

- `equipment`: the actual gear required (can be multiple, e.g. `["Dumbbells", "Bench"]`).
- `trainingGoals`: 2-4 realistic goals this exercise actually serves (a heavy barbell squat should
  NOT list "Mobility" as a primary goal; a couch stretch should not list "Power").
- `movementPattern`: 1-3 accurate patterns from the union.
- `difficulty`: be honest — most exercises are Beginner or Intermediate; reserve Advanced for
  genuinely technical or high-skill lifts (Olympic lift variations, pistol squats, one-arm work).
- `muscleSubdivision`: use the `focusAreas` names from `src/data/muscles.ts` for the relevant
  muscle group (e.g. for chest: "Upper Chest", "Mid Chest", "Lower Chest"; for back: "Lats",
  "Back Width", "Back Thickness", "Traps"; for legs: "Quads", "Hamstrings", "Adductors", etc.)
  so the app's focus-area filtering actually works.
- `tags`: generous, lowercase-friendly free text tags that aid search — include the muscle name,
  equipment, goal synonyms, and any relevant colloquial terms (e.g. a hip flexor exercise should
  be tagged so a search for "hip" surfaces it).

## 7. Do not run build/lint yourself

Just write the file(s) you're assigned and stop. The orchestrating session will assemble
aggregator files and run the build afterward.

## 8. When done

Reply with: the file path(s) you wrote, the exported const name(s), the exact count of entries in
each array, and the full list of slugs you used (so the orchestrator can cross-reference them from
other data files).
