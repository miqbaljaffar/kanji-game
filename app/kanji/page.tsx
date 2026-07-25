"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { kanjiDictionaryData } from "@/data/kanjiDictionary";
import { KanjiDictionaryEntry } from "@/types";
import { KanjiCard } from "@/components/kanji/KanjiCard";
import { KanjiFilterBar } from "@/components/kanji/KanjiFilterBar";
import { KanjiDetailModal } from "@/components/kanji/KanjiDetailModal";
import { GameBackground } from "@/components/Background";

export default function KanjiDictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | "N5" | "N4">("ALL");
  const [selectedType, setSelectedType] = useState<"ALL" | "SINGLE" | "COMPOUND">("ALL");
  const [activeEntry, setActiveEntry] = useState<KanjiDictionaryEntry | null>(null);

  // Statistics calculation
  const stats = useMemo(() => {
    const total = kanjiDictionaryData.length;
    const n5Count = kanjiDictionaryData.filter((k) => k.level === "N5").length;
    const n4Count = kanjiDictionaryData.filter((k) => k.level === "N4").length;
    const singleCount = kanjiDictionaryData.filter((k) => k.kanjiCount === 1).length;
    const compoundCount = kanjiDictionaryData.filter((k) => k.kanjiCount > 1).length;

    return { total, n5Count, n4Count, singleCount, compoundCount };
  }, []);

  // Filtered Kanji list computation
  const filteredKanji = useMemo(() => {
    return kanjiDictionaryData.filter((entry) => {
      // Level filter
      if (selectedLevel !== "ALL" && entry.level !== selectedLevel) {
        return false;
      }

      // Type filter
      if (selectedType === "SINGLE" && entry.kanjiCount !== 1) return false;
      if (selectedType === "COMPOUND" && entry.kanjiCount <= 1) return false;

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesKanji = entry.kanji.includes(q);
        const matchesHiragana = entry.hiragana.toLowerCase().includes(q);
        const matchesRomaji = entry.romaji.toLowerCase().includes(q);
        const matchesArti = entry.arti.toLowerCase().includes(q);
        const matchesOnyomi = entry.onyomi?.toLowerCase().includes(q) || false;
        const matchesKunyomi = entry.kunyomi?.toLowerCase().includes(q) || false;

        return (
          matchesKanji ||
          matchesHiragana ||
          matchesRomaji ||
          matchesArti ||
          matchesOnyomi ||
          matchesKunyomi
        );
      }

      return true;
    });
  }, [searchQuery, selectedLevel, selectedType]);

  return (
    <div className="relative min-h-dvh w-full overflow-y-auto overflow-x-hidden bg-[#87CEEB] text-slate-800 font-body pb-16">
      {/* Background awan ceria */}
      <GameBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-lg border-2 border-white/60">
          <Link
            href="/"
            className="bg-white hover:bg-slate-100 text-blue-600 px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-[0_4px_0_#93c5fd] active:shadow-none active:translate-y-1 transition-all border-2 border-blue-200 flex items-center gap-2 cursor-pointer"
          >
            ⬅️ Kembali ke Home
          </Link>

          <div className="text-center sm:text-right">
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight font-jp">
              📚 Ensiklopedia & Kamus Kanji N5-N4
            </h1>
            <p className="text-xs font-bold text-slate-500">
              Penjelasan Lengkap Kanji 1 Karakter & Kanji Majemuk (2+ Karakter)
            </p>
          </div>
        </div>

        {/* Quick Stats Header Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {[
            { label: "Total Kanji", val: stats.total, icon: "📚", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Level N5", val: stats.n5Count, icon: "🟢", color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Level N4", val: stats.n4Count, icon: "🔵", color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Majemuk (2+ Kanji)", val: stats.compoundCount, icon: "🧩", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/85 backdrop-blur-md rounded-2xl p-4 shadow-md border-2 border-white/60 flex items-center gap-3"
            >
              <span className="text-2xl sm:text-3xl">{item.icon}</span>
              <div>
                <div className={`text-lg sm:text-2xl font-black ${item.color} leading-none`}>
                  {item.val}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Search Bar */}
        <KanjiFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          totalResults={filteredKanji.length}
        />

        {/* Kanji Cards Grid */}
        {filteredKanji.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredKanji.map((entry) => (
              <KanjiCard
                key={entry.id}
                entry={entry}
                onSelect={(selected) => setActiveEntry(selected)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-10 text-center shadow-lg border-2 border-white/60 my-10 space-y-4 max-w-md mx-auto">
            <div className="text-5xl">🔍</div>
            <h3 className="text-lg font-black text-slate-800">
              Kanji Tidak Ditemukan
            </h3>
            <p className="text-xs font-bold text-slate-500">
              Coba gunakan kata kunci lain (misal: "電車", "densha", "kereta") atau sesuaikan filter level N5/N4.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("ALL");
                setSelectedType("ALL");
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* Detail Modal */}
        <KanjiDetailModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />

      </div>
    </div>
  );
}
