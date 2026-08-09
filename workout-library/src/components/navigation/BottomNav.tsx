"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Dumbbell, LibraryBig, HeartPulse, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/workouts", label: "Workouts", icon: Dumbbell },
  { href: "/exercises", label: "Exercises", icon: LibraryBig },
  { href: "/recovery", label: "Recovery", icon: HeartPulse },
  { href: "/favourites", label: "Favourites", icon: Heart },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  if (pathname.endsWith("/play")) return null;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 backdrop-blur-xl safe-bottom"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 tap-highlight-none"
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                  active ? "bg-accent-soft text-accent" : "text-muted-foreground",
                )}
              >
                <Icon size={22} strokeWidth={active ? 2.4 : 2} />
              </span>
              <span
                className={cn(
                  "text-[10.5px] font-medium tracking-tight",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
