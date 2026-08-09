import type { MobilityRoutine } from "@/types";
import { generalRoutines } from "./general";
import { bjjRoutines } from "./bjj";

export const allRoutines: MobilityRoutine[] = [...generalRoutines, ...bjjRoutines];

export { generalRoutines, bjjRoutines };
