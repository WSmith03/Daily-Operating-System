import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 pt-20 text-center">
      <h1 className="text-2xl font-extrabold">Page not found</h1>
      <p className="text-sm text-muted-foreground">That page doesn&apos;t exist or may have moved.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </main>
  );
}
