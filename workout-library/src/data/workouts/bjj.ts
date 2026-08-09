import type { Workout } from "@/types";

// BJJ / grappling supplemental strength & conditioning workouts.
// These are off-the-mats accessory sessions meant to support grappling performance —
// none of them claim to prevent injury outright; language stays conservative throughout.
// Every exerciseSlug below is verified against src/data/exercises/{core,legs,glutes,back,shoulders,forearms,kettlebell}.ts.
export const bjjWorkouts: Workout[] = [
  {
    id: "bjj-strength",
    name: "BJJ Strength",
    slug: "bjj-strength",
    category: "full-body",
    trainingGoals: ["Strength", "Athletic Performance", "General Fitness"],
    durationMinutes: 45,
    difficulty: "Intermediate",
    equipment: ["Trap Bar", "Barbell", "Dumbbells", "Resistance Bands", "Bodyweight"],
    warmup: [
      { exerciseSlug: "band-pull-apart", sets: 2, reps: "15", restSeconds: 30, section: "warmup", notes: "Wakes up the upper back before loaded pulling and pressing." },
      { exerciseSlug: "bird-dog", sets: 2, reps: "8 per side", restSeconds: 30, section: "warmup", notes: "Primes hip and shoulder coordination without loading the spine yet." },
    ],
    exercises: [
      { exerciseSlug: "trap-bar-deadlift", sets: 4, reps: "5", restSeconds: 120, section: "main", notes: "Neutral-grip pull builds whole-body pulling strength that carries directly into breaking an opponent's posture and finishing takedowns." },
      { exerciseSlug: "barbell-back-squat", sets: 4, reps: "6", restSeconds: 120, section: "main", notes: "General leg and hip strength that underpins takedowns, base retention, and standing back up from bottom position." },
      { exerciseSlug: "barbell-overhead-press", sets: 3, reps: "8", restSeconds: 90, section: "main", notes: "Overhead strength has some carryover to framing and pummeling against resistance." },
      { exerciseSlug: "one-arm-dumbbell-row", sets: 3, reps: "10 per side", restSeconds: 75, section: "main", notes: "Unilateral pulling strength mirrors the asymmetric grips used constantly in grappling." },
    ],
    finisher: [
      { exerciseSlug: "farmers-carry", sets: 3, reps: "40m", restSeconds: 75, section: "finisher", notes: "Grip and trunk endurance under load — a rough analog for controlling a resisting opponent's weight." },
    ],
    cooldown: [
      { exerciseSlug: "dead-bug", sets: 2, reps: "8 per side", restSeconds: 30, section: "cooldown", notes: "Resets the spine to a neutral, relaxed position after heavy loading." },
    ],
    notes:
      "General strength work — deadlift, squat, press, and row variants — chosen for how directly they carry over to grappling: posture-breaking pulls, base and takedown strength through the legs, and grip/trunk endurance from the carry. This may help support overall strength for grappling but does not replace mat time or sport-specific conditioning.",
    tags: ["bjj", "grappling", "strength", "full body", "hinge", "squat", "push", "pull", "carry"],
  },
  {
    id: "bjj-core",
    name: "BJJ Core",
    slug: "bjj-core",
    category: "core",
    trainingGoals: ["Stability", "Injury Prevention", "Athletic Performance"],
    durationMinutes: 30,
    difficulty: "Intermediate",
    equipment: ["Resistance Bands", "Cable", "Dumbbells", "Bodyweight"],
    warmup: [
      { exerciseSlug: "dead-bug", sets: 2, reps: "8 per side", restSeconds: 30, section: "warmup" },
      { exerciseSlug: "bird-dog", sets: 2, reps: "8 per side", restSeconds: 30, section: "warmup" },
    ],
    exercises: [
      { exerciseSlug: "pallof-press", sets: 3, reps: "10-12 per side", restSeconds: 45, section: "main", notes: "Anti-rotation bracing directly mirrors resisting a roll or a hip escape attempt from an opponent." },
      { exerciseSlug: "half-kneeling-band-chop", sets: 3, reps: "10-15 per side", restSeconds: 45, section: "main", notes: "Trains the trunk to resist rotation from a half-kneeling base, similar to fighting for underhooks from the knees." },
      { exerciseSlug: "side-plank", sets: 3, reps: "20-40 sec per side", restSeconds: 45, section: "main", notes: "Lateral bracing for the side control and turtle positions where the torso is loaded from one side." },
      { exerciseSlug: "renegade-row", sets: 3, reps: "8-10 per side", restSeconds: 60, section: "main", notes: "Anti-rotation under a plank while one arm pulls — close to the demand of rowing on an opponent's collar while your base stays square." },
      { exerciseSlug: "medicine-ball-rotational-throw", sets: 3, reps: "6-8 per side", restSeconds: 75, section: "main", notes: "Builds the rotational power used in scrambles, sweeps, and hip-driven submissions." },
    ],
    finisher: [
      { exerciseSlug: "farmer-carry", sets: 2, reps: "30-40m per side", restSeconds: 60, section: "finisher", notes: "Combines grip fatigue with anti-lateral-flexion bracing, similar to controlling a limb while your core resists being pulled off-balance." },
    ],
    cooldown: [
      { exerciseSlug: "plank", sets: 1, reps: "30-45 sec", restSeconds: 0, section: "cooldown", notes: "Easy hold to finish, not a strength test." },
    ],
    notes:
      "Covers anti-rotation, lateral bracing, and rotational power — the three core qualities most relevant to grappling — rather than spinal-flexion ab work like crunches. May help support trunk stability during scrambles and transitions; it is not a guarantee against injury.",
    tags: ["bjj", "grappling", "core", "anti-rotation", "rotation", "stability", "bracing"],
  },
  {
    id: "bjj-grip",
    name: "BJJ Grip",
    slug: "bjj-grip",
    category: "full-body",
    trainingGoals: ["Muscular Endurance", "Injury Prevention", "Athletic Performance"],
    durationMinutes: 25,
    difficulty: "Intermediate",
    equipment: ["Pull-Up Bar", "Dumbbells", "Kettlebell", "Resistance Bands", "No Equipment"],
    warmup: [
      { exerciseSlug: "rice-bucket-training", sets: 1, reps: "60 sec", restSeconds: 30, section: "warmup", notes: "Works the wrists and fingers through a full range before loading them harder." },
      { exerciseSlug: "band-wrist-extension", sets: 2, reps: "15", restSeconds: 20, section: "warmup", notes: "Balances the flexor-dominant grip work to come with some extensor activation first." },
    ],
    exercises: [
      { exerciseSlug: "gi-grip-hang", sets: 3, reps: "15-30 sec", restSeconds: 75, section: "main", notes: "The most sport-specific option here — mimics the exact angle of gripping an opponent's collar or sleeve." },
      { exerciseSlug: "towel-pull-up", sets: 3, reps: "3-6", restSeconds: 90, section: "main", notes: "Combines grip endurance with pulling strength under a slipping, gi-like grip." },
      { exerciseSlug: "plate-pinch-hold", sets: 3, reps: "15-30 sec per side", restSeconds: 75, section: "main", notes: "Pinch strength carries over to controlling a pant leg or sleeve with the fingers and thumb." },
      { exerciseSlug: "thick-grip-dumbbell-hold", sets: 3, reps: "20-30 sec", restSeconds: 75, section: "main", notes: "Thicker diameter grip demand overlaps with gripping a wrist or thick gi material." },
      { exerciseSlug: "kettlebell-farmer-carry", sets: 3, reps: "40-60m", restSeconds: 75, section: "main", notes: "Loaded carry keeps the grip firing while under whole-body fatigue, closer to a real grappling exchange than an isolated hold." },
    ],
    finisher: [
      { exerciseSlug: "one-arm-dead-hang", sets: 2, reps: "10-20 sec per side", restSeconds: 90, section: "finisher", notes: "A tough unilateral finisher for grip and shoulder endurance once the hands are already fatigued." },
    ],
    cooldown: [
      { exerciseSlug: "band-wrist-flexion", sets: 2, reps: "15", restSeconds: 20, section: "cooldown", notes: "Light, controlled reps to flush the forearms after a grip-heavy session." },
    ],
    notes:
      "Grip and forearm endurance are frequently the limiting factor in a long roll, well before the bigger muscle groups fatigue. This session may help support grip endurance for grappling; it is not a substitute for gripping fatigue that only builds from live training.",
    tags: ["bjj", "grappling", "grip strength", "forearms", "grip endurance", "muscular endurance"],
  },
  {
    id: "bjj-conditioning",
    name: "BJJ Conditioning",
    slug: "bjj-conditioning",
    category: "full-body",
    trainingGoals: ["Conditioning", "Muscular Endurance", "Athletic Performance"],
    durationMinutes: 30,
    difficulty: "Intermediate",
    equipment: ["Kettlebell", "Plyometric Box", "Bodyweight"],
    warmup: [
      { exerciseSlug: "mountain-climber", sets: 2, reps: "20 sec", restSeconds: 20, section: "warmup" },
      { exerciseSlug: "bear-crawl-hold", sets: 2, reps: "20 sec", restSeconds: 20, section: "warmup", notes: "Loads the shoulders and hips isometrically in a grappling-relevant base position." },
    ],
    exercises: [
      { exerciseSlug: "kettlebell-two-hand-swing", sets: 4, reps: "15", restSeconds: 30, section: "main", notes: "Hip-driven power output under a rising heart rate, similar to explosive hip movement in scrambles." },
      { exerciseSlug: "box-jump", sets: 3, reps: "6", restSeconds: 45, section: "main", notes: "Trains explosive hip and leg power for takedowns and standing up out of bottom position." },
      { exerciseSlug: "kettlebell-clean-and-press", sets: 3, reps: "6 per side", restSeconds: 45, section: "main", notes: "Full-body chain that keeps the heart rate elevated while still demanding coordination under fatigue." },
      { exerciseSlug: "plank-jack", sets: 3, reps: "20", restSeconds: 30, section: "main", notes: "Keeps the core and shoulders working while adding a cardio component similar to scrambling from the floor." },
      { exerciseSlug: "kettlebell-farmer-carry", sets: 2, reps: "40m", restSeconds: 45, section: "main", notes: "Grip-under-fatigue carry to close out the circuit." },
    ],
    finisher: [
      { exerciseSlug: "kettlebell-burpee", sets: 3, reps: "8-10", restSeconds: 45, section: "finisher", notes: "Combines a floor-to-standing transition with loaded ballistic work — a demanding gas-tank finisher." },
    ],
    cooldown: [
      { exerciseSlug: "dead-bug", sets: 1, reps: "8 per side", restSeconds: 30, section: "cooldown" },
    ],
    notes:
      "Higher-density circuit mixing kettlebell ballistics, explosive jumps, and bodyweight conditioning to build the gas tank grappling demands over a long roll or match. Keep rest periods short and honest — the goal is sustaining output while breathing hard, which is exactly the state grappling puts you in.",
    tags: ["bjj", "grappling", "conditioning", "gas tank", "ballistic", "athletic performance", "full body"],
  },
  {
    id: "bjj-lower-body",
    name: "BJJ Lower Body",
    slug: "bjj-lower-body",
    category: "full-body",
    trainingGoals: ["Injury Prevention", "Stability", "Strength"],
    durationMinutes: 35,
    difficulty: "Intermediate",
    equipment: ["Kettlebell", "Dumbbells", "Bench", "Resistance Bands", "Bodyweight"],
    warmup: [
      { exerciseSlug: "side-lying-hip-abduction", sets: 2, reps: "12 per side", restSeconds: 30, section: "warmup", notes: "Activates the glute medius, which helps stabilize the knee and hip during single-leg loading." },
      { exerciseSlug: "quadruped-hip-extension", sets: 2, reps: "12 per side", restSeconds: 30, section: "warmup" },
    ],
    exercises: [
      { exerciseSlug: "kettlebell-single-leg-deadlift", sets: 3, reps: "8 per side", restSeconds: 60, section: "main", notes: "Single-leg hip strength and balance may help support knee stability during scrambles and single-leg takedown defense." },
      { exerciseSlug: "kettlebell-cossack-squat", sets: 3, reps: "8 per side", restSeconds: 60, section: "main", notes: "Builds strength through the lateral and deep-hip ranges grappling regularly demands." },
      { exerciseSlug: "copenhagen-plank", sets: 3, reps: "15-25 sec per side", restSeconds: 60, section: "main", notes: "Adductor strength commonly used to help support the hips and knees against the sideways forces of guard retention and leg entanglements." },
      { exerciseSlug: "dumbbell-bulgarian-split-squat", sets: 3, reps: "8-10 per side", restSeconds: 75, section: "main", notes: "Single-leg strength for standing back up from the bottom and driving through takedowns." },
      { exerciseSlug: "single-leg-hip-thrust", sets: 3, reps: "10 per side", restSeconds: 60, section: "main", notes: "Direct glute strength for hip drive in sweeps and bridging escapes." },
    ],
    finisher: [
      { exerciseSlug: "banded-lateral-walk", sets: 2, reps: "12 steps per side", restSeconds: 45, section: "finisher", notes: "Light finisher for the hip abductors that commonly get under-trained relative to the bigger leg muscles." },
    ],
    cooldown: [
      { exerciseSlug: "bird-dog", sets: 1, reps: "8 per side", restSeconds: 30, section: "cooldown" },
    ],
    notes:
      "Leans on single-leg and adductor work rather than heavy bilateral squats, since grappling loads the hips and knees asymmetrically far more often than symmetrically. This may help support knee and hip resilience for grappling; it does not guarantee against injury, and any existing knee pain should be evaluated before loading these patterns.",
    tags: ["bjj", "grappling", "legs", "adductors", "hip stability", "knee strength", "unilateral", "injury prevention"],
  },
  {
    id: "bjj-injury-prevention",
    name: "BJJ Injury Prevention",
    slug: "bjj-injury-prevention",
    category: "full-body",
    trainingGoals: ["Injury Prevention", "Stability", "Recovery"],
    durationMinutes: 25,
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Resistance Bands", "Cable", "Kettlebell", "Bodyweight"],
    warmup: [
      { exerciseSlug: "band-pull-apart", sets: 2, reps: "15", restSeconds: 30, section: "warmup" },
      { exerciseSlug: "kettlebell-halo", sets: 1, reps: "6 per direction", restSeconds: 20, section: "warmup", notes: "Very light bell — this is a mobility primer, not a loading exercise here." },
    ],
    exercises: [
      { exerciseSlug: "dumbbell-external-rotation", sets: 3, reps: "12-15 per side", restSeconds: 45, section: "main", notes: "Light rotator cuff work commonly used to help support shoulder stability against the constant gripping and framing in grappling." },
      { exerciseSlug: "band-internal-rotation", sets: 3, reps: "12-15 per side", restSeconds: 45, section: "main", notes: "Balances the external rotation work to keep the rotator cuff musculature developed on both sides." },
      { exerciseSlug: "face-pull", sets: 3, reps: "12-15", restSeconds: 45, section: "main", notes: "Rear delt and upper back work that may help support shoulder position under the forward-reaching demands of gripping and framing." },
      { exerciseSlug: "wall-slide", sets: 3, reps: "10-12", restSeconds: 30, section: "main", notes: "Reinforces controlled overhead shoulder blade movement, useful after time spent in rounded, defensive postures." },
      { exerciseSlug: "banded-standing-leg-curl", sets: 3, reps: "12-15 per side", restSeconds: 45, section: "main", notes: "Light hamstring work at the knee joint — commonly used alongside quad training to help balance the muscles crossing the knee." },
    ],
    finisher: [
      { exerciseSlug: "kettlebell-bottoms-up-press", sets: 2, reps: "4-6 per side", restSeconds: 60, section: "finisher", notes: "Very light load — the goal is shoulder and wrist control, not pressing weight." },
    ],
    cooldown: [
      { exerciseSlug: "scarecrow", sets: 2, reps: "10-12", restSeconds: 30, section: "cooldown", notes: "Slow, controlled range to finish, reinforcing rotator cuff control at low intensity." },
    ],
    notes:
      "Light-load, control-focused session targeting the rotator cuff, shoulder stability, and knee-supporting muscles that take repeated stress from grappling — gripping, framing, and being caught in awkward joint positions. There is no dedicated neck-specific exercise in this library yet, but building surrounding shoulder and upper-back strength here may help support the neck and shoulders during scrambles. This work may help support joint resilience; it does not prevent injury, and any existing pain should be assessed by a qualified professional before training through it.",
    tags: ["bjj", "grappling", "injury prevention", "rotator cuff", "shoulder stability", "knee strength", "stability", "recovery"],
  },
];
