"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { bunpouDictionaryData } from "@/data/bunpouDictionary";
import { BunpouCategory, BunpouDictionaryEntry } from "@/types";
import { BunpouCard } from "@/components/bunpou/BunpouCard";
import { BunpouFilterBar } from "@/components/bunpou/BunpouFilterBar";
import { BunpouDetailModal } from "@/components/bunpou/BunpouDetailModal";
import { BunpouPagination } from "@/components/bunpou/BunpouPagination";
import { GameBackground } from "@/components/Background";

export default function BunpouDictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | "N5" | "N4">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | BunpouCategory>("ALL");
  const [activeEntry, setActiveEntry] = useState<BunpouDictionaryEntry | null>(null);

  // Scroll Container Ref
  const containerRef = useRef<HTMLDivElement>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLevel, selectedCategory, itemsPerPage]);

  // Statistics calculation
  const stats = useMemo(() => {
    const total = bunpouDictionaryData.length;
    const n5Count = bunpouDictionaryData.filter((b) => b.level === "N5").length;
    const n4Count = bunpouDictionaryData.filter((b) => b.level === "N4").length;
    const particleCount = bunpouDictionaryData.filter((b) => b.category === "Partikel").length;

    return { total, n5Count, n4Count, particleCount };
  }, []);

  // Filtered Bunpou list computation
  const filteredBunpou = useMemo(() => {
    return bunpouDictionaryData.filter((entry) => {
      // Level filter
      if (selectedLevel !== "ALL" && entry.level !== selectedLevel) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "ALL" && entry.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesPattern = entry.pattern.toLowerCase().includes(q);
        const matchesRomaji = entry.romajiPattern.toLowerCase().includes(q);
        const matchesMeaning = entry.meaning.toLowerCase().includes(q);
        const matchesFormula = entry.formula.toLowerCase().includes(q);
        const matchesExplanation = entry.explanation.toLowerCase().includes(q);

        return (
          matchesPattern ||
          matchesRomaji ||
          matchesMeaning ||
          matchesFormula ||
          matchesExplanation
        );
      }

      return true;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  // Paginated data slice
  const totalPages = Math.ceil(filteredBunpou.length / itemsPerPage);
  const paginatedBunpou = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBunpou.slice(start, start + itemsPerPage);
  }, [filteredBunpou, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-y-auto overflow-x-hidden bg-[#87CEEB] text-slate-800 font-body pb-16"
    >
      {/* Background awan ceria */}
      <GameBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6">
        
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-6 bg-white/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-white/60">
          <Link
            href="/"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-600 px-4 py-2.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm shadow-[0_4px_0_#93c5fd] active:shadow-none active:translate-y-1 transition-all border-2 border-blue-200 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            ⬅️ Kembali ke Home
          </Link>

          <div className="text-center sm:text-right">
            <h1 className="text-lg sm:text-2xl font-black text-slate-800 tracking-tight font-jp">
              📝 Ensiklopedia Tata Bahasa Bunpou N5-N4
            </h1>
            <p className="text-[11px] sm:text-xs font-bold text-slate-500">
              Rumus Pembentukan, Penjelasan Fungsi, & Contoh Kalimat Interaktif
            </p>
          </div>
        </div>

        {/* Quick Stats Header Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
          {[
            { label: "Total Tata Bahasa", val: stats.total, icon: "📝", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Level N5", val: stats.n5Count, icon: "🟢", color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Level N4", val: stats.n4Count, icon: "🔵", color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Partikel Dasar", val: stats.particleCount, icon: "🔖", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-white/60 flex items-center gap-2.5 sm:gap-3"
            >
              <span className="text-xl sm:text-3xl shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <div className={`text-base sm:text-2xl font-black ${item.color} leading-none truncate`}>
                  {item.val}
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Search Bar */}
        <BunpouFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalResults={filteredBunpou.length}
        />

        {/* Bunpou Cards Grid */}
        {paginatedBunpou.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
              {paginatedBunpou.map((entry) => (
                <BunpouCard
                  key={entry.id}
                  entry={entry}
                  onSelect={(selected) => setActiveEntry(selected)}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <BunpouPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredBunpou.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={(size) => setItemsPerPage(size)}
            />
          </>
        ) : (
          /* Empty Search State */
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-10 text-center shadow-lg border-2 border-white/60 my-10 space-y-4 max-w-md mx-auto">
            <div className="text-5xl">🔍</div>
            <h3 className="text-lg font-black text-slate-800">
              Tata Bahasa Tidak Ditemukan
            </h3>
            <p className="text-xs font-bold text-slate-500">
              Coba gunakan kata kunci lain (misal: "～てください", "tolong", "karena") atau sesuaikan filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("ALL");
                setSelectedCategory("ALL");
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-md transition-all cursor-pointer active:scale-95 touch-manipulation"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* Detail Modal */}
        <BunpouDetailModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />

      </div>
    </div>
  );
}
