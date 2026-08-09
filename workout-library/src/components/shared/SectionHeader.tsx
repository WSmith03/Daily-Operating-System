import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  href,
  action = "See all",
}: {
  title: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[17px] font-bold tracking-tight">{title}</h2>
      {href && (
        <Link href={href} className="flex items-center text-[13px] font-medium text-muted-foreground">
          {action}
          <ChevronRight size={15} />
        </Link>
      )}
    </div>
  );
}
