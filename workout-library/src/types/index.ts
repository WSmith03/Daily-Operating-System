// Core domain types for the Workout Library app.
// Keep these stable — seed data files and UI components both depend on this contract.

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ExerciseType = "Compound" | "Isolation" | "Mobility" | "Stretch" | "Conditioning";

export type Laterality = "Bilateral" | "Unilateral" | "Both";

export type TrainingGoal =
  | "Hypertrophy"
  | "Strength"
  | "Muscular Endurance"
  | "Conditioning"
  | "Power"
  | "Athletic Performance"
  | "Mobility"
  | "Stability"
  | "Injury Prevention"
  | "Recovery"
  | "General Fitness";

export type Equipment =
  | "Bodyweight"
  | "Dumbbells"
  | "Barbell"
  | "Kettlebell"
  | "Cable"
  | "Resistance Bands"
  | "Machine"
  | "Smith Machine"
  | "Bench"
  | "Pull-Up Bar"
  | "Dip Bars"
  | "TRX / Suspension Trainer"
  | "Medicine Ball"
  | "Stability Ball"
  | "Foam Roller"
  | "Landmine"
  | "EZ Bar"
  | "Trap Bar"
  | "Sled"
  | "Battle Ropes"
  | "Plyometric Box"
  | "No Equipment";

export type MovementPattern =
  | "Horizontal Push"
  | "Vertical Push"
  | "Horizontal Pull"
  | "Vertical Pull"
  | "Squat"
  | "Hinge"
  | "Lunge"
  | "Carry"
  | "Rotation"
  | "Anti-Rotation"
  | "Flexion"
  | "Extension"
  | "Abduction"
  | "Adduction"
  | "Scapular Retraction"
  | "Scapular Protraction"
  | "Scapular Elevation"
  | "Scapular Depression"
  | "External Rotation"
  | "Internal Rotation"
  | "Plantarflexion"
  | "Dorsiflexion";

// Top-level muscle groups shown on the home screen.
export type MuscleGroupId =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "forearms"
  | "legs"
  | "glutes"
  | "core"
  | "full-body"
  | "kettlebell"
  | "mobility"
  | "stretching"
  | "recovery";

export interface MuscleSubdivision {
  id: string;
  name: string;
  /** Parent muscle group id (e.g. "back") */
  group: MuscleGroupId;
  /** Anatomical description, kept short. */
  description?: string;
}

export interface MuscleGroup {
  id: MuscleGroupId;
  name: string;
  /** Short one-line description for cards. */
  blurb: string;
  /** Icon name from lucide-react. */
  icon: string;
  /** Focus areas shown in the drill-down screen, e.g. "Lats", "Upper Back". */
  focusAreas: { id: string; name: string; description?: string }[];
  /** Deeper anatomical muscles belonging to this group. */
  muscles: string[];
}

export interface Exercise {
  id: string;
  name: string;
  slug: string;
  /** Primary muscle group this belongs to for library grouping. */
  category: MuscleGroupId;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  /** Specific subdivision focus, e.g. "Upper Chest", "Lat Width", "Long Head". */
  muscleSubdivision?: string[];
  equipment: Equipment[];
  movementPattern: MovementPattern[];
  difficulty: Difficulty;
  trainingGoals: TrainingGoal[];
  exerciseType: ExerciseType;
  laterality: Laterality;
  instructions: string[];
  setup?: string[];
  execution?: string[];
  breathing?: string;
  tempo?: string;
  coachingCues?: string[];
  commonMistakes?: string[];
  regressions?: string[];
  progressions?: string[];
  /** Slugs of similar exercises usable as swaps. */
  alternatives?: string[];
  recommendedSets?: string;
  recommendedReps?: string;
  recommendedRest?: string;
  suggestedRPE?: string;
  mobilityRequirements?: string[];
  stabilityRequirements?: string[];
  tags: string[];
}

