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
  "ALL",
  "Partikel",
  "Bentuk Kata Kerja",
  "Ungkapan & Keinginan",
  "Syarat & Perbandingan",
  "Sopan & Kehormatan",
];

export function BunpouFilterBar({
  searchQuery,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  totalResults,
}: BunpouFilterBarProps) {
  const hasActiveFilters = searchQuery !== "" || selectedLevel !== "ALL" || selectedCategory !== "ALL";

  return (
    <div className="bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-lg border-2 border-white/60 mb-4 sm:mb-8 space-y-3 sm:space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <span className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl text-slate-400">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari Tata Bahasa, Rumus, atau Fungsi (misal: ～てください, tolong, kudasai)..."
          className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-xl sm:rounded-2xl pl-10 sm:pl-12 pr-9 sm:pr-10 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-slate-800 placeholder-slate-400 outline-none transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-black flex items-center justify-center cursor-pointer transition-all active:scale-90 touch-manipulation"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Chips Horizontal Scroll Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0.5">
        
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar touch-pan-x pb-1 sm:pb-0">
          
          {/* Level Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wider mr-0.5">
              Level:
            </span>
            {[
              { id: "ALL", label: "Semua" },
              { id: "N5", label: "N5" },
              { id: "N4", label: "N4" },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => onLevelChange(lvl.id as "ALL" | "N5" | "N4")}
                className={clsx(
                  "px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-black transition-all cursor-pointer border active:scale-95 touch-manipulation",
                  selectedLevel === lvl.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
                )}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 shrink-0 hidden sm:block" />

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wider mr-0.5">
              Kategori:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={clsx(
                  "px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-black transition-all cursor-pointer border shrink-0 active:scale-95 touch-manipulation",
                  selectedCategory === cat
                    ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
                )}
              >
                {cat === "ALL" ? "Semua Kategori" : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
          <span className="text-[11px] sm:text-xs font-black text-slate-500 bg-slate-100 px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-200">
            Hasil: <strong className="text-blue-600">{totalResults}</strong> Tata Bahasa
          </span>

          {hasActiveFilters && (
            <button
              onClick={() => {
                onSearchChange("");
                onLevelChange("ALL");
                onCategoryChange("ALL");
              }}
              className="text-[11px] sm:text-xs font-black text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-red-200 transition-all cursor-pointer active:scale-95 touch-manipulation"
            >
              Reset
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
