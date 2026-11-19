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
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import clsx from "clsx";

const QUICK_STATS = [
  { key: "total",    label: "Total Grammar", icon: "📝", cls: "dm-panel",       textCls: "dm-text-primary"   },
  { key: "n5",       label: "N5",            icon: "🟢", cls: "lvl-N5",         textCls: "lvl-text-N5"       },
  { key: "n4",       label: "N4",            icon: "🔵", cls: "lvl-N4",         textCls: "lvl-text-N4"       },
  { key: "particle", label: "Partikel",      icon: "🔖", cls: "result-combo",   textCls: "result-text-combo" },
] as const;

export function BunpouDictionaryPage() {
  const [searchQuery,      setSearchQuery]      = useState("");
  const [selectedLevel,    setSelectedLevel]    = useState<"ALL" | "N5" | "N4" | "N3">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | BunpouCategory>("ALL");
  const [activeEntry,      setActiveEntry]      = useState<BunpouDictionaryEntry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage,      setCurrentPage]      = useState(1);
  const [itemsPerPage,     setItemsPerPage]     = useState(12);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedLevel, selectedCategory, itemsPerPage]);

  const stats = useMemo(() => ({
    total:    bunpouDictionaryData.length,
    n5:       bunpouDictionaryData.filter((b) => b.level === "N5").length,
    n4:       bunpouDictionaryData.filter((b) => b.level === "N4").length,
    particle: bunpouDictionaryData.filter((b) => b.category === "Partikel").length,
  }), []);

  const filteredBunpou = useMemo(() => {
    return bunpouDictionaryData.filter((entry) => {
      if (selectedLevel    !== "ALL" && entry.level    !== selectedLevel)    return false;
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
      className="relative h-dvh w-full overflow-y-auto overflow-x-hidden font-body pb-16 rpg-scroll"
      data-page-bg
    >
      <GameBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 xl:px-8 pt-4 sm:pt-6" aria-label="Ensiklopedia Bunpou">

        {/* ── Navigation Bar ── */}
        <nav
          aria-label="Navigasi halaman"
          className="sticky top-0 z-30 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 p-3 sm:p-4 dm-game-header"
        >
          <Link
            href="/"
            className="rpg-btn flex items-center gap-1.5 px-3 sm:px-5 py-2.5 touch-manipulation font-black text-sm shrink-0"
            aria-label="Kembali ke halaman utama KanjiMocha"
          >
            <span aria-hidden="true">◀</span>
            <span className="hidden xs:inline">Kembali</span>
          </Link>

          <div className="flex-1 text-center min-w-0">
            <h1 className="text-sm sm:text-lg font-black dm-text-primary tracking-tight leading-tight truncate">
              📝 Ensiklopedia Bunpou
            </h1>
            <p className="text-[11px] sm:text-xs font-bold dm-text-secondary hidden xs:block">
              Rumus &amp; Tata Bahasa · JLPT N5 / N4 / N3
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
            {/* 1 col mobile → 2 col sm → 3 col md → 4 col xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3">
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
          <div className="dm-panel relative p-8 sm:p-10 text-center my-10 max-w-md mx-auto space-y-4"
            style={{ borderRadius: 16, border: "2px solid", borderBottom: "4px solid" }}>
            <div className="text-4xl" aria-hidden="true">🔍</div>
            <h3 className="text-sm font-black dm-text-primary">Bunpou Tidak Ditemukan</h3>
            <p className="text-xs font-bold dm-text-secondary">
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
      </main>
    </div>
  );
}
