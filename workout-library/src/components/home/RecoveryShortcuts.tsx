import Link from "next/link";
import { Weight, RefreshCw, Waves } from "lucide-react";

const shortcuts = [
  { href: "/recovery/kettlebell", label: "Kettlebell", icon: Weight },
  { href: "/recovery/mobility", label: "Mobility", icon: RefreshCw },
  { href: "/recovery/stretching", label: "Stretching", icon: Waves },
];

export function RecoveryShortcuts() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {shortcuts.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface py-4 active:scale-[0.98] transition-transform"
        >
          <Icon size={20} className="text-accent" />
          <span className="text-[12.5px] font-semibold">{label}</span>
        </Link>
      ))}
    </div>
  );
}
