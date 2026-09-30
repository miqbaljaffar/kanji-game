"use client";
import { useState } from "react";
import { GameMode, Difficulty } from "@/types";
import { kanjiData } from "@/data/kanji";
import { kanaData } from "@/data/kana";
import { bunpouData } from "@/data/bunpou";
import Link from "next/link";
import clsx from "clsx";

interface HomeScreenProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  { id: "kanji-to-arti"      as GameMode, label: "漢字 → Arti",        desc: "Tebak Artinya",   icon: "📖" },
  { id: "arti-to-kanji"      as GameMode, label: "Arti → 漢字",        desc: "Pilih Kanji",     icon: "🎯" },
  { id: "kanji-to-hiragana"  as GameMode, label: "漢字 → ひら",        desc: "Cara Baca",       icon: "🗣️" },
  { id: "hiragana-to-arti"   as GameMode, label: "ひら → Arti",        desc: "Dari Hiragana",   icon: "✨" },
  { id: "hiragana-to-romaji" as GameMode, label: "Romaji → ひら",      desc: "Tebak Hiragana",  icon: "🟣" },
  { id: "katakana-to-romaji" as GameMode, label: "Romaji → カタ",      desc: "Tebak Katakana",  icon: "🔷" },
  { id: "mixed-kana"         as GameMode, label: "Romaji → ひら/カタ", desc: "Campuran Kana",   icon: "🔶" },
  { id: "bunpou"             as GameMode, label: "文法 (Bunpou)",       desc: "Tata Bahasa JFT", icon: "📝" },
];

