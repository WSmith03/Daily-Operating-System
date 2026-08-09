import type { MobilityRoutine } from "@/types";

export const bjjRoutines: MobilityRoutine[] = [
  {
    id: "bjj-mobility",
    name: "BJJ Mobility",
    slug: "bjj-mobility",
    category: "bjj",
    durationMinutes: 10,
    description:
      "Hip and shoulder mobility drills that mirror the ranges used in guard, mount, and scrambles, built around 90/90 switches and shin box get-ups.",
    items: [
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "shin-box-get-up", reps: "5-6 each side" },
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "hip-shoulder-crawl-rotation", duration: "30-45 sec" },
      { type: "mobility", slug: "scorpion-reach", reps: "8-10 each side" },
    ],
    tags: ["bjj", "jiu jitsu", "grappling", "hips", "shoulders", "guard", "mount", "scrambles", "warm-up"],
  },
  {
    id: "bjj-recovery",
    name: "BJJ Recovery",
    slug: "bjj-recovery",
    category: "bjj",
    durationMinutes: 12,
    description:
      "A gentle post-training flow for grapplers that eases tension out of the hips, lower back, neck, and shoulders after rolling.",
    items: [
      { type: "mobility", slug: "cat-cow", reps: "10-12 full cycles" },
      { type: "mobility", slug: "seated-lumbar-rotation", reps: "8-10 each side" },
      { type: "stretch", slug: "supine-figure-four-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "childs-pose-lower-back-stretch", duration: "30-45 sec" },
      { type: "stretch", slug: "cross-body-shoulder-stretch", duration: "20-30 sec per side" },
      { type: "stretch", slug: "neck-side-flexion-stretch", duration: "20-25 sec per side" },
    ],
    tags: ["bjj", "jiu jitsu", "grappling", "recovery", "post-training", "hips", "neck", "shoulders"],
  },
  {
    id: "bjj-hip-mobility",
    name: "BJJ Hip Mobility",
    slug: "bjj-hip-mobility",
    category: "bjj",
    durationMinutes: 12,
    description:
      "A deeper hip-focused flow covering adductors, hip flexors, and glutes to support guard retention, base changes, and deep squatting positions.",
    items: [
      { type: "mobility", slug: "90-90-hip-switch", reps: "8-10 switches each direction" },
      { type: "mobility", slug: "frog-rock", reps: "10-12 rocks" },
      { type: "mobility", slug: "lateral-lunge-mobility", reps: "8-10 each side" },
      { type: "mobility", slug: "hip-flexor-rock-lunge", reps: "10-12 rocks each side" },
      { type: "stretch", slug: "couch-stretch", duration: "30-45 sec per side" },
      { type: "stretch", slug: "supine-figure-four-stretch", duration: "25-30 sec per side" },
      { type: "stretch", slug: "butterfly-stretch", duration: "25-30 sec" },
    ],
    tags: ["bjj", "jiu jitsu", "grappling", "hips", "adductors", "hip flexors", "glutes", "guard retention", "90/90"],
  },
  {
    id: "bjj-shoulder-mobility",
    name: "BJJ Shoulder Mobility",
    slug: "bjj-shoulder-mobility",
    category: "bjj",
    durationMinutes: 10,
    description:
      "Shoulder and thoracic focused mobility work that supports framing, underhooks, and the rotational demands of grappling.",
    items: [
      { type: "mobility", slug: "shoulder-cars", reps: "5-6 slow circles each direction, each arm" },
      { type: "mobility", slug: "kettlebell-armbar-mobility", reps: "3-5 slow reps each side" },
      { type: "mobility", slug: "thoracic-rotation-quadruped", reps: "8-10 each side" },
      { type: "mobility", slug: "seated-thoracic-rotation-band", reps: "10-12 each side" },
      { type: "mobility", slug: "shoulder-external-rotation-band", reps: "12-15 each side" },
      { type: "stretch", slug: "cross-body-shoulder-stretch", duration: "20-30 sec per side" },
    ],
    tags: ["bjj", "jiu jitsu", "grappling", "shoulders", "thoracic spine", "framing", "underhooks"],
  },
];
