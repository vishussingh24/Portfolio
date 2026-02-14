"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-14" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-9 w-14 items-center rounded-full border border-border-color bg-surface/70 text-foreground shadow-sm backdrop-blur transition hover:border-foreground/30"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      type="button"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="pointer-events-none absolute left-2 text-foreground/40">
        <Sun size={12} />
      </span>
      <span className="pointer-events-none absolute right-2 text-foreground/40">
        <Moon size={12} />
      </span>
      <span
        className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background shadow transition-transform duration-200 ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </span>
    </button>
  );
}
