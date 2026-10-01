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
    <div
      className="relative p-3.5 sm:p-5 mb-4 sm:mb-6 space-y-3"
      style={{
        background: "#ffffff",
        border: "2px solid #e5e7eb",
        borderBottom: "4px solid #d1d5db",
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-slate-400 pointer-events-none">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari Kanji, Hiragana, Romaji, atau Arti..."
          aria-label="Cari kanji"
          className="w-full pl-9 pr-10 py-3 text-xs sm:text-sm font-bold text-slate-700 placeholder-slate-300 outline-none transition-all"
          style={{
            background: "#f9fafb",
            border: "2px solid #e5e7eb",
            borderRadius: 10,
            minHeight: "44px",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#1cb0f6")}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "#e5e7eb")}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer touch-manipulation transition-colors"
            style={{
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
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
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-0.5 hidden xs:block">
              LV:
            </span>
            {(["ALL", "N5", "N4"] as const).map((lvl) => {
              const active = selectedLevel === lvl;
              const accentMap = { ALL: "#1cb0f6", N5: "#58cc02", N4: "#1cb0f6" };
              const accent = accentMap[lvl];
              return (
                <button
                  key={lvl}
                  onClick={() => onLevelChange(lvl)}
                  className="px-3 py-2 text-[9px] font-black transition-all cursor-pointer touch-manipulation min-h-[36px]"
                  style={{
                    background: active ? accent : "#f3f4f6",
                    border: `2px solid ${active ? accent : "#e5e7eb"}`,
                    borderBottom: `3px solid ${active ? (accent === "#58cc02" ? "#46a302" : "#0490c8") : "#d1d5db"}`,
                    borderRadius: 8,
                    color: active ? "#ffffff" : "#6b7280",
                  }}
                >
                  {lvl}
                </button>
              );
            })}
          </div>

          <div className="h-5 w-px bg-gray-200 shrink-0 hidden sm:block" />

          {/* Type */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-0.5 hidden xs:block">
              TIPE:
            </span>
            {([
              { id: "ALL",      label: "Semua", accent: "#1cb0f6", bottom: "#0490c8" },
              { id: "SINGLE",   label: "1字",   accent: "#ffc800", bottom: "#c49800" },
              { id: "COMPOUND", label: "2+字",  accent: "#ce82ff", bottom: "#9333ea" },
            ] as const).map((t) => {
              const active = selectedType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onTypeChange(t.id)}
                  className="px-3 py-2 text-[9px] font-black transition-all cursor-pointer touch-manipulation min-h-[36px]"
                  style={{
                    background: active ? t.accent : "#f3f4f6",
                    border: `2px solid ${active ? t.accent : "#e5e7eb"}`,
                    borderBottom: `3px solid ${active ? t.bottom : "#d1d5db"}`,
                    borderRadius: 8,
                    color: active ? "#ffffff" : "#6b7280",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 border-gray-100 pt-2 sm:pt-0">
          <span
            className="text-[8px] font-black px-3 py-1.5 rounded-full"
            style={{ background: "#d7ffb8", color: "#2a7000", border: "1px solid #58cc02" }}
          >
            {totalResults} KANJI
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => { onSearchChange(""); onLevelChange("ALL"); onTypeChange("ALL"); }}
              className="rpg-btn-red px-3 py-2 text-[8px] touch-manipulation min-h-[36px] font-black"
            >
              RESET
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
