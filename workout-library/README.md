# Workout Library

A mobile-first, premium-feeling Progressive Web App for training decisions: pick a muscle (or a
focus area within it), get matched exercises and preset workouts, generate a custom session on the
fly, and train with a built-in workout player — rest timers, exercise swaps, and progress tracking
included. Everything works offline, with no account required; your data lives in your phone's
local storage.

Built as a genuinely comprehensive personal fitness database, not a basic tracker: hundreds of
exercises broken down by real muscle subdivisions (upper/mid/lower chest, lat width vs. back
thickness, long vs. short head biceps, etc.), a full kettlebell library, an active-mobility
library, a stretching library, and a dedicated BJJ/grappling section.

## Features

- **Fast muscle-first navigation** — home screen drill-down from muscle group → focus area →
  matched exercises/workouts, in two taps.
- **Quick Workout Generator** — choose muscle, focus area, equipment, duration, difficulty and
  training goal; the app assembles a session with sensible movement-pattern variety (it won't
  stack five near-identical rows).
- **Workout Player** — one exercise at a time, set-by-set, with a built-in rest timer (auto-added
  time, skip), live coaching cues, "last session" recall, a conservative progressive-overload
  hint, and one-tap exercise swapping to a similar alternative.
- **Exercise library** — searchable/filterable by body part, muscle subdivision, equipment,
  training goal, movement pattern, difficulty, compound/isolation and unilateral/bilateral. Every
  exercise page includes setup, execution, breathing, coaching cues, common mistakes,
  regressions/progressions and alternatives.
- **Preset workout library** — organised by muscle group, goal, duration and training template
  (Push/Pull/Legs, Upper/Lower, Full Body, home/dumbbell/kettlebell-only splits, and more).
- **Kettlebell section** — ballistics, grinds, carries, complexes and dedicated preset workouts.
- **Mobility & Stretching libraries** — active mobility drills and a dynamic/static/active/
  passive/PNF stretching library, plus curated routines (morning mobility, pre-gym warm-ups,
  post-workout stretches, desk-worker mobility, etc.).
- **BJJ / grappling section** — strength, core, grip, conditioning, lower body, injury prevention,
  mobility and recovery presets built for grapplers.
- **Custom workouts** — build your own from any exercise, reorder with drag-and-drop, edit
  sets/reps/rest, and start it in the same player used for presets.
- **Favourites** — save exercises, workouts, mobility drills, stretches and routines in one place.
- **History** — every completed session is logged locally (date, duration, sets/reps/weight) and
  feeds the progressive-overload hints on your next visit to that exercise.
- **Smart search** — one search box across exercises, workouts, muscles, mobility and stretches
  (e.g. searching "hip" surfaces hip flexor exercises, hip mobility drills, glute medius work,
  hip stretches and BJJ hip mobility together).
- **Installable PWA** — add it to your iPhone home screen and use it like a native app, offline.

## Content library (v1 seed data)

| Content | Count |
|---|---|
| Exercises | 418 |
| Preset workouts | 141 |
| Mobility drills | 59 |
| Stretches | 82 |
| Kettlebell exercises | 58 (included in the 418 exercises above) |
| Kettlebell preset workouts | 20 |
| Mobility/stretch/recovery routines | 32 |
| BJJ-specific workouts & routines | 10 |

## Technology stack

