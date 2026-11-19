"use client";
import { useState } from "react";
import { GameMode, Difficulty, JlptLevel } from "@/types";
import { kanjiData } from "@/data/kanji";
import { kanaData } from "@/data/kana";
import { bunpouData } from "@/data/bunpou";
import Link from "next/link";
import clsx from "clsx";
import type { StoredStats } from "@/hooks/useGameStats";

interface HomeScreenProps {
  onStart: (level: JlptLevel, mode: GameMode, difficulty: Difficulty) => void;
  storedStats?: StoredStats;
}

/* ── Level configs ── */
const LEVELS = [
  {
    id: "N5" as JlptLevel, label: "JLPT N5", icon: "🟢",
    desc: "Level Dasar", sub: "Kosakata & Grammar Pemula",
    cls: "lvl-N5", textCls: "lvl-text-N5",
  },
  {
    id: "N4" as JlptLevel, label: "JLPT N4", icon: "🔵",
    desc: "Level Menengah", sub: "Kosakata & Grammar Lanjut",
    cls: "lvl-N4", textCls: "lvl-text-N4",
  },
  {
    id: "N3" as JlptLevel, label: "JLPT N3", icon: "🟣",
    desc: "Level Lanjut", sub: "Kosakata & Grammar Intermediate",
    cls: "lvl-N3", textCls: "lvl-text-N3",
  },
];

/* ── Mode configs ── */
const MODES = [
  { id: "kanji-to-arti"      as GameMode, label: "漢字 → Arti",        desc: "Tebak Artinya",    icon: "📖", cls: "mode-0" },
  { id: "arti-to-kanji"      as GameMode, label: "Arti → 漢字",        desc: "Pilih Kanji",      icon: "🎯", cls: "mode-1" },
  { id: "kanji-to-hiragana"  as GameMode, label: "漢字 → ひら",        desc: "Cara Baca",        icon: "🗣️", cls: "mode-2" },
  { id: "hiragana-to-arti"   as GameMode, label: "ひら → Arti",        desc: "Dari Hiragana",    icon: "✨", cls: "mode-3" },
  { id: "hiragana-to-romaji" as GameMode, label: "Romaji → ひら",      desc: "Tebak Hiragana",   icon: "🟣", cls: "mode-4" },
  { id: "katakana-to-romaji" as GameMode, label: "Romaji → カタ",      desc: "Tebak Katakana",   icon: "🔷", cls: "mode-5" },
  { id: "mixed-kana"         as GameMode, label: "ひら/カタ Mix",       desc: "Campuran Kana",    icon: "🔶", cls: "mode-6" },
  { id: "bunpou"             as GameMode, label: "文法",                desc: "Tata Bahasa JLPT", icon: "📝", cls: "mode-7" },
];

/* ── Difficulty configs ── */
const DIFFICULTIES = [
  { id: "easy"   as Difficulty, label: "SANTAI", icon: "🐢", desc: "20s/soal", cls: "diff-easy",   textCls: "diff-text-easy"   },
  { id: "medium" as Difficulty, label: "NORMAL", icon: "🏃", desc: "12s/soal", cls: "diff-medium", textCls: "diff-text-medium" },
  { id: "hard"   as Difficulty, label: "CEPAT",  icon: "🚀", desc: "7s/soal",  cls: "diff-hard",   textCls: "diff-text-hard"   },
];

/* ── Stat cards ── */
const STAT_CONFIGS = [
  { key: "kosakata",  label: "Kosakata",   icon: "📚", cls: "stat-kosakata",  textCls: "stat-text-kosakata"  },
  { key: "kana",      label: "Kana",       icon: "🔠", cls: "stat-kana",      textCls: "stat-text-kana"      },
  { key: "grammar",   label: "Grammar",    icon: "📝", cls: "stat-grammar",   textCls: "stat-text-grammar"   },
  { key: "highscore", label: "High Score", icon: "🏆", cls: "stat-highscore", textCls: "stat-text-highscore" },
];

