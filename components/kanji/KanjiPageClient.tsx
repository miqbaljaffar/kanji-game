"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { kanjiDictionaryData } from "@/data/kanjiDictionary";
import { KanjiDictionaryEntry } from "@/types";
import { KanjiCard } from "@/components/kanji/KanjiCard";
import { KanjiFilterBar } from "@/components/kanji/KanjiFilterBar";
import { KanjiDetailModal } from "@/components/kanji/KanjiDetailModal";
import { KanjiPagination } from "@/components/kanji/KanjiPagination";
import { GameBackground } from "@/components/Background";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import clsx from "clsx";

/* stat configs — reuse CSS classes dari globals.css */
const QUICK_STATS = [
  { key: "total",    label: "Total Kanji", icon: "📚", cls: "dm-panel",       textCls: "dm-text-primary"   },
  { key: "n5",       label: "N5",          icon: "🟢", cls: "lvl-N5",         textCls: "lvl-text-N5"       },
  { key: "n4",       label: "N4",          icon: "🔵", cls: "lvl-N4",         textCls: "lvl-text-N4"       },
  { key: "compound", label: "Majemuk",     icon: "🧩", cls: "result-combo",   textCls: "result-text-combo" },
] as const;

export function KanjiDictionaryPage() {
  const [searchQuery,   setSearchQuery]   = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | "N5" | "N4" | "N3">("ALL");
  const [selectedType,  setSelectedType]  = useState<"ALL" | "SINGLE" | "COMPOUND">("ALL");
  const [activeEntry,   setActiveEntry]   = useState<KanjiDictionaryEntry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage,   setCurrentPage]   = useState(1);
  const [itemsPerPage,  setItemsPerPage]  = useState(12);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedLevel, selectedType, itemsPerPage]);

  const stats = useMemo(() => ({
    total:    kanjiDictionaryData.length,
    n5:       kanjiDictionaryData.filter((k) => k.level === "N5").length,
    n4:       kanjiDictionaryData.filter((k) => k.level === "N4").length,
    n3:       kanjiDictionaryData.filter((k) => k.level === "N3").length,
    compound: kanjiDictionaryData.filter((k) => k.kanjiCount > 1).length,
  }), []);

  const filteredKanji = useMemo(() => {
    return kanjiDictionaryData.filter((entry) => {
      if (selectedLevel !== "ALL" && entry.level !== selectedLevel) return false;
      if (selectedType === "SINGLE"   && entry.kanjiCount !== 1) return false;
      if (selectedType === "COMPOUND" && entry.kanjiCount <= 1)  return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        return (
          entry.kanji.includes(q) ||
          entry.hiragana.toLowerCase().includes(q) ||
          entry.romaji.toLowerCase().includes(q) ||
          entry.arti.toLowerCase().includes(q) ||
          (entry.onyomi?.toLowerCase().includes(q) ?? false) ||
          (entry.kunyomi?.toLowerCase().includes(q) ?? false)
        );
      }
      return true;
    });
  }, [searchQuery, selectedLevel, selectedType]);

  const totalPages    = Math.ceil(filteredKanji.length / itemsPerPage);
  const paginatedKanji = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredKanji.slice(start, start + itemsPerPage);
  }, [filteredKanji, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /* wrapper — background dari CSS var, bukan hardcoded */
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-y-auto overflow-x-hidden font-body pb-16 rpg-scroll"
      data-page-bg
    >
      <GameBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 xl:px-8 pt-4 sm:pt-6" aria-label="Ensiklopedia Kanji">

        {/* ── Navigation Bar ── */}
        <nav
          aria-label="Navigasi halaman"
          className="sticky top-0 z-30 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 p-3 sm:p-4 dm-game-header"
        >
          {/* Kembali */}
          <Link
            href="/"
            className="rpg-btn flex items-center gap-1.5 px-3 sm:px-5 py-2.5 touch-manipulation font-black text-sm shrink-0"
            aria-label="Kembali ke halaman utama KanjiMocha"
          >
            <span aria-hidden="true">◀</span>
            <span className="hidden xs:inline">Kembali</span>
          </Link>

          {/* Title — grow */}
          <div className="flex-1 text-center min-w-0">
            <h1 className="text-sm sm:text-lg font-black dm-text-primary tracking-tight leading-tight truncate">
              📚 Ensiklopedia Kanji
            </h1>
            <p className="text-[11px] sm:text-xs font-bold dm-text-secondary hidden xs:block">
              Kanji 1 Karakter &amp; Majemuk (2+) · N5 / N4 / N3
            </p>
          </div>

          <DarkModeToggle />
        </nav>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {QUICK_STATS.map((s) => (
            <div
              key={s.key}
              className={clsx("relative flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4", s.cls)}
              style={{ borderRadius: 14, border: "2px solid", borderBottom: "4px solid", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}
            >
              <span className="text-lg sm:text-2xl shrink-0" aria-hidden="true">{s.icon}</span>
              <div className="min-w-0">
                <div className={clsx("text-base sm:text-xl font-black leading-none tabular-nums", s.textCls)}>
                  {stats[s.key as keyof typeof stats]}
                </div>
                <div className={clsx("text-[11px] font-bold uppercase tracking-wider mt-0.5 leading-tight", s.textCls)} style={{ opacity: 0.7 }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filter Bar ── */}
        <KanjiFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          totalResults={filteredKanji.length}
        />

        {/* ── Cards Grid ── */}
        {paginatedKanji.length > 0 ? (
          <>
            {/* 2 col mobile → 3 col md → 4 col lg → 5 col xl → 6 col 2xl */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3">
              {paginatedKanji.map((entry, idx) => (
                <div key={entry.id} className={`stagger-${Math.min((idx % 12) + 1, 12)}`}>
                  <KanjiCard entry={entry} onSelect={setActiveEntry} />
                </div>
              ))}
            </div>
            <KanjiPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredKanji.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={setItemsPerPage}
            />
          </>
        ) : (
          <div className="dm-panel relative p-8 sm:p-10 text-center my-10 max-w-md mx-auto space-y-4"
            style={{ borderRadius: 16, border: "2px solid", borderBottom: "4px solid" }}>
            <div className="text-4xl" aria-hidden="true">🔍</div>
            <h3 className="text-sm font-black dm-text-primary">Kanji Tidak Ditemukan</h3>
            <p className="text-xs font-bold dm-text-secondary">
              Coba kata kunci lain atau sesuaikan filter level.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedLevel("ALL"); setSelectedType("ALL"); }}
              className="rpg-btn-gold px-5 py-2.5 text-xs touch-manipulation font-black"
            >
              Reset Filter
            </button>
          </div>
        )}

        <KanjiDetailModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      </main>
    </div>
  );
}