- [Next.js](https://nextjs.org/) 16 (App Router, TypeScript, React 19)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Radix UI](https://www.radix-ui.com/) primitives (dialog/sheet) + a small hand-rolled,
  shadcn-style component kit (`class-variance-authority`, `tailwind-merge`)
- [Lucide](https://lucide.dev/) icons
- `localStorage` for favourites, custom workouts and history — no backend, no account
- A typed data layer (`src/types`, `src/data`) designed so a future Supabase-backed sync layer can
  slot in behind the same interfaces without changing UI code
- Hand-written PWA manifest + service worker (offline caching, installable on iOS/Android)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & lint

```bash
npm run lint
npm run build
npm run start   # serve the production build locally
```

## Deploying to Vercel

1. Push this repository to GitHub (see below).
2. In [Vercel](https://vercel.com/new), import the repo. The app lives at the repo root, so no
   Root Directory override is needed.
3. Framework preset: Next.js (auto-detected). No environment variables are required for v1.
4. Deploy. Every push to your default branch redeploys automatically.

## Installing on iPhone (PWA)

1. Open the deployed URL in **Safari** on your iPhone (must be Safari, not Chrome, for the
   install prompt to work on iOS).
2. Tap the **Share** icon (square with an arrow) in the toolbar.
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add**. The app icon now appears on your home screen and launches full-screen, with no
   Safari chrome, and works offline after the first load.

## Folder structure

```
workout-library/
├── src/
│   ├── app/                     # Next.js App Router routes
│   │   ├── page.tsx             # Home
│   │   ├── muscles/[group]/     # Muscle drill-down (focus areas, exercises, workouts)
│   │   ├── exercises/           # Exercise library + [slug] detail
│   │   ├── workouts/            # Workout library + [slug] detail + [slug]/play (player)
│   │   ├── generator/           # Quick Workout Generator
│   │   ├── custom/[id]/         # Custom workout editor + play
│   │   ├── favourites/          # Favourites / My Workouts / History tabs
│   │   ├── recovery/            # Kettlebell, Mobility, Stretching, BJJ, Routines
│   │   ├── search/              # Cross-entity search
│   │   └── manifest.ts          # PWA manifest (generated route)
│   ├── components/
│   │   ├── ui/                  # Small shadcn-style primitives (Button, Card, Sheet, Chip…)
│   │   ├── navigation/          # Bottom nav
│   │   ├── home/                # Home screen sections
│   │   ├── exercises/           # Exercise cards, filters, muscle explorer
│   │   ├── workout/             # Workout cards, player, rest timer, swap sheet
│   │   ├── custom/               # Custom workout builder pieces
│   │   ├── recovery/             # Mobility/stretch library browsers
│   │   └── shared/               # Cross-cutting UI (search bar, favourite button, sections)
│   ├── data/                    # Seed data — see "Adding content" below
│   ├── hooks/                   # useLocalStorage, useFavourites, useCustomWorkouts, useHistory
│   ├── lib/                     # Generator algorithm, search, training guidance, utils
│   └── types/                   # Shared TypeScript interfaces (the data contract)
└── public/
    ├── icons/                   # PWA icons
    └── sw.js                    # Service worker
```

## Adding content

All content is plain typed data — no CMS, no build step required beyond TypeScript.

### Adding an exercise

Add an object to the relevant array in `src/data/exercises/<category>.ts` (e.g. `chest.ts`,
`kettlebell.ts`) matching the `Exercise` interface in `src/types/index.ts`. Give it a unique
kebab-case `slug`/`id`, real coaching content (no filler), and make sure any `equipment`,
`trainingGoals`, `movementPattern`, `difficulty` values come from the unions defined in
`src/types/index.ts`. It will automatically appear in the library, search, the generator, and any
matching muscle-group page — `src/data/exercises/index.ts` aggregates every category file into
`allExercises`.

### Adding a workout

Add an object to `src/data/workouts/<file>.ts` matching the `Workout` interface. Each
`WorkoutExercise` references an exercise by `exerciseSlug` — make sure that slug exists in
`allExercises`. Aggregated in `src/data/workouts/index.ts` as `allWorkouts`.

### Adding a stretch or mobility drill

Add to `src/data/stretches.ts` (`Stretch`) or `src/data/mobility.ts` (`MobilityExercise`). To
bundle several into a routine (e.g. "10-Minute Morning Mobility"), add a `MobilityRoutine` entry
in `src/data/routines/<file>.ts`, referencing stretch/mobility slugs in its `items` array.

### Extending the muscle taxonomy

`src/data/muscles.ts` defines the home-screen categories, their focus areas (e.g. Back → Lats,
Upper Back, Traps…) and the anatomical muscles under each. Add a focus area there first if you
want new exercises to filter under it via `muscleSubdivision`.

## Architecture notes

- **No backend required for v1.** All user data (favourites, custom workouts, history) lives in
  `localStorage` behind small hooks (`useFavourites`, `useCustomWorkouts`, `useHistory`) and a thin
  `src/lib/storage.ts` wrapper. Swapping this for Supabase later means replacing the inside of
  those hooks — the rest of the app calls them the same way.
- **The workout generator** (`src/lib/generator.ts`) filters the exercise pool by muscle/focus
  area/equipment/difficulty/goal, then selects a movement-pattern-diverse set (compounds first,
  then isolations, avoiding repeated primary movement patterns where alternatives exist).
- **Rest and set/rep guidance** (`src/lib/trainingGuidance.ts`) is intentionally conservative and
  goal-based (e.g. Hypertrophy 60-120s, Strength 2-5min) — not a substitute for coaching.

## Safety

This app provides general fitness information and is not medical advice. It does not diagnose
injuries or guarantee outcomes. Exercise and mobility descriptions use language like "may help
improve" or "can support" rather than promising results — consult a qualified professional before
starting a new training program, especially if you have an existing injury or medical condition.

## Roadmap

Already structured for, not yet built:

- **Supabase accounts + cloud sync** (so history/favourites/custom workouts follow you across
  devices) — the hook layer is designed to make this a swap-in.
- **Apple Health integration** for workout logging.
- **Volume tracking, 1RM estimates and progress charts** on top of the existing history data.
- **Exercise demonstration videos/animations.**
- **AI-assisted workout generation and coaching** on top of the existing rule-based generator.
- **Barcode/equipment scanning** to auto-detect available gym equipment.
- **Social workout sharing.**

## Disclaimer

Not a medical device or medical advice. Use your judgment and consult a professional as needed.
