import type { Difficulty, Equipment, MovementPattern, TrainingGoal } from "@/types";

export const EQUIPMENT_LIST: Equipment[] = [
  "Bodyweight",
  "Dumbbells",
  "Barbell",
  "Kettlebell",
  "Cable",
  "Resistance Bands",
  "Machine",
  "Smith Machine",
  "Bench",
  "Pull-Up Bar",
  "Dip Bars",
  "TRX / Suspension Trainer",
  "Medicine Ball",
  "Stability Ball",
  "Foam Roller",
  "Landmine",
  "EZ Bar",
  "Trap Bar",
  "Sled",
  "Battle Ropes",
  "Plyometric Box",
  "No Equipment",
];

export const TRAINING_GOALS: TrainingGoal[] = [
  "Hypertrophy",
  "Strength",
  "Muscular Endurance",
  "Conditioning",
  "Power",
  "Athletic Performance",
  "Mobility",
  "Stability",
  "Injury Prevention",
  "Recovery",
  "General Fitness",
];

export const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

export const MOVEMENT_PATTERNS: MovementPattern[] = [
  "Horizontal Push",
  "Vertical Push",
  "Horizontal Pull",
  "Vertical Pull",
  "Squat",
  "Hinge",
  "Lunge",
  "Carry",
  "Rotation",
  "Anti-Rotation",
  "Flexion",
  "Extension",
  "Abduction",
  "Adduction",
  "Scapular Retraction",
  "Scapular Protraction",
  "Scapular Elevation",
  "Scapular Depression",
  "External Rotation",
  "Internal Rotation",
  "Plantarflexion",
  "Dorsiflexion",
];

export const DURATION_OPTIONS = [5, 10, 15, 20, 30, 45, 60, 75, 90];

export const REST_PRESETS_SECONDS = [30, 45, 60, 90, 120, 180];

/** Conservative default rest-time ranges by training goal, shown as guidance only. */
export const REST_GUIDANCE_BY_GOAL: Partial<Record<TrainingGoal, string>> = {
  Hypertrophy: "60-120 sec",
  Strength: "2-5 min",
  "Muscular Endurance": "30-60 sec",
  Conditioning: "15-60 sec",
  Power: "2-4 min",
  "Athletic Performance": "60-120 sec",
  Mobility: "No rest needed",
  Stability: "30-60 sec",
  "Injury Prevention": "45-90 sec",
  Recovery: "No rest needed",
  "General Fitness": "60-90 sec",
};

export const TRAINING_TEMPLATES = [
  "Push Pull Legs",
  "Upper Lower",
  "Full Body",
  "Bro Split",
  "3-Day Gym",
  "4-Day Gym",
  "5-Day Gym",
  "6-Day Gym",
  "Kettlebell Only",
  "Dumbbell Only",
  "Home Training",
];
