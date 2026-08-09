import type { MobilityRoutine } from "@/types";

export const generalRoutines: MobilityRoutine[] = [
  // ---------------------------------------------------------------------
  // MORNING / DAILY
  // ---------------------------------------------------------------------
  {
    id: "5-minute-morning-mobility",
    name: "5-Minute Morning Mobility",
    slug: "5-minute-morning-mobility",
    category: "mobility",
    durationMinutes: 5,
    description:
      "A quick joint-by-joint wake-up flow to loosen the neck, spine, hips, and ankles before you start your day.",
    items: [
      { type: "mobility", slug: "neck-cars", reps: "5 slow circles each direction" },
      { type: "mobility", slug: "cat-cow", reps: "8-10 cycles" },
      { type: "mobility", slug: "hip-cars", reps: "5 circles each direction, each leg" },
      { type: "mobility", slug: "ankle-cars", reps: "6-8 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "12-15 reps" },
    ],
    tags: ["morning", "daily", "quick", "wake-up", "full body", "beginner-friendly"],
  },
  {
    id: "10-minute-morning-mobility",
    name: "10-Minute Morning Mobility",
    slug: "10-minute-morning-mobility",
    category: "mobility",
    durationMinutes: 10,
    description:
      "A fuller morning routine that adds shoulder, thoracic, and hip switch work to the quick wake-up flow for days you have a little more time.",
    items: [
      { type: "mobility", slug: "neck-cars", reps: "5 slow circles each direction" },
      { type: "mobility", slug: "scapular-cars", reps: "6-8 full cycles each direction" },
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
    ],
    tags: ["morning", "daily", "full body", "hips", "shoulders", "wake-up"],
  },
  {
    id: "full-body-morning-mobility",
    name: "Full Body Morning Mobility",
    slug: "full-body-morning-mobility",
    category: "mobility",
    durationMinutes: 15,
    description:
      "A head-to-toe joint prep session covering the neck, shoulders, spine, hips, and ankles for a slower, more thorough morning reset.",
    items: [
      { type: "mobility", slug: "neck-cars", reps: "5 slow circles each direction" },
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "cat-cow-pelvic-tilt", reps: "10-12 reps" },
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "walking-lunge-with-reach", reps: "8-10 each leg" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
    ],
    tags: ["morning", "daily", "full body", "hips", "shoulders", "spine", "thorough"],
  },

  // ---------------------------------------------------------------------
  // PRE-TRAINING WARM-UPS
  // ---------------------------------------------------------------------
  {
    id: "5-minute-pre-gym-mobility",
    name: "5-Minute Pre-Gym Mobility",
    slug: "5-minute-pre-gym-mobility",
    category: "mobility",
    durationMinutes: 5,
    description:
      "A fast, no-equipment mobility burst to raise body temperature and open the hips and ankles right before you start lifting.",
    items: [
      { type: "mobility", slug: "inchworm-walkout", reps: "6-8 reps" },
      { type: "mobility", slug: "hip-cars", reps: "5 circles each direction, each leg" },
      { type: "mobility", slug: "leg-swings-front-back", reps: "10 each leg" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "12-15 reps" },
      { type: "mobility", slug: "ankle-cars", reps: "6-8 circles each direction, each foot" },
    ],
    tags: ["pre-gym", "warm-up", "quick", "before training", "full body"],
  },
  {
    id: "upper-body-warm-up",
    name: "Upper Body Warm-Up",
    slug: "upper-body-warm-up",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Opens up the shoulders, upper back, and wrists to prep for pressing, pulling, or general upper-body training.",
    items: [
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "band-pull-apart", reps: "15-20 reps" },
      { type: "mobility", slug: "shoulder-dislocates", reps: "8-10 reps" },
      { type: "mobility", slug: "wall-slides", reps: "10-12 reps" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "wrist-cars", reps: "8-10 circles each direction, each wrist" },
    ],
    tags: ["warm-up", "upper body", "shoulders", "before training", "gym prep"],
  },
  {
    id: "lower-body-warm-up",
    name: "Lower Body Warm-Up",
    slug: "lower-body-warm-up",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Warms up the hips, ankles, and posterior chain to prepare the lower body for squatting, hinging, or running.",
    items: [
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "fire-hydrant-circles", reps: "8-10 circles each direction, each leg" },
      { type: "mobility", slug: "walking-lunge-with-reach", reps: "8-10 each leg" },
      { type: "mobility", slug: "leg-swings-front-back", reps: "10-12 each leg" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
    ],
    tags: ["warm-up", "lower body", "hips", "before training", "gym prep"],
  },
  {
    id: "push-day-warm-up",
    name: "Push Day Warm-Up",
    slug: "push-day-warm-up",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Targets the shoulders, chest, and triceps with dynamic prep to get pressing mechanics ready before a push session.",
    items: [
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "band-pull-apart", reps: "15-20 reps" },
      { type: "mobility", slug: "shoulder-dislocates", reps: "8-10 reps" },
      { type: "stretch", slug: "dynamic-chest-arm-swings", reps: "12-15 reps" },
      { type: "stretch", slug: "dynamic-overhead-arm-reach", reps: "10 each arm" },
      { type: "mobility", slug: "wrist-flexor-extensor-rock", reps: "10-12 rocks each position" },
    ],
    tags: ["warm-up", "push day", "chest", "shoulders", "triceps", "before training"],
  },
  {
    id: "pull-day-warm-up",
    name: "Pull Day Warm-Up",
    slug: "pull-day-warm-up",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Preps the lats, scapula, and biceps with dynamic movement so pulling mechanics feel sharp from the first rep of a pull session.",
    items: [
      { type: "mobility", slug: "scapular-cars", reps: "6-8 full cycles each direction" },
      { type: "mobility", slug: "band-pull-apart", reps: "15-20 reps" },
      { type: "stretch", slug: "dynamic-lat-reach-and-rotate", reps: "10 each side" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "stretch", slug: "dynamic-front-arm-swings", reps: "12-15 reps" },
      { type: "mobility", slug: "wrist-cars", reps: "8-10 circles each direction, each wrist" },
    ],
    tags: ["warm-up", "pull day", "lats", "back", "biceps", "before training"],
  },
  {
    id: "leg-day-warm-up",
    name: "Leg Day Warm-Up",
    slug: "leg-day-warm-up",
    category: "mobility",
    durationMinutes: 10,
    description:
      "A more thorough lower-body prep covering hips, glutes, knees, and ankles to get the legs ready for heavy squatting or hinging.",
    items: [
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "walking-lunge-with-reach", reps: "8-10 each leg" },
      { type: "mobility", slug: "fire-hydrant-to-kickback", reps: "8-10 each leg" },
      { type: "mobility", slug: "leg-swings-front-back", reps: "10-12 each leg" },
      { type: "mobility", slug: "bodyweight-knee-circles-squat", reps: "8-10 circles each direction" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
    ],
    tags: ["warm-up", "leg day", "hips", "glutes", "knees", "before training"],
  },
  {
    id: "pre-run-dynamic-warm-up",
    name: "Pre-Run Dynamic Warm-Up",
    slug: "pre-run-dynamic-warm-up",
    category: "mobility",
    durationMinutes: 8,
    description:
      "A running-specific dynamic warm-up that swings the legs through range and primes the calves and ankles before hitting the pavement.",
    items: [
      { type: "mobility", slug: "leg-swings-front-back", reps: "10-12 each leg" },
      { type: "mobility", slug: "standing-adductor-swings", reps: "10-12 each leg" },
      { type: "mobility", slug: "walking-quad-pull", reps: "8-10 each leg" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
      { type: "mobility", slug: "inchworm-walkout", reps: "6-8 reps" },
    ],
    tags: ["running", "warm-up", "before training", "dynamic", "legs"],
  },
  {
    id: "wrist-and-forearm-prep",
    name: "Wrist & Forearm Prep",
    slug: "wrist-and-forearm-prep",
    category: "mobility",
    durationMinutes: 6,
    description:
      "Lubricates the wrists, elbows, and forearms before load-bearing or grip-heavy work like pressing, front racks, or grappling.",
    items: [
      { type: "mobility", slug: "wrist-cars", reps: "8-10 circles each direction, each wrist" },
      { type: "mobility", slug: "elbow-cars", reps: "8-10 reps each arm" },
      { type: "mobility", slug: "forearm-pronation-supination-drill", reps: "12-15 each arm" },
      { type: "mobility", slug: "wrist-flexor-extensor-rock", reps: "10-12 rocks each position" },
      { type: "mobility", slug: "wrist-weight-shifts-quadruped", reps: "10-12 shifts" },
    ],
    tags: ["wrists", "forearms", "grip", "before training", "warm-up"],
  },
  {
    id: "quad-and-knee-prep",
    name: "Quad & Knee Prep",
    slug: "quad-and-knee-prep",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Loads the quads and knees through range with rocking and swinging drills to get comfortable before squatting or lunging heavy.",
    items: [
      { type: "mobility", slug: "walking-quad-pull", reps: "8-10 each leg" },
      { type: "mobility", slug: "couch-stretch-rock", reps: "10-12 rocks each side" },
      { type: "mobility", slug: "standing-quad-swing", reps: "10-12 each leg" },
      { type: "mobility", slug: "bodyweight-knee-circles-squat", reps: "8-10 circles each direction" },
      { type: "mobility", slug: "terminal-knee-extension-band", reps: "12-15 each leg" },
      { type: "mobility", slug: "knee-cars", reps: "8-10 reps each leg" },
    ],
    tags: ["quads", "knees", "warm-up", "squat prep", "before training"],
  },
  {
    id: "overhead-shoulder-prep",
    name: "Overhead Shoulder Prep",
    slug: "overhead-shoulder-prep",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Combines rotator cuff activation with active and passive range work to get the shoulders ready for overhead pressing or throwing.",
    items: [
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "shoulder-external-rotation-band", reps: "12-15 each side" },
      { type: "mobility", slug: "wall-slides", reps: "10-12 reps" },
      { type: "stretch", slug: "sleeper-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "cross-body-shoulder-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["shoulders", "overhead", "rotator cuff", "warm-up", "throwing"],
  },

  // ---------------------------------------------------------------------
  // POST-TRAINING STRETCH / COOLDOWN
  // ---------------------------------------------------------------------
  {
    id: "post-workout-stretch",
    name: "Post-Workout Stretch",
    slug: "post-workout-stretch",
    category: "stretching",
    durationMinutes: 10,
    description:
      "A general full-body static stretch flow to wind down and ease tension after any training session.",
    items: [
      { type: "stretch", slug: "doorway-chest-stretch", duration: "20-30 sec per arm position" },
      { type: "stretch", slug: "kneeling-lat-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "standing-toe-touch-hamstring-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "standing-quad-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "wall-calf-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "childs-pose-lower-back-stretch", duration: "30-45 sec" },
    ],
    tags: ["post-workout", "cooldown", "full body", "recovery", "static stretch"],
  },
  {
    id: "upper-body-stretch",
    name: "Upper Body Stretch",
    slug: "upper-body-stretch",
    category: "stretching",
    durationMinutes: 8,
    description:
      "Static stretches for the chest, back, shoulders, and arms to release tension after an upper-body session.",
    items: [
      { type: "stretch", slug: "doorway-chest-stretch", duration: "20-30 sec per arm position" },
      { type: "stretch", slug: "kneeling-lat-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "cross-body-shoulder-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "overhead-triceps-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "wall-bicep-stretch", duration: "20-25 sec per side" },
      { type: "stretch", slug: "cross-arm-trap-stretch", duration: "20-25 sec per side" },
    ],
    tags: ["upper body", "post-workout", "recovery", "static stretch", "chest", "back"],
  },
  {
    id: "lower-body-stretch",
    name: "Lower Body Stretch",
    slug: "lower-body-stretch",
    category: "stretching",
    durationMinutes: 10,
    description:
      "Static stretches for the quads, hamstrings, glutes, and calves to help the legs recover after a lower-body session.",
    items: [
      { type: "stretch", slug: "standing-quad-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "seated-hamstring-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "wall-calf-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "butterfly-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "supine-figure-four-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "half-kneeling-hip-flexor-stretch", duration: "25-30 sec per side" },
    ],
    tags: ["lower body", "post-workout", "recovery", "static stretch", "legs"],
  },
  {
    id: "full-body-cooldown",
    name: "Full Body Cooldown",
    slug: "full-body-cooldown",
    category: "stretching",
    durationMinutes: 12,
    description:
      "A longer, more complete static stretch sequence covering upper and lower body for days when you want a fuller cooldown.",
    items: [
      { type: "stretch", slug: "doorway-chest-stretch", duration: "20-30 sec per arm position" },
      { type: "stretch", slug: "kneeling-lat-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "cross-body-shoulder-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "standing-quad-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "seated-hamstring-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "wall-calf-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "childs-pose-lower-back-stretch", duration: "30-45 sec" },
    ],
    tags: ["cooldown", "full body", "recovery", "static stretch", "post-workout"],
  },
  {
    id: "post-run-stretch",
    name: "Post-Run Stretch",
    slug: "post-run-stretch",
    category: "stretching",
    durationMinutes: 10,
    description:
      "Targets the calves, quads, hamstrings, and feet with static stretches suited to easing tightness after a run.",
    items: [
      { type: "stretch", slug: "wall-calf-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "standing-quad-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "standing-toe-touch-hamstring-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "half-kneeling-hip-flexor-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "plantar-fascia-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "step-edge-calf-stretch", duration: "25-30 sec" },
    ],
    tags: ["running", "post-run", "recovery", "static stretch", "calves", "feet"],
  },
  {
    id: "hamstring-and-hip-flexor-focus",
    name: "Hamstring & Hip Flexor Focus",
    slug: "hamstring-and-hip-flexor-focus",
    category: "stretching",
    durationMinutes: 10,
    description:
      "Combines active and static work to target two commonly tight areas for anyone who sits a lot or trains lower-body regularly.",
    items: [
      { type: "mobility", slug: "toe-touch-to-flat-back", reps: "8-10 reps" },
      { type: "mobility", slug: "hip-flexor-rock-lunge", reps: "10-12 rocks each side" },
      { type: "stretch", slug: "seated-hamstring-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "half-kneeling-hip-flexor-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "couch-stretch", duration: "30-45 sec per side" },
      { type: "stretch", slug: "active-straight-leg-raise", reps: "8-10 reps per leg" },
    ],
    tags: ["hamstrings", "hip flexors", "tight hips", "recovery", "runners"],
  },
  {
    id: "deep-hip-opener",
    name: "Deep Hip Opener",
    slug: "deep-hip-opener",
    category: "stretching",
    durationMinutes: 12,
    description:
      "A slower, deeper flow through the adductors, glutes, and hip capsule for days you want to chase real range rather than just loosen up.",
    items: [
      { type: "stretch", slug: "couch-stretch", duration: "30-45 sec per side" },
      { type: "stretch", slug: "pigeon-pose-stretch", duration: "30-45 sec per side" },
      { type: "stretch", slug: "butterfly-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "frog-stretch", duration: "30-45 sec" },
      { type: "stretch", slug: "seated-straddle-stretch", duration: "30-40 sec" },
      { type: "stretch", slug: "supine-figure-four-stretch", duration: "25-30 sec per side" },
    ],
    tags: ["hips", "deep stretch", "adductors", "glutes", "flexibility", "recovery"],
  },
  {
    id: "calf-and-achilles-care",
    name: "Calf & Achilles Care",
    slug: "calf-and-achilles-care",
    category: "recovery",
    durationMinutes: 8,
    description:
      "A focused static and passive stretch sequence for tight calves and Achilles tendons, useful for runners or after heavy calf work.",
    items: [
      { type: "stretch", slug: "wall-calf-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "bent-knee-wall-soleus-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "step-edge-calf-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "ankle-circles", reps: "10 each direction, per foot" },
      { type: "stretch", slug: "kneeling-soleus-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["calves", "achilles", "recovery", "runners", "static stretch"],
  },

  // ---------------------------------------------------------------------
  // BODY-AREA MOBILITY FOCUS
  // ---------------------------------------------------------------------
  {
    id: "hip-mobility",
    name: "Hip Mobility",
    slug: "hip-mobility",
    category: "mobility",
    durationMinutes: 10,
    description:
      "Builds active rotational and lateral range through the hips using CARs, 90/90 switches, and loaded lunge patterns.",
    items: [
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "shin-box-get-up", reps: "5-6 each side" },
      { type: "mobility", slug: "fire-hydrant-circles", reps: "8-10 circles each direction, each leg" },
      { type: "mobility", slug: "lateral-lunge-mobility", reps: "8-10 each side" },
      { type: "mobility", slug: "frog-rock", reps: "10-12 rocks" },
    ],
    tags: ["hips", "mobility", "range of motion", "90/90", "daily"],
  },
  {
    id: "shoulder-mobility",
    name: "Shoulder Mobility",
    slug: "shoulder-mobility",
    category: "mobility",
    durationMinutes: 8,
    description:
      "A focused shoulder session combining CARs, banded work, and wall drills to build and maintain overhead range.",
    items: [
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "band-pull-apart", reps: "15-20 reps" },
      { type: "mobility", slug: "shoulder-dislocates", reps: "8-10 reps" },
      { type: "mobility", slug: "wall-slides", reps: "10-12 reps" },
      { type: "mobility", slug: "shoulder-external-rotation-band", reps: "12-15 each side" },
      { type: "mobility", slug: "scapular-cars", reps: "6-8 full cycles each direction" },
    ],
    tags: ["shoulders", "mobility", "overhead", "rotator cuff", "daily"],
  },
  {
    id: "back-mobility",
    name: "Back Mobility",
    slug: "back-mobility",
    category: "mobility",
    durationMinutes: 10,
    description:
      "Moves the thoracic and lumbar spine through flexion, extension, and rotation to keep the whole back feeling loose and resilient.",
    items: [
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "open-book-rotation", reps: "8-10 each side" },
      { type: "mobility", slug: "seated-lumbar-rotation", reps: "8-10 each side" },
      { type: "mobility", slug: "bird-dog-reach", reps: "8-10 each side" },
      { type: "mobility", slug: "thoracic-extension-over-roller", reps: "8-10 slow extensions" },
    ],
    tags: ["back", "spine", "thoracic spine", "lower back", "mobility", "daily"],
  },
  {
    id: "ankle-mobility",
    name: "Ankle Mobility",
    slug: "ankle-mobility",
    category: "mobility",
    durationMinutes: 8,
    description:
      "Builds dorsiflexion and general ankle range to support deeper squats and better knee tracking during lower-body training.",
    items: [
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "knee-to-wall-ankle-rock", reps: "10-12 rocks each leg" },
      { type: "mobility", slug: "ankle-alphabet", duration: "1-2 min each foot" },
      { type: "mobility", slug: "wall-calf-rock", reps: "10-12 rocks each leg" },
      { type: "mobility", slug: "bent-knee-calf-pumps", reps: "12-15 each leg" },
      { type: "stretch", slug: "standing-ankle-wall-rock", reps: "10-12 each side" },
    ],
    tags: ["ankles", "mobility", "dorsiflexion", "squat depth", "daily"],
  },
  {
    id: "thoracic-spine-reset",
    name: "Thoracic Spine Reset",
    slug: "thoracic-spine-reset",
    category: "mobility",
    durationMinutes: 8,
    description:
      "A mid-back focused sequence to restore rotation and extension through the thoracic spine, useful after long stretches of sitting.",
    items: [
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "open-book-rotation", reps: "8-10 each side" },
      { type: "mobility", slug: "seated-thoracic-rotation-band", reps: "10-12 each side" },
      { type: "mobility", slug: "thoracic-extension-over-roller", reps: "8-10 slow extensions" },
      { type: "stretch", slug: "thread-the-needle-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["thoracic spine", "mid-back", "mobility", "posture", "desk worker"],
  },

  // ---------------------------------------------------------------------
  // RECOVERY / DESK / NIGHT
  // ---------------------------------------------------------------------
  {
    id: "desk-worker-mobility",
    name: "Desk Worker Mobility",
    slug: "desk-worker-mobility",
    category: "recovery",
    durationMinutes: 10,
    description:
      "Counters hours of sitting by resetting the neck, spine, hips, and chest — ideal as a midday break or after a long commute.",
    items: [
      { type: "mobility", slug: "chin-tucks-dynamic", reps: "10-12 reps" },
      { type: "mobility", slug: "neck-rotation-drill", reps: "8-10 each direction" },
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "seated-lumbar-rotation", reps: "8-10 each side" },
      { type: "stretch", slug: "doorway-chest-stretch", duration: "20-30 sec per arm position" },
      { type: "stretch", slug: "half-kneeling-hip-flexor-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "seated-neck-trap-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["desk worker", "posture", "recovery", "daily", "office stretch", "sitting all day"],
  },
  {
    id: "night-time-stretch",
    name: "Night-Time Stretch",
    slug: "night-time-stretch",
    category: "stretching",
    durationMinutes: 12,
    description:
      "A slow, calming static stretch sequence to release the day's tension from the back, hips, and neck before bed.",
    items: [
      { type: "stretch", slug: "childs-pose-lower-back-stretch", duration: "30-45 sec" },
      { type: "stretch", slug: "supine-spinal-twist", duration: "25-30 sec per side" },
      { type: "stretch", slug: "supine-figure-four-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "butterfly-stretch", duration: "25-30 sec" },
      { type: "stretch", slug: "knee-to-chest-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "neck-side-flexion-stretch", duration: "20-25 sec per side" },
    ],
    tags: ["night-time", "bedtime", "relaxation", "recovery", "static stretch", "wind down"],
  },
  {
    id: "recovery-day-mobility",
    name: "Recovery Day Mobility",
    slug: "recovery-day-mobility",
    category: "recovery",
    durationMinutes: 15,
    description:
      "A gentle full-body flow of low-intensity mobility and passive stretches designed for rest days between hard training sessions.",
    items: [
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "thoracic-extension-over-roller", reps: "8-10 slow extensions" },
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "ankle-alphabet", duration: "1-2 min each foot" },
      { type: "mobility", slug: "seated-lumbar-rotation", reps: "8-10 each side" },
      { type: "stretch", slug: "couch-stretch", duration: "30-45 sec per side" },
      { type: "stretch", slug: "pigeon-pose-stretch", duration: "30-45 sec per side" },
    ],
    tags: ["recovery", "rest day", "gentle", "full body", "low intensity"],
  },
  {
    id: "neck-and-upper-back-relief",
    name: "Neck & Upper Back Relief",
    slug: "neck-and-upper-back-relief",
    category: "recovery",
    durationMinutes: 8,
    description:
      "Eases tension held in the neck, traps, and upper back — a good option after a stressful day or long hours at a screen.",
    items: [
      { type: "stretch", slug: "chin-tucks", reps: "10-12 reps" },
      { type: "stretch", slug: "neck-side-flexion-stretch", duration: "20-25 sec per side" },
      { type: "stretch", slug: "neck-rotation-stretch", duration: "15-20 sec per side" },
      { type: "stretch", slug: "seated-neck-trap-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "cross-arm-trap-stretch", duration: "20-25 sec per side" },
      { type: "stretch", slug: "thread-the-needle-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["neck", "upper back", "tension relief", "recovery", "desk worker", "office stretch"],
  },
  {
    id: "grip-and-forearm-recovery",
    name: "Grip & Forearm Recovery",
    slug: "grip-and-forearm-recovery",
    category: "recovery",
    durationMinutes: 6,
    description:
      "A short stretch and mobility sequence for tired forearms and grip muscles after heavy pulling, climbing, or grappling.",
    items: [
      { type: "stretch", slug: "wrist-flexor-stretch", duration: "15-20 sec per side" },
      { type: "stretch", slug: "wrist-extensor-stretch", duration: "15-20 sec per side" },
      { type: "stretch", slug: "dynamic-wrist-circles", reps: "10 each direction" },
      { type: "mobility", slug: "elbow-cars", reps: "8-10 reps each arm" },
      { type: "mobility", slug: "forearm-pronation-supination-drill", reps: "12-15 each arm" },
    ],
    tags: ["forearms", "grip", "recovery", "climbing recovery", "pull day recovery"],
  },

  // ---------------------------------------------------------------------
  // COMPREHENSIVE
  // ---------------------------------------------------------------------
  {
    id: "15-minute-full-body-mobility",
    name: "15-Minute Full Body Mobility",
    slug: "15-minute-full-body-mobility",
    category: "mobility",
    durationMinutes: 15,
    description:
      "A comprehensive joint-prep session touching the neck, shoulders, spine, hips, wrists, and ankles for a complete mobility day.",
    items: [
      { type: "mobility", slug: "neck-cars", reps: "5 slow circles each direction" },
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "hip-cars", reps: "5-6 circles each direction, each leg" },
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "walking-lunge-with-reach", reps: "8-10 each leg" },
      { type: "mobility", slug: "ankle-cars", reps: "8-10 circles each direction, each foot" },
      { type: "mobility", slug: "standing-calf-raises-dynamic", reps: "15-20 reps" },
      { type: "mobility", slug: "wrist-cars", reps: "8-10 circles each direction, each wrist" },
    ],
    tags: ["full body", "mobility", "comprehensive", "daily", "joint health"],
  },
];
