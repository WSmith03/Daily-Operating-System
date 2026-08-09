import type { Exercise } from "@/types";
import { chestExercises } from "./chest";
import { shouldersExercises } from "./shoulders";
import { backExercises } from "./back";
import { bicepsExercises } from "./biceps";
import { tricepsExercises } from "./triceps";
import { forearmsExercises } from "./forearms";
import { legsExercises } from "./legs";
import { glutesExercises } from "./glutes";
import { coreExercises } from "./core";
import { kettlebellExercises } from "./kettlebell";

export const allExercises: Exercise[] = [
  ...chestExercises,
  ...shouldersExercises,
  ...backExercises,
  ...bicepsExercises,
  ...tricepsExercises,
  ...forearmsExercises,
  ...legsExercises,
  ...glutesExercises,
  ...coreExercises,
  ...kettlebellExercises,
];

export {
  chestExercises,
  shouldersExercises,
  backExercises,
  bicepsExercises,
  tricepsExercises,
  forearmsExercises,
  legsExercises,
  glutesExercises,
  coreExercises,
  kettlebellExercises,
};
