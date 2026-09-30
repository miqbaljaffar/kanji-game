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
  const [searchQuery,       setSearchQuery]       = useState("");
  const [selectedLevel,     setSelectedLevel]     = useState<"ALL" | "N5" | "N4">("ALL");
  const [selectedCategory,  setSelectedCategory]  = useState<"ALL" | BunpouCategory>("ALL");
  const [activeEntry,       setActiveEntry]       = useState<BunpouDictionaryEntry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage,       setCurrentPage]       = useState(1);
  const [itemsPerPage,      setItemsPerPage]      = useState(12);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedLevel, selectedCategory, itemsPerPage]);

  const stats = useMemo(() => ({
    total:         bunpouDictionaryData.length,
    n5Count:       bunpouDictionaryData.filter((b) => b.level === "N5").length,
    n4Count:       bunpouDictionaryData.filter((b) => b.level === "N4").length,
    particleCount: bunpouDictionaryData.filter((b) => b.category === "Partikel").length,
  }), []);

  const filteredBunpou = useMemo(() => {
    return bunpouDictionaryData.filter((entry) => {
      if (selectedLevel   !== "ALL" && entry.level    !== selectedLevel)   return false;
      if (selectedCategory !== "ALL" && entry.category !== selectedCategory) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        return (
          entry.pattern.toLowerCase().includes(q) ||
          entry.romajiPattern.toLowerCase().includes(q) ||
          entry.meaning.toLowerCase().includes(q) ||
          entry.formula.toLowerCase().includes(q) ||
          entry.explanation.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  const totalPages     = Math.ceil(filteredBunpou.length / itemsPerPage);
  const paginatedBunpou = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBunpou.slice(start, start + itemsPerPage);
  }, [filteredBunpou, currentPage, itemsPerPage]);

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
            className="rpg-btn w-full sm:w-auto px-4 py-2.5 flex items-center justify-center gap-2 touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "9px" }}
          >
            ◀ KEMBALI
          </Link>

          <div className="text-center sm:text-right">
            <h1
              className="text-sm sm:text-lg font-black text-yellow-300 tracking-tight"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              📝 ENSIKLOPEDIA BUNPOU
            </h1>
            <p className="text-[9px] sm:text-[10px] font-bold text-purple-400">
              Rumus &amp; Tata Bahasa · N5 / N4 · JFT Basic A2
            </p>
          </div>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {[
            { label: "Total Grammar",  val: stats.total,         icon: "📝", border: "#7c3aed" },
            { label: "Level N5",       val: stats.n5Count,       icon: "🟢", border: "#4ade80" },
            { label: "Level N4",       val: stats.n4Count,       icon: "🔵", border: "#60a5fa" },
            { label: "Partikel",       val: stats.particleCount, icon: "🔖", border: "#a78bfa" },
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
                <div className="text-[8px] sm:text-[9px] font-bold text-purple-400 uppercase tracking-wider mt-0.5 truncate">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filter Bar ── */}
        <BunpouFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalResults={filteredBunpou.length}
        />

        {/* ── Cards Grid ── */}
        {paginatedBunpou.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
              {paginatedBunpou.map((entry, idx) => (
                <div key={entry.id} className={`stagger-${Math.min((idx % 12) + 1, 12)}`}>
                  <BunpouCard entry={entry} onSelect={setActiveEntry} />
                </div>
              ))}
            </div>
            <BunpouPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredBunpou.length}
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
              BUNPOU NOT FOUND
            </h3>
            <p className="text-xs font-bold text-purple-300">
              Coba kata kunci lain atau sesuaikan filter.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedLevel("ALL"); setSelectedCategory("ALL"); }}
              className="rpg-btn-gold px-5 py-2.5 touch-manipulation"
              style={{ fontFamily: "var(--font-pixel)", fontSize: "9px" }}
            >
              RESET FILTER
            </button>
          </div>
        )}

        <BunpouDetailModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      </div>
    </div>
  );
}