const DIFFICULTIES = [
  { id: "easy"   as Difficulty, label: "SANTAI", icon: "🐢", desc: "20s / soal",
    color: "text-emerald-300", border: "border-emerald-500",
    activeBg: "bg-emerald-900/60", activeShadow: "shadow-[0_6px_0_#064e3b]" },
  { id: "medium" as Difficulty, label: "NORMAL", icon: "🏃", desc: "12s / soal",
    color: "text-yellow-300",  border: "border-yellow-500",
    activeBg: "bg-yellow-900/60", activeShadow: "shadow-[0_6px_0_#713f12]" },
  { id: "hard"   as Difficulty, label: "CEPAT",  icon: "🚀", desc: "7s / soal",
    color: "text-red-300",     border: "border-red-500",
    activeBg: "bg-red-900/60",    activeShadow: "shadow-[0_6px_0_#450a0a]" },
];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  const [selectedDiff, setSelectedDiff] = useState<Difficulty | null>(null);
  const [step, setStep]                 = useState<1 | 2>(1);

  const selectedModeInfo = MODES.find((m) => m.id === selectedMode);

  return (
    <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-3 sm:px-6 py-10">

      {/* ── TITLE ── */}
      <div className="text-center mb-6 animate-fade-up mt-2">
        <div className="inline-block mb-3">
          <span className="rpg-badge-gold text-[9px] sm:text-[10px] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-pixel)" }}>
            ✦ JLPT N5 · N4 · JFT A2 ✦
          </span>
        </div>

        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-1 text-transparent bg-clip-text"
          style={{
            fontFamily: "var(--font-pixel)",
            backgroundImage: "linear-gradient(180deg, #fef3c7 0%, #fbbf24 50%, #d97706 100%)",
            filter: "drop-shadow(0 4px 8px rgba(251,191,36,0.5))",
          }}
        >KANJI</h1>
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-transparent bg-clip-text"
          style={{
            fontFamily: "var(--font-pixel)",
            backgroundImage: "linear-gradient(180deg, #e9d5ff 0%, #a78bfa 50%, #7c3aed 100%)",
            filter: "drop-shadow(0 4px 8px rgba(167,139,250,0.5))",
          }}
        >MASTER</h1>

        <div className="rpg-divider max-w-xs mx-auto" />
        <p className="text-[9px] sm:text-xs text-purple-300 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-pixel)" }}>
          ～ Belajar Bahasa Jepang ～
        </p>
      </div>

      {/* ── STAT CARDS — stagger entrance ── */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5">
        {[
          { val: kanjiData.length,  label: "Kosakata", icon: "📚" },
          { val: kanaData.length,   label: "Kana",     icon: "🔠" },
          { val: bunpouData.length, label: "Grammar",  icon: "📝" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`rpg-box card-enter stagger-${i + 1} px-4 sm:px-5 py-2.5 flex items-center gap-2.5 relative`}
          >
            <span className="rpg-corner rpg-corner-tl" />
            <span className="rpg-corner rpg-corner-br" />
            <span className="text-xl sm:text-2xl">{stat.icon}</span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-yellow-300 leading-none"
                style={{ fontFamily: "var(--font-pixel)" }}>{stat.val}</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN PANEL ── */}
      <div className="w-full max-w-lg space-y-3">

        {/* Link Ensiklopedia — stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { href: "/kanji",  icon: "📚", label: "Ensiklopedia Kanji",  sub: "1 & 2+ Kanji Majemuk",  cls: "stagger-4" },
            { href: "/bunpou", icon: "📝", label: "Ensiklopedia Bunpou", sub: "Rumus & Tata Bahasa",    cls: "stagger-5" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rpg-btn card-enter ${l.cls} flex items-center gap-3 px-4 py-3 relative group touch-manipulation`}
            >
              <span className="rpg-corner rpg-corner-tl" />
              <span className="rpg-corner rpg-corner-br" />
              <span className="text-xl shrink-0">{l.icon}</span>
              <div className="text-left min-w-0">
                <div className="text-[10px] sm:text-xs font-black text-yellow-300 tracking-tight truncate"
                  style={{ fontFamily: "var(--font-pixel)" }}>{l.label}</div>
                <div className="text-[9px] text-purple-300 font-bold truncate">{l.sub}</div>
              </div>
              <span className="ml-auto text-yellow-400 text-xs animate-cursor-blink">▶</span>
            </Link>
          ))}
        </div>

        {/* ── STEP 1: Pilih Mode ── */}
        {step === 1 ? (
          <div className="rpg-box card-enter stagger-6 p-4 sm:p-5 relative">
            <span className="rpg-corner rpg-corner-tl" />
            <span className="rpg-corner rpg-corner-tr" />
            <span className="rpg-corner rpg-corner-bl" />
            <span className="rpg-corner rpg-corner-br" />

            <h2 className="text-[9px] sm:text-[10px] font-black text-yellow-400 mb-3 uppercase tracking-[0.2em] text-center"
              style={{ fontFamily: "var(--font-pixel)" }}>
              ▸ Pilih Mode Quest
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {MODES.map((mode, index) => (
                <button
                  key={mode.id}
                  onClick={() => { setSelectedMode(mode.id); setSelectedDiff(null); setStep(2); }}
                  className={clsx(
                    "rpg-btn card-enter relative p-2.5 sm:p-3.5 flex flex-col items-center justify-center gap-1.5 text-center touch-manipulation min-h-[64px] sm:min-h-[72px]",
                    `stagger-${Math.min(index + 1, 12)}`,
                    MODES.length % 2 !== 0 && index === MODES.length - 1 ? "col-span-2" : "",
                  )}
                >
                  <span className="text-xl sm:text-2xl">{mode.icon}</span>
                  <div className="text-center">
                    <div className="text-[8px] sm:text-[9px] font-black text-yellow-200 leading-tight"
                      style={{ fontFamily: "var(--font-pixel)" }}>{mode.label}</div>
                    <div className="text-[8px] text-purple-300 font-bold mt-0.5">{mode.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        ) : (
          /* ── STEP 2: Pilih Kecepatan ── */
          <div className="space-y-3">
            {selectedModeInfo && (
              <div className="rpg-box-gold screen-enter p-3.5 flex items-center justify-between relative">
                <span className="rpg-corner rpg-corner-tl" />
                <span className="rpg-corner rpg-corner-br" />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedModeInfo.icon}</span>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-black text-yellow-300"
                      style={{ fontFamily: "var(--font-pixel)" }}>{selectedModeInfo.label}</div>
                    <div className="text-[9px] text-purple-300 font-bold">{selectedModeInfo.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => { setStep(1); setSelectedDiff(null); }}
                  className="rpg-btn text-[9px] px-3 py-2 text-yellow-300 touch-manipulation"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >✏ Ubah</button>
              </div>
            )}

            <div className="rpg-box screen-enter p-4 sm:p-5 relative">
              <span className="rpg-corner rpg-corner-tl" />
              <span className="rpg-corner rpg-corner-tr" />
              <span className="rpg-corner rpg-corner-bl" />
              <span className="rpg-corner rpg-corner-br" />

              <h2 className="text-[9px] sm:text-[10px] font-black text-yellow-400 mb-3 uppercase tracking-[0.2em] text-center"
                style={{ fontFamily: "var(--font-pixel)" }}>
                ▸ Pilih Kecepatan
              </h2>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {DIFFICULTIES.map((diff, i) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDiff(diff.id)}
                    className={clsx(
                      "rpg-btn card-enter relative p-3 sm:p-4 flex flex-col items-center justify-center transition-all duration-200 touch-manipulation min-h-[72px] sm:min-h-[80px]",
                      `stagger-${i + 1}`,
                      selectedDiff === diff.id
                        ? `${diff.activeBg} border-2 ${diff.border} ${diff.activeShadow} -translate-y-1`
                        : "",
                    )}
                  >
                    <span className="text-2xl mb-1">{diff.icon}</span>
                    <div
                      className={clsx("text-[8px] sm:text-[9px] font-black",
                        selectedDiff === diff.id ? diff.color : "text-purple-200")}
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >{diff.label}</div>
                    <div className="text-[8px] text-purple-400 font-bold mt-0.5">{diff.desc}</div>
                    {selectedDiff === diff.id && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="text-yellow-400 text-xs">▼</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {selectedMode && selectedDiff && (
              <div className="animate-bounce-pop w-full pt-1">
                <button
                  onClick={() => onStart(selectedMode, selectedDiff)}
                  className="rpg-btn-gold w-full py-4 sm:py-5 text-sm sm:text-base tracking-widest uppercase flex items-center justify-center gap-3 touch-manipulation rpg-glow-gold"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >⚔ MULAI PETUALANGAN!</button>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mt-6 text-[8px] text-purple-500 tracking-widest animate-fade-up"
        style={{ animationDelay: "0.5s", fontFamily: "var(--font-pixel)" }}>
        © KanjiMocha — Press START
      </p>
    </div>
  );
}
