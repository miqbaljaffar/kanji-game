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

export function BunpouDictionaryPage() {
  const [searchQuery,       setSearchQuery]       = useState("");
  const [selectedLevel,     setSelectedLevel]     = useState<"ALL" | "N5" | "N4" | "N3">("ALL");
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
    n3Count:       bunpouDictionaryData.filter((b) => b.level === "N3").length,
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
              📝 Ensiklopedia Bunpou
            </h1>
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-500">
              Rumus &amp; Tata Bahasa · JLPT N5 / N4 / N3
            </p>
          </div>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {[
            { label: "Total Grammar",  val: stats.total,         icon: "📝", bg: "#ffffff", border: "#e5e7eb",  bottom: "#d1d5db",  text: "#3c3c3c" },
            { label: "N5",             val: stats.n5Count,       icon: "🟢", bg: "#d7ffb8", border: "#58cc02",  bottom: "#46a302",  text: "#2a7000" },
            { label: "N4",             val: stats.n4Count,       icon: "🔵", bg: "#ddf4ff", border: "#1cb0f6",  bottom: "#0490c8",  text: "#0c6b9e" },
            { label: "Partikel",       val: stats.particleCount, icon: "🔖", bg: "#f5e6ff", border: "#ce82ff",  bottom: "#9333ea",  text: "#6b21a8" },
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
            <h3 className="text-sm font-black text-slate-700">Bunpou Tidak Ditemukan</h3>
            <p className="text-xs font-bold text-slate-400">
              Coba kata kunci lain atau sesuaikan filter.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedLevel("ALL"); setSelectedCategory("ALL"); }}
              className="rpg-btn-gold px-5 py-2.5 touch-manipulation font-black text-xs"
            >
              Reset Filter
            </button>
          </div>
        )}

        <BunpouDetailModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
      </div>
    </div>
  );
}