export interface WorkoutExercise {
  exerciseSlug: string;
  sets: number;
  /** Free-form so ranges like "8-12" or "AMRAP" are allowed. */
  reps: string;
  restSeconds: number;
  notes?: string;
  /** Marks this block as a warm-up / finisher / cooldown entry within the flow. */
  section?: "warmup" | "main" | "finisher" | "cooldown";
}

export interface Workout {
  id: string;
  name: string;
  slug: string;
  category: MuscleGroupId;
  /** Extra muscle-group tags, e.g. a "Push Day" spans chest/shoulders/triceps. */
  secondaryCategories?: MuscleGroupId[];
  trainingGoals: TrainingGoal[];
  durationMinutes: number;
  difficulty: Difficulty;
  equipment: Equipment[];
  warmup?: WorkoutExercise[];
  exercises: WorkoutExercise[];
  finisher?: WorkoutExercise[];
  cooldown?: WorkoutExercise[];
  notes?: string;
  tags: string[];
  /** Training split template this belongs to, e.g. "Push Pull Legs". */
  template?: string;
}

export type MobilityBodyArea =
  | "Neck"
  | "Shoulders"
  | "Thoracic Spine"
  | "Wrists"
  | "Elbows"
  | "Lower Back"
  | "Hips"
  | "Hip Flexors"
  | "Adductors"
  | "Hamstrings"
  | "Quads"
  | "Glutes"
  | "Knees"
  | "Ankles"
  | "Calves"
  | "Full Body";

export interface MobilityExercise {
  id: string;
  name: string;
  slug: string;
  bodyArea: MobilityBodyArea;
  purpose: string;
  instructions: string[];
  duration?: string;
  reps?: string;
  whenToUse: ("Before Training" | "After Training" | "Recovery" | "Daily")[];
  equipment: Equipment[];
  tags: string[];
}

export type StretchType = "Dynamic" | "Static" | "Active" | "Passive" | "PNF";

export interface Stretch {
  id: string;
  name: string;
  slug: string;
  type: StretchType;
  targetMuscles: string[];
  bodyArea: string;
  instructions: string[];
  duration?: string;
  reps?: string;
  whenToUse: ("Before Training" | "After Training" | "Recovery" | "Daily")[];
  tags: string[];
}

export interface MobilityRoutine {
  id: string;
  name: string;
  slug: string;
  category: "mobility" | "stretching" | "recovery" | "bjj";
  durationMinutes: number;
  description: string;
  items: { type: "mobility" | "stretch"; slug: string; duration?: string; reps?: string }[];
  tags: string[];
}

// ---- User-generated / local data ----

export interface CustomWorkoutExercise extends WorkoutExercise {
  id: string; // stable id for drag-and-drop ordering
}

export interface CustomWorkout {
  id: string;
  name: string;
  exercises: CustomWorkoutExercise[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HistorySetEntry {
  setNumber: number;
  reps?: number;
  weight?: number;
  rpe?: number;
  completed: boolean;
}

export interface HistoryExerciseEntry {
  exerciseSlug: string;
  sets: HistorySetEntry[];
  notes?: string;
}

export interface WorkoutHistoryEntry {
  id: string;
  workoutSlug?: string;
  customWorkoutId?: string;
  workoutName: string;
  date: string; // ISO date
  durationMinutes: number;
  exercises: HistoryExerciseEntry[];
  notes?: string;
}

export interface FavouritesState {
  exercises: string[]; // exercise slugs
  workouts: string[]; // workout slugs
  stretches: string[]; // stretch slugs
  mobility: string[]; // mobility slugs
  routines: string[]; // mobility routine slugs
}

export interface QuickWorkoutParams {
  muscleGroup: MuscleGroupId;
  focusArea?: string;
  equipment: Equipment[];
  durationMinutes: number;
  difficulty: Difficulty;
  trainingGoal: TrainingGoal;
  exerciseCount?: number;
}
