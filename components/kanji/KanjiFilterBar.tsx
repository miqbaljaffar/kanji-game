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
  searchQuery,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  selectedType,
  onTypeChange,
  totalResults,
}: KanjiFilterBarProps) {
  const hasActiveFilters = searchQuery !== "" || selectedLevel !== "ALL" || selectedType !== "ALL";

  return (
    <div className="bg-white/85 backdrop-blur-md rounded-3xl p-5 shadow-lg border-2 border-white/60 mb-8 space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari Kanji, Hiragana, Romaji, atau Arti (misal: 電車, densha, kereta)..."
          className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-2xl pl-12 pr-10 py-3.5 text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400 outline-none transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-black flex items-center justify-center cursor-pointer transition-all"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Chips Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        
        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-1">
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
                "px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border",
                selectedLevel === lvl.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
              )}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Kanji Type Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-1">
            Tipe Kanji:
          </span>
          {[
            { id: "ALL", label: "Semua" },
            { id: "SINGLE", label: "1 Kanji" },
            { id: "COMPOUND", label: "2+ Kanji (Majemuk)" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => onTypeChange(t.id as "ALL" | "SINGLE" | "COMPOUND")}
              className={clsx(
                "px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border",
                selectedType === t.id
                  ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Result Counter & Clear */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-black text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            Ditemukan: <strong className="text-blue-600">{totalResults}</strong> Kanji
          </span>

          {hasActiveFilters && (
            <button
              onClick={() => {
                onSearchChange("");
                onLevelChange("ALL");
                onTypeChange("ALL");
              }}
              className="text-xs font-black text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl border border-red-200 transition-all cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
