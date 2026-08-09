import { CustomWorkoutPlayer } from "@/components/workout/CustomWorkoutPlayer";

export default async function CustomWorkoutPlayPage({ params }: PageProps<"/custom/[id]/play">) {
  const { id } = await params;
  return <CustomWorkoutPlayer id={id} />;
}
