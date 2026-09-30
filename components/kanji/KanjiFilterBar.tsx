"use client";

import clsx from "clsx";

interface KanjiFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedLevel: "ALL" | "N5" | "N4";
  onLevelChange: (lvl: "ALL" | "N5" | "N4") => void;
  selectedType: "ALL" | "SINGLE" | "COMPOUND";
  onTypeChange: (type: "ALL" | "SINGLE" | "COMPOUND") => void;
  totalResults: number;
}

export function KanjiFilterBar({
  searchQuery, onSearchChange,
  selectedLevel, onLevelChange,
  selectedType, onTypeChange,
  totalResults,
}: KanjiFilterBarProps) {
  const hasActiveFilters = searchQuery !== "" || selectedLevel !== "ALL" || selectedType !== "ALL";

  return (
    <div className="rpg-box relative p-3.5 sm:p-5 mb-4 sm:mb-6 space-y-3">
      <span className="rpg-corner rpg-corner-tl" />
      <span className="rpg-corner rpg-corner-br" />

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-purple-400 pointer-events-none">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari Kanji, Hiragana, Romaji, atau Arti..."
          className="w-full pl-9 pr-10 py-3 text-xs sm:text-sm font-bold text-purple-100 placeholder-purple-600 outline-none transition-all"
          style={{
            background: "#0f0a1e",
            border: "2px solid #4c1d95",
            borderRadius: "4px",
            minHeight: "44px",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "#4c1d95")}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rpg-btn text-purple-300 text-xs flex items-center justify-center cursor-pointer touch-manipulation"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 pt-0.5">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar touch-pan-x pb-1 sm:pb-0">

          {/* Level */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="text-[8px] font-black text-purple-400 uppercase tracking-widest mr-0.5 hidden xs:block"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              LV:
            </span>
            {(["ALL", "N5", "N4"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => onLevelChange(lvl)}
                className={clsx(
                  "px-3 py-2 text-[9px] font-black transition-all cursor-pointer touch-manipulation min-h-[36px]",
                  selectedLevel === lvl ? "rpg-btn-gold" : "rpg-btn"
                )}
                style={{ fontFamily: "var(--font-pixel)", borderRadius: "3px" }}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="h-5 w-px bg-purple-800 shrink-0 hidden sm:block" />

          {/* Type */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="text-[8px] font-black text-purple-400 uppercase tracking-widest mr-0.5 hidden xs:block"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              TIPE:
            </span>
            {([
              { id: "ALL",      label: "Semua" },
              { id: "SINGLE",   label: "1字"   },
              { id: "COMPOUND", label: "2+字"  },
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => onTypeChange(t.id)}
                className={clsx(
                  "px-3 py-2 text-[9px] font-black transition-all cursor-pointer touch-manipulation min-h-[36px]",
                  selectedType === t.id ? "rpg-btn-gold" : "rpg-btn"
                )}
                style={{ fontFamily: "var(--font-pixel)", borderRadius: "3px" }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 border-purple-800/40 pt-2 sm:pt-0">
          <span
            className="rpg-badge text-[8px]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {totalResults} KANJI
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => { onSearchChange(""); onLevelChange("ALL"); onTypeChange("ALL"); }}
              className="rpg-btn-red px-3 py-2 text-[8px] touch-manipulation min-h-[36px]"
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
