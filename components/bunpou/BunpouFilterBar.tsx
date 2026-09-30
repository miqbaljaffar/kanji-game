"use client";

import { BunpouCategory } from "@/types";
import clsx from "clsx";

interface BunpouFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedLevel: "ALL" | "N5" | "N4";
  onLevelChange: (lvl: "ALL" | "N5" | "N4") => void;
  selectedCategory: "ALL" | BunpouCategory;
  onCategoryChange: (cat: "ALL" | BunpouCategory) => void;
  totalResults: number;
}

const CATEGORIES: ("ALL" | BunpouCategory)[] = [
  "ALL", "Partikel", "Bentuk Kata Kerja", "Ungkapan & Keinginan",
  "Syarat & Perbandingan", "Sopan & Kehormatan",
];

export function BunpouFilterBar({
  searchQuery, onSearchChange,
  selectedLevel, onLevelChange,
  selectedCategory, onCategoryChange,
  totalResults,
}: BunpouFilterBarProps) {
  const hasActiveFilters = searchQuery !== "" || selectedLevel !== "ALL" || selectedCategory !== "ALL";

  return (
    <div className="rpg-box relative p-3.5 sm:p-5 mb-4 sm:mb-6 space-y-3">
      <span className="rpg-corner rpg-corner-tl" />
      <span className="rpg-corner rpg-corner-br" />

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-purple-400">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari Tata Bahasa, Rumus, Fungsi (cth: ～てください)..."
          className="w-full pl-9 pr-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-purple-100 placeholder-purple-600 outline-none transition-all"
          style={{
            background: "#0f0a1e",
            border: "2px solid #4c1d95",
            borderRadius: "4px",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "#4c1d95")}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rpg-btn text-purple-300 text-xs flex items-center justify-center cursor-pointer touch-manipulation"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0.5">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar touch-pan-x pb-1 sm:pb-0">

          {/* Level */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest mr-0.5"
              style={{ fontFamily: "var(--font-pixel)" }}>LV:</span>
            {(["ALL", "N5", "N4"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => onLevelChange(lvl)}
                className={clsx("px-2.5 py-1 text-[9px] font-black transition-all cursor-pointer touch-manipulation",
                  selectedLevel === lvl ? "rpg-btn-gold" : "rpg-btn")}
                style={{ fontFamily: "var(--font-pixel)", borderRadius: "3px" }}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-purple-800 shrink-0 hidden sm:block" />

          {/* Category */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest mr-0.5"
              style={{ fontFamily: "var(--font-pixel)" }}>KAT:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={clsx("px-2.5 py-1 text-[8px] font-black transition-all cursor-pointer shrink-0 touch-manipulation",
                  selectedCategory === cat ? "rpg-btn-gold" : "rpg-btn")}
                style={{ fontFamily: "var(--font-pixel)", borderRadius: "3px" }}
              >
                {cat === "ALL" ? "ALL" : cat.slice(0, 8)}
              </button>
            ))}
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 border-purple-800/40 pt-2 sm:pt-0">
          <span className="rpg-badge text-[8px]" style={{ fontFamily: "var(--font-pixel)" }}>
            {totalResults} POLA
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => { onSearchChange(""); onLevelChange("ALL"); onCategoryChange("ALL"); }}
              className="rpg-btn-red px-2.5 py-1 text-[8px] touch-manipulation"
              style={{ fontFamily: "var(--font-pixel)", borderRadius: "3px" }}
            >
              RESET
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
