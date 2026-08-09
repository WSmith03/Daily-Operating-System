import { CustomWorkoutEditor } from "@/components/custom/CustomWorkoutEditor";

export default async function CustomWorkoutEditPage({ params }: PageProps<"/custom/[id]/edit">) {
  const { id } = await params;
  return <CustomWorkoutEditor id={id} />;
}