export function HomeScreen({ onStart, storedStats }: HomeScreenProps) {
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel | null>(null);
  const [selectedMode,  setSelectedMode]  = useState<GameMode | null>(null);
  const [selectedDiff,  setSelectedDiff]  = useState<Difficulty | null>(null);
  const [step, setStep]                   = useState<1 | 2 | 3>(1);

  const selectedLevelCfg = LEVELS.find((l) => l.id === selectedLevel);
  const selectedModeCfg  = MODES.find((m) => m.id === selectedMode);

  const counts = {
    N5k: kanjiData.filter((k) => k.level === "N5").length,
    N4k: kanjiData.filter((k) => k.level === "N4").length,
    N3k: kanjiData.filter((k) => k.level === "N3").length,
    N5b: bunpouData.filter((b) => b.level === "N5").length,
    N4b: bunpouData.filter((b) => b.level === "N4").length,
    N3b: bunpouData.filter((b) => b.level === "N3").length,
  };

  const statValues: Record<string, string | number> = {
    kosakata:  kanjiData.length,
    kana:      kanaData.length,
    grammar:   bunpouData.length,
    highscore: storedStats?.highScore ?? 0,
  };

  return (
    <main
      className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-3 sm:px-6 xl:px-8 py-10"
      aria-label="Halaman utama KanjiMocha"
    >
      {/* ── TITLE ── */}
      <header className="text-center mb-5 sm:mb-6 animate-fade-up mt-2 w-full max-w-lg xl:max-w-2xl">
        <div className="inline-block mb-3">
          <span className="rpg-badge-gold text-[11px] sm:text-xs tracking-[0.15em]">
            ✦ JLPT N5 · N4 · N3 ✦
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl sm:text-5xl" aria-hidden="true">🎌</span>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #58cc02 0%, #1cb0f6 50%, #ce82ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.12))",
            }}
          >
            KanjiMocha
          </h1>
        </div>
        <div className="rpg-divider max-w-xs mx-auto" aria-hidden="true" />
        <p className="text-xs sm:text-sm dm-text-secondary font-bold tracking-wider mt-2">
          Belajar Bahasa Jepang dengan Seru 🎉
        </p>
      </header>

      {/* ── STAT CARDS ── */}
      <section aria-label="Statistik konten" className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 w-full max-w-lg xl:max-w-2xl">
        {STAT_CONFIGS.filter((s) => s.key !== "highscore" || (storedStats && storedStats.highScore > 0)).map((stat, i) => (
          <div
            key={stat.key}
            className={clsx(`card-enter stagger-${i + 1}`, stat.cls, "px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5")}
            style={{ borderRadius: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", border: "2px solid", borderBottom: "4px solid" }}
          >
            <span className="text-lg sm:text-2xl" aria-hidden="true">{stat.icon}</span>
            <div className="flex flex-col">
              <span className={clsx("text-sm sm:text-lg font-black leading-none", stat.textCls)}>
                {stat.key === "highscore"
                  ? (storedStats?.highScore ?? 0).toLocaleString()
                  : statValues[stat.key]}
              </span>
              <span className={clsx("text-[11px] font-bold uppercase tracking-wider", stat.textCls)} style={{ opacity: 0.75 }}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* ── MAIN PANEL ── */}
      <section className="w-full max-w-lg xl:max-w-2xl space-y-3" aria-label="Pilih mode permainan">

        {/* ── Link Ensiklopedia ── */}
        <nav aria-label="Ensiklopedia" className="grid grid-cols-2 gap-2 sm:gap-2.5">
          <Link
            href="/kanji"
            className="card-enter stagger-4 ency-kanji flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 touch-manipulation transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5"
            style={{ borderRadius: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", border: "2px solid", borderBottom: "4px solid", textDecoration: "none" }}
          >
            <span className="text-xl shrink-0" aria-hidden="true">📚</span>
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs font-black tracking-tight truncate ency-text-kanji">Ensiklopedia Kanji</div>
              <div className="text-[11px] font-bold truncate ency-text-kanji" style={{ opacity: 0.7 }}>1 & 2+ Kanji Majemuk</div>
            </div>
            <span className="ml-auto text-lg shrink-0 ency-text-kanji" aria-hidden="true">›</span>
          </Link>
          <Link
            href="/bunpou"
            className="card-enter stagger-5 ency-bunpou flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 touch-manipulation transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5"
            style={{ borderRadius: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", border: "2px solid", borderBottom: "4px solid", textDecoration: "none" }}
          >
            <span className="text-xl shrink-0" aria-hidden="true">📝</span>
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs font-black tracking-tight truncate ency-text-bunpou">Ensiklopedia Bunpou</div>
              <div className="text-[11px] font-bold truncate ency-text-bunpou" style={{ opacity: 0.7 }}>Rumus & Tata Bahasa</div>
            </div>
            <span className="ml-auto text-lg shrink-0 ency-text-bunpou" aria-hidden="true">›</span>
          </Link>
        </nav>

        {/* ── STEP 1: Pilih Level ── */}
        {step === 1 && (
          <div className="dm-panel card-enter stagger-6 p-4 sm:p-5">
            <h2 className="text-xs font-black dm-text-muted mb-3 uppercase tracking-[0.15em] text-center flex items-center justify-center gap-2">
              <span aria-hidden="true">🎯</span> Pilih Level JLPT
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {LEVELS.map((lvl, index) => (
                <button
                  key={lvl.id}
                  onClick={() => { setSelectedLevel(lvl.id); setSelectedMode(null); setSelectedDiff(null); setStep(2); }}
                  aria-label={`Pilih level ${lvl.label}`}
                  className={clsx(
                    `card-enter stagger-${index + 1}`,
                    lvl.cls,
                    "relative p-4 sm:p-5 flex flex-col items-start gap-2 text-left",
                    "touch-manipulation transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5",
                  )}
                  style={{ borderRadius: 14, border: "2px solid", borderBottom: "4px solid", cursor: "pointer" }}
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">{lvl.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className={clsx("text-sm sm:text-base font-black leading-tight", lvl.textCls)}>{lvl.label}</div>
                      <div className={clsx("text-xs font-bold mt-0.5", lvl.textCls)} style={{ opacity: 0.8 }}>{lvl.desc}</div>
                    </div>
                  </div>
                  <div className="w-full mt-1 pt-2 border-t border-dashed border-current opacity-30" />
                  <div className="w-full space-y-1">
                    <div className={clsx("flex justify-between text-[11px] font-bold", lvl.textCls)}>
                      <span>📚 Kosakata</span>
                      <span>{lvl.id === "N5" ? counts.N5k : lvl.id === "N4" ? counts.N4k : counts.N3k}</span>
                    </div>
                    <div className={clsx("flex justify-between text-[11px] font-bold", lvl.textCls)}>
                      <span>📝 Grammar</span>
                      <span>{lvl.id === "N5" ? counts.N5b : lvl.id === "N4" ? counts.N4b : counts.N3b}</span>
                    </div>
                    <div className={clsx("text-[11px] font-bold leading-snug", lvl.textCls)} style={{ opacity: 0.8 }}>{lvl.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Pilih Mode ── */}
        {step === 2 && (
          <div className="space-y-3">
            {/* Selected level chip */}
            {selectedLevelCfg && (
              <div
                className={clsx("screen-enter flex items-center justify-between p-3 sm:p-3.5", selectedLevelCfg.cls)}
                style={{ borderRadius: 14, border: "2px solid", borderBottom: "4px solid" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl" aria-hidden="true">{selectedLevelCfg.icon}</span>
                  <div>
                    <div className={clsx("text-xs font-black", selectedLevelCfg.textCls)}>{selectedLevelCfg.label}</div>
                    <div className={clsx("text-[11px] font-bold", selectedLevelCfg.textCls)} style={{ opacity: 0.8 }}>{selectedLevelCfg.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => { setStep(1); setSelectedMode(null); setSelectedDiff(null); }}
                  aria-label="Ubah level JLPT"
                  className="rpg-btn text-xs px-3 py-2 touch-manipulation font-black dm-text-secondary shrink-0"
                >✏ Ubah</button>
              </div>
            )}

            <div className="dm-panel screen-enter p-4 sm:p-5">
              <h2 className="text-xs font-black dm-text-muted mb-3 uppercase tracking-[0.15em] text-center flex items-center justify-center gap-2">
                <span aria-hidden="true">🎮</span> Pilih Mode Quiz
              </h2>
              {/* 2 col di mobile (320px+), 4 col di xl */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2.5">
                {MODES.map((mode, index) => (
                  <button
                    key={mode.id}
                    onClick={() => { setSelectedMode(mode.id); setSelectedDiff(null); setStep(3); }}
                    aria-label={`Pilih mode ${mode.desc}`}
                    aria-pressed={selectedMode === mode.id}
                    className={clsx(
                      `card-enter stagger-${Math.min(index + 1, 12)}`,
                      mode.cls,
                      "relative flex flex-col items-center justify-center gap-1.5 text-center",
                      "touch-manipulation transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5",
                      "p-2 sm:p-3 min-h-[60px] sm:min-h-[72px]",
                      MODES.length % 2 !== 0 && index === MODES.length - 1 ? "col-span-2 xl:col-span-1" : "",
                    )}
                    style={{ borderRadius: 12, border: "2px solid", borderBottom: "4px solid", cursor: "pointer" }}
                  >
                    <span className="text-xl leading-none" aria-hidden="true">{mode.icon}</span>
                    <div className="text-center w-full px-0.5">
                      {/* label JP dipersingkat untuk 320px */}
                      <div
                        className="text-[11px] sm:text-xs font-black leading-tight dm-text-primary mode-label-jp"
                        style={{ fontFamily: "var(--font-jp)" }}
                      >
                        {mode.label}
                      </div>
                      <div className="text-[11px] font-bold mt-0.5 dm-text-secondary mode-label-desc">{mode.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: Pilih Kecepatan ── */}
        {step === 3 && (
          <div className="space-y-3">
            {/* Selected chips row */}
            {selectedLevelCfg && selectedModeCfg && (
              <div className="dm-panel screen-enter p-3 sm:p-3.5 flex flex-col xs:flex-row gap-2 xs:items-center xs:justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <div
                    className={clsx("flex items-center gap-1.5 px-2.5 py-1 rounded-lg", selectedLevelCfg.cls)}
                    style={{ border: "1px solid" }}
                  >
                    <span className="text-sm" aria-hidden="true">{selectedLevelCfg.icon}</span>
                    <span className={clsx("text-xs font-black", selectedLevelCfg.textCls)}>{selectedLevelCfg.label}</span>
                  </div>
                  <div
                    className={clsx("flex items-center gap-1.5 px-2.5 py-1 rounded-lg", selectedModeCfg.cls)}
                    style={{ border: "1px solid" }}
                  >
                    <span className="text-sm" aria-hidden="true">{selectedModeCfg.icon}</span>
                    <span className="text-xs font-black dm-text-primary" style={{ fontFamily: "var(--font-jp)" }}>{selectedModeCfg.label}</span>
                  </div>
                </div>
                <button
                  onClick={() => { setStep(2); setSelectedDiff(null); }}
                  aria-label="Ubah mode quiz"
                  className="rpg-btn text-xs px-3 py-2 touch-manipulation font-black dm-text-secondary self-start xs:self-auto shrink-0"
                >✏ Ubah</button>
              </div>
            )}

            <div className="dm-panel screen-enter p-4 sm:p-5">
              <h2 className="text-xs font-black dm-text-muted mb-3 uppercase tracking-[0.15em] text-center flex items-center justify-center gap-2">
                <span aria-hidden="true">⚡</span> Pilih Kecepatan
              </h2>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {DIFFICULTIES.map((diff, i) => {
                  const isSel = selectedDiff === diff.id;
                  return (
                    <button
                      key={diff.id}
                      onClick={() => setSelectedDiff(diff.id)}
                      aria-label={`Pilih kecepatan ${diff.label} — ${diff.desc}`}
                      aria-pressed={isSel}
                      className={clsx(
                        `card-enter stagger-${i + 1}`,
                        isSel ? diff.cls : "dm-diff-idle",
                        "relative flex flex-col items-center justify-center",
                        "transition-all duration-150 touch-manipulation",
                        "min-h-[68px] sm:min-h-[80px] p-2.5 sm:p-4",
                      )}
                      style={{
                        borderRadius: 12,
                        border: "2px solid",
                        borderBottom: "4px solid",
                        cursor: "pointer",
                        transform: isSel ? "translateY(-2px)" : undefined,
                      }}
                    >
                      <span className="text-xl sm:text-2xl mb-0.5" aria-hidden="true">{diff.icon}</span>
                      <div className={clsx("text-[11px] font-black uppercase", isSel ? diff.textCls : "dm-text-secondary")}>
                        {diff.label}
                      </div>
                      <div className={clsx("text-[11px] font-bold mt-0.5", isSel ? diff.textCls : "dm-text-muted")} style={{ opacity: 0.8 }}>
                        {diff.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => selectedLevel && selectedMode && selectedDiff && onStart(selectedLevel, selectedMode, selectedDiff)}
                  disabled={!selectedLevel || !selectedMode || !selectedDiff}
                  aria-label="Mulai permainan"
                  className="rpg-btn-gold w-full py-4 text-sm sm:text-base font-black touch-manipulation rpg-glow-gold rounded-xl"
                >
                  🚀 MULAI BELAJAR!
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <footer>
        <p className="mt-6 text-xs dm-text-muted font-bold tracking-widest uppercase">
          KanjiMocha · Belajar Bahasa Jepang
        </p>
      </footer>
    </main>
  );
}
