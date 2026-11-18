"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

interface DarkModeToggleProps {
  className?: string;
}

export function DarkModeToggle({ className = "" }: DarkModeToggleProps) {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title={isDark ? "Mode Terang" : "Mode Gelap"}
      className={`rpg-btn flex items-center justify-center w-11 h-11 touch-manipulation shrink-0 ${className}`}
    >
      <span className="text-lg leading-none" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
