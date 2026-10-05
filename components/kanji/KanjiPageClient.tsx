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

export function KanjiDictionaryPage() {
  const [searchQuery,    setSearchQuery]    = useState("");
  const [selectedLevel,  setSelectedLevel]  = useState<"ALL" | "N5" | "N4" | "N3">("ALL");
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
    n3Count:       kanjiDictionaryData.filter((k) => k.level === "N3").length,
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
      className="relative h-dvh w-full overflow-y-auto overflow-x-hidden text-slate-800 font-body pb-16 rpg-scroll"
      style={{ background: "#f7f7f7" }}
    >
      <GameBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6">

        {/* ── Navigation Bar ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-5 p-3.5 sm:p-4"
          style={{
            background: "#ffffff",
            border: "2px solid #e5e7eb",
            borderBottom: "4px solid #d1d5db",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Link
            href="/"
            className="rpg-btn w-full sm:w-auto px-4 py-2.5 flex items-center justify-center gap-2 touch-manipulation font-black text-xs"
          >
            ◀ Kembali
          </Link>

          <div className="text-center sm:text-right">
            <h1 className="text-sm sm:text-lg font-black text-slate-800 tracking-tight">
              📚 Ensiklopedia Kanji
            </h1>
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-500">
              Kanji 1 Karakter &amp; Majemuk (2+) · N5 / N4 / N3
            </p>
          </div>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {[
            { label: "Total Kanji", val: stats.total,         icon: "📚", bg: "#ffffff", border: "#e5e7eb",  bottom: "#d1d5db",  text: "#3c3c3c" },
            { label: "N5",          val: stats.n5Count,       icon: "🟢", bg: "#d7ffb8", border: "#58cc02",  bottom: "#46a302",  text: "#2a7000" },
            { label: "N4",          val: stats.n4Count,       icon: "🔵", bg: "#ddf4ff", border: "#1cb0f6",  bottom: "#0490c8",  text: "#0c6b9e" },
            { label: "Majemuk",     val: stats.compoundCount, icon: "🧩", bg: "#f5e6ff", border: "#ce82ff",  bottom: "#9333ea",  text: "#6b21a8" },
          ].map((item) => (
            <div
              key={item.label}
              className="relative flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4"
              style={{
                background: item.bg,
                border: `2px solid ${item.border}`,
                borderBottom: `4px solid ${item.bottom}`,
                borderRadius: 14,
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <div className="text-base sm:text-xl font-black leading-none" style={{ color: item.text }}>
                  {item.val}
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider mt-0.5 leading-tight" style={{ color: item.text, opacity: 0.7 }}>
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
          <div
            className="relative p-10 text-center my-10 max-w-md mx-auto space-y-4"
            style={{
              background: "#ffffff",
              border: "2px solid #e5e7eb",
              borderBottom: "4px solid #d1d5db",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <div className="text-4xl">🔍</div>
            <h3 className="text-sm font-black text-slate-700">Kanji Tidak Ditemukan</h3>
            <p className="text-xs font-bold text-slate-400">
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
      </div>
    </div>
  );
}
