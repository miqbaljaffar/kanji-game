"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "kanjimocha_dark_mode";

export function useDarkMode() {
  // Start with undefined — resolve after hydration to avoid SSR flash
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  // Hydrate from localStorage (or OS preference) after mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setIsDark(stored === "true");
    } else {
      // Fall back to OS preference
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply / remove .dark class on <html> whenever isDark changes
  useEffect(() => {
    if (isDark === undefined) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch { /* quota / private mode */ }
      return next;
    });
  }, []);

  return { isDark: isDark ?? false, toggle };
}
