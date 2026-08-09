import type { Workout } from "@/types";
import { chestWorkouts } from "./chest";
import { backWorkouts } from "./back";
import { shoulderWorkouts } from "./shoulders";
import { armWorkouts } from "./arms";
import { legWorkouts } from "./legs";
import { coreWorkouts } from "./core";
import { fullBodyWorkouts } from "./fullbody";
import { kettlebellWorkouts } from "./kettlebell";
import { bjjWorkouts } from "./bjj";

export const allWorkouts: Workout[] = [
  ...chestWorkouts,
  ...backWorkouts,
  ...shoulderWorkouts,
  ...armWorkouts,
  ...legWorkouts,
  ...coreWorkouts,
  ...fullBodyWorkouts,
  ...kettlebellWorkouts,
  ...bjjWorkouts,
];

export {
  chestWorkouts,
  backWorkouts,
  shoulderWorkouts,
  armWorkouts,
  legWorkouts,
  coreWorkouts,
  fullBodyWorkouts,
  kettlebellWorkouts,
  bjjWorkouts,
};
