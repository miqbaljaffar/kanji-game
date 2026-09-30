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

export default function KanjiDictionaryPage() {
  const [searchQuery,    setSearchQuery]    = useState("");
  const [selectedLevel,  setSelectedLevel]  = useState<"ALL" | "N5" | "N4">("ALL");
  const [selectedType,   setSelectedType]   = useState<"ALL" | "SINGLE" | "COMPOUND">("ALL");
  const [activeEntry,    setActiveEntry]    = useState<KanjiDictionaryEntry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage,    setCurrentPage]    = useState(1);
  const [itemsPerPage,   setItemsPerPage]   = useState(12);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedLevel, selectedType, itemsPerPage]);

  const stats = useMemo(() => ({
    total:         kanjiDictionaryData.length,
    n5Count:       kanjiDictionaryData.filter((k) => k.level === "N5").length,
    n4Count:       kanjiDictionaryData.filter((k) => k.level === "N4").length,
    compoundCount: kanjiDictionaryData.filter((k) => k.kanjiCount > 1).length,
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
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-y-auto overflow-x-hidden text-purple-100 font-body pb-16 rpg-scroll"
      style={{ background: "#0f0a1e" }}
    >
      <GameBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6">

        {/* ── Navigation Bar ── */}
        <div className="rpg-box flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-5 p-3.5 sm:p-4 relative">
          <span className="rpg-corner rpg-corner-tl" />
          <span className="rpg-corner rpg-corner-br" />

          <Link
            href="/"
            className="rpg-btn w-full sm:w-auto px-4 py-2.5 flex items-center justify-center gap-2 touch-manipulation text-xs sm:text-sm"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "9px" }}
          >
            ◀ KEMBALI
          </Link>

          <div className="text-center sm:text-right">
            <h1
              className="text-sm sm:text-lg font-black text-yellow-300 tracking-tight"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              📚 ENSIKLOPEDIA KANJI
            </h1>
            <p className="text-[9px] sm:text-[10px] font-bold text-purple-400">
              Kanji 1 Karakter &amp; Majemuk (2+) · N5 / N4
            </p>
          </div>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {[
            { label: "Total Kanji",     val: stats.total,         icon: "📚", border: "#7c3aed" },
            { label: "N5",              val: stats.n5Count,       icon: "🟢", border: "#4ade80" },
            { label: "N4",              val: stats.n4Count,       icon: "🔵", border: "#60a5fa" },
            { label: "Majemuk",         val: stats.compoundCount, icon: "🧩", border: "#a78bfa" },
          ].map((item) => (
            <div
              key={item.label}
              className="rpg-box relative flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4"
              style={{ borderColor: item.border }}
            >
              <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <div
                  className="text-base sm:text-xl font-black text-yellow-300 leading-none"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  {item.val}
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold text-purple-400 uppercase tracking-wider mt-0.5 leading-tight">
                  {item.label}
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
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
          <div className="rpg-box relative p-10 text-center my-10 max-w-md mx-auto space-y-4">
            <span className="rpg-corner rpg-corner-tl" />
            <span className="rpg-corner rpg-corner-br" />
            <div className="text-4xl">🔍</div>
            <h3 className="text-sm font-black text-yellow-300" style={{ fontFamily: "var(--font-pixel)" }}>
              KANJI NOT FOUND
            </h3>
            <p className="text-xs font-bold text-purple-300">
              Coba kata kunci lain atau sesuaikan filter level.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedLevel("ALL"); setSelectedType("ALL"); }}
              className="rpg-btn-gold px-5 py-2.5 text-xs touch-manipulation"
              style={{ fontFamily: "var(--font-pixel)", fontSize: "9px" }}
            >
              RESET FILTER
            </button>
          </div>
        )}

        <KanjiDetailModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      </div>
    </div>
  );
}
