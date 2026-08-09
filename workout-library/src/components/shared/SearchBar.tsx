"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) router.push(`/search?q=${encodeURIComponent(value.trim())}`);
      }}
      className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 h-12"
    >
      <Search size={18} className="text-muted-foreground shrink-0" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search exercises, workouts, muscles…"
        className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
        enterKeyHint="search"
      />
    </form>
  );
}
