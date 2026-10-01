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
  { id: "kanji-to-arti"      as GameMode, label: "漢字 → Arti",        desc: "Tebak Artinya",   icon: "📖", color: "#ddf4ff", border: "#1cb0f6" },
  { id: "arti-to-kanji"      as GameMode, label: "Arti → 漢字",        desc: "Pilih Kanji",     icon: "🎯", color: "#d7ffb8", border: "#58cc02" },
  { id: "kanji-to-hiragana"  as GameMode, label: "漢字 → ひら",        desc: "Cara Baca",       icon: "🗣️", color: "#fff8d6", border: "#ffc800" },
  { id: "hiragana-to-arti"   as GameMode, label: "ひら → Arti",        desc: "Dari Hiragana",   icon: "✨", color: "#f5e6ff", border: "#ce82ff" },
  { id: "hiragana-to-romaji" as GameMode, label: "Romaji → ひら",      desc: "Tebak Hiragana",  icon: "🟣", color: "#f5e6ff", border: "#ce82ff" },
  { id: "katakana-to-romaji" as GameMode, label: "Romaji → カタ",      desc: "Tebak Katakana",  icon: "🔷", color: "#ddf4ff", border: "#1cb0f6" },
  { id: "mixed-kana"         as GameMode, label: "Romaji → ひら/カタ", desc: "Campuran Kana",   icon: "🔶", color: "#fff3e0", border: "#ff9600" },
  { id: "bunpou"             as GameMode, label: "文法 (Bunpou)",       desc: "Tata Bahasa JFT", icon: "📝", color: "#ffe0e0", border: "#ff4b4b" },
];

const DIFFICULTIES = [
  {
    id: "easy" as Difficulty, label: "SANTAI", icon: "🐢", desc: "20s / soal",
    bg: "#d7ffb8", border: "#58cc02", bottom: "#46a302", text: "#2a7000",
  },
  {
    id: "medium" as Difficulty, label: "NORMAL", icon: "🏃", desc: "12s / soal",
    bg: "#fff8d6", border: "#ffc800", bottom: "#c49800", text: "#7a5a00",
  },
  {
    id: "hard" as Difficulty, label: "CEPAT", icon: "🚀", desc: "7s / soal",
    bg: "#ffe0e0", border: "#ff4b4b", bottom: "#cc0000", text: "#880000",
  },
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
          <span className="rpg-badge-gold text-[9px] sm:text-[10px] tracking-[0.15em]">
            ✦ JLPT N5 · N4 · JFT A2 ✦
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl sm:text-5xl">🎌</span>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #58cc02 0%, #1cb0f6 50%, #ce82ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            }}
          >
            KanjiMocha
          </h1>
        </div>

        <div className="rpg-divider max-w-xs mx-auto" />
        <p className="text-xs sm:text-sm text-slate-500 font-bold tracking-wider">
          Belajar Bahasa Jepang dengan Seru 🎉
        </p>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5">
        {[
          { val: kanjiData.length,  label: "Kosakata", icon: "📚", bg: "#ddf4ff", border: "#1cb0f6", text: "#0c6b9e" },
          { val: kanaData.length,   label: "Kana",     icon: "🔠", bg: "#d7ffb8", border: "#58cc02", text: "#2a7000" },
          { val: bunpouData.length, label: "Grammar",  icon: "📝", bg: "#fff8d6", border: "#ffc800", text: "#7a5a00" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`card-enter stagger-${i + 1} px-4 sm:px-5 py-2.5 flex items-center gap-2.5`}
            style={{
              background: stat.bg,
              border: `2px solid ${stat.border}`,
              borderBottom: `4px solid ${stat.border}`,
              borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
          >
            <span className="text-xl sm:text-2xl">{stat.icon}</span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black leading-none" style={{ color: stat.text }}>
                {stat.val}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider" style={{ color: stat.text, opacity: 0.75 }}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN PANEL ── */}
      <div className="w-full max-w-lg space-y-3">

        {/* Link Ensiklopedia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { href: "/kanji",  icon: "📚", label: "Ensiklopedia Kanji",  sub: "1 & 2+ Kanji Majemuk",
              bg: "#ddf4ff", border: "#1cb0f6", bottom: "#0490c8", text: "#0c6b9e", cls: "stagger-4" },
            { href: "/bunpou", icon: "📝", label: "Ensiklopedia Bunpou", sub: "Rumus & Tata Bahasa",
              bg: "#d7ffb8", border: "#58cc02", bottom: "#46a302", text: "#2a7000", cls: "stagger-5" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`card-enter ${l.cls} flex items-center gap-3 px-4 py-3 touch-manipulation transition-all duration-150 hover:-translate-y-0.5 active:translate-y-1`}
              style={{
                background: l.bg,
                border: `2px solid ${l.border}`,
                borderBottom: `4px solid ${l.bottom}`,
                borderRadius: 14,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                textDecoration: "none",
              }}
            >
              <span className="text-xl shrink-0">{l.icon}</span>
              <div className="text-left min-w-0 flex-1">
                <div className="text-xs font-black tracking-tight truncate" style={{ color: l.text }}>
                  {l.label}
                </div>
                <div className="text-[9px] font-bold truncate" style={{ color: l.text, opacity: 0.7 }}>
                  {l.sub}
                </div>
              </div>
              <span className="ml-auto text-lg" style={{ color: l.border }}>›</span>
            </Link>
          ))}
        </div>

        {/* ── STEP 1: Pilih Mode ── */}
        {step === 1 ? (
          <div
            className="card-enter stagger-6 p-4 sm:p-5"
            style={{
              background: "#ffffff",
              border: "2px solid #e5e7eb",
              borderBottom: "4px solid #d1d5db",
              borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <h2 className="text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.15em] text-center flex items-center justify-center gap-2">
              <span>🎮</span> Pilih Mode Quiz
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {MODES.map((mode, index) => (
                <button
                  key={mode.id}
                  onClick={() => { setSelectedMode(mode.id); setSelectedDiff(null); setStep(2); }}
                  aria-label={`Pilih mode ${mode.desc}`}
                  aria-pressed={selectedMode === mode.id}
                  className={clsx(
                    "card-enter relative p-2.5 sm:p-3.5 flex flex-col items-center justify-center gap-1.5 text-center touch-manipulation min-h-[64px] sm:min-h-[72px] transition-all duration-150 hover:-translate-y-0.5 active:translate-y-1",
                    `stagger-${Math.min(index + 1, 12)}`,
                    MODES.length % 2 !== 0 && index === MODES.length - 1 ? "col-span-2" : "",
                  )}
                  style={{
                    background: mode.color,
                    border: `2px solid ${mode.border}`,
                    borderBottom: `4px solid ${mode.border}`,
                    borderRadius: 12,
                    cursor: "pointer",
                  }}
                >
                  <span className="text-xl sm:text-2xl">{mode.icon}</span>
                  <div className="text-center">
                    <div className="text-[8px] sm:text-[9px] font-black leading-tight text-slate-700"
                      style={{ fontFamily: "var(--font-jp)" }}>{mode.label}</div>
                    <div className="text-[8px] font-bold mt-0.5 text-slate-500">{mode.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        ) : (
          /* ── STEP 2: Pilih Kecepatan ── */
          <div className="space-y-3">
            {selectedModeInfo && (
              <div
                className="screen-enter p-3.5 flex items-center justify-between"
                style={{
                  background: selectedModeInfo.color,
                  border: `2px solid ${selectedModeInfo.border}`,
                  borderBottom: `4px solid ${selectedModeInfo.border}`,
                  borderRadius: 14,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedModeInfo.icon}</span>
                  <div>
                    <div className="text-xs font-black text-slate-700" style={{ fontFamily: "var(--font-jp)" }}>
                      {selectedModeInfo.label}
                    </div>
                    <div className="text-[9px] font-bold text-slate-500">{selectedModeInfo.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => { setStep(1); setSelectedDiff(null); }}
                  aria-label="Ubah mode quiz"
                  className="rpg-btn text-[9px] px-3 py-2 touch-manipulation font-black text-slate-600"
                >
                  ✏ Ubah
                </button>
              </div>
            )}

            <div
              className="screen-enter p-4 sm:p-5"
              style={{
                background: "#ffffff",
                border: "2px solid #e5e7eb",
                borderBottom: "4px solid #d1d5db",
                borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <h2 className="text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.15em] text-center flex items-center justify-center gap-2">
                <span>⚡</span> Pilih Kecepatan
              </h2>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {DIFFICULTIES.map((diff, i) => {
                  const isSelected = selectedDiff === diff.id;
                  return (
                    <button
                      key={diff.id}
                      onClick={() => setSelectedDiff(diff.id)}
                      aria-label={`Pilih kecepatan ${diff.label} — ${diff.desc}`}
                      aria-pressed={isSelected}
                      className={clsx(
                        "card-enter relative p-3 sm:p-4 flex flex-col items-center justify-center transition-all duration-150 touch-manipulation min-h-[72px] sm:min-h-[80px]",
                        `stagger-${i + 1}`,
                      )}
                      style={{
                        background: isSelected ? diff.bg : "#f9fafb",
                        border: `2px solid ${isSelected ? diff.border : "#e5e7eb"}`,
                        borderBottom: `4px solid ${isSelected ? diff.bottom : "#d1d5db"}`,
                        borderRadius: 12,
                        cursor: "pointer",
                        transform: isSelected ? "translateY(-2px)" : undefined,
                      }}
                    >
                      <span className="text-2xl mb-1">{diff.icon}</span>
                      <div
                        className="text-[8px] font-black uppercase"
                        style={{ color: isSelected ? diff.text : "#6b7280" }}
                      >
                        {diff.label}
                      </div>
                      <div
                        className="text-[7px] font-bold mt-0.5"
                        style={{ color: isSelected ? diff.text : "#9ca3af", opacity: 0.8 }}
                      >
                        {diff.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tombol Mulai */}
              <div className="mt-4">
                <button
                  onClick={() => selectedMode && selectedDiff && onStart(selectedMode, selectedDiff)}
                  disabled={!selectedMode || !selectedDiff}
                  aria-label="Mulai permainan"
                  className="rpg-btn-gold w-full py-4 text-sm sm:text-base font-black touch-manipulation rpg-glow-gold rounded-xl"
                >
                  🚀 MULAI BELAJAR!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <p className="mt-6 text-[9px] sm:text-[10px] text-slate-400 font-bold tracking-widest uppercase">
        KanjiMocha · Belajar Bahasa Jepang
      </p>
    </div>
  );
}
