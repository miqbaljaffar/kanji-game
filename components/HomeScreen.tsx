"use client";
import { useState } from "react";
import { GameMode, Difficulty } from "@/types";
import { kanjiData } from "@/data/kanji";
import { bunpouData } from "@/data/bunpou";
import clsx from "clsx";

interface HomeScreenProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  { id: "kanji-to-arti" as GameMode, label: "漢字 → Arti", desc: "Tebak Artinya", icon: "📖" },
  { id: "arti-to-kanji" as GameMode, label: "Arti → 漢字", desc: "Pilih Kanji", icon: "🎯" },
  { id: "hiragana-to-arti" as GameMode, label: "ひら → Arti", desc: "Dari Hiragana", icon: "✨" },
  { id: "bunpou" as GameMode, label: "文法 (Bunpou)", desc: "Tata Bahasa JFT", icon: "📝" },
];

const DIFFICULTIES = [
  { id: "easy" as Difficulty, label: "Santai", icon: "🐢", desc: "20s / soal", color: "text-green-600", bg: "bg-green-100/80", border: "border-green-300", shadow: "shadow-[0_6px_0_#86efac] sm:shadow-[0_8px_0_#86efac]" },
  { id: "medium" as Difficulty, label: "Normal", icon: "🏃", desc: "12s / soal", color: "text-yellow-600", bg: "bg-yellow-100/80", border: "border-yellow-300", shadow: "shadow-[0_6px_0_#fde047] sm:shadow-[0_8px_0_#fde047]" },
  { id: "hard" as Difficulty, label: "Cepat", icon: "🚀", desc: "7s / soal", color: "text-red-600", bg: "bg-red-100/80", border: "border-red-300", shadow: "shadow-[0_6px_0_#fca5a5] sm:shadow-[0_8px_0_#fca5a5]" },
];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>("kanji-to-arti");
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>("medium");

  return (
    <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      
      {/* Judul Aplikasi */}
      <div className="text-center mb-8 animate-fade-up mt-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-3 text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]" style={{ fontFamily: "var(--font-display)", WebkitTextStroke: "2px #1e293b" }}>
          KANJI MASTER
        </h1>
        <div className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/40">
          <span className="text-sm md:text-base text-blue-600 font-black uppercase tracking-widest">
            JFT Basic A2
          </span>
        </div>
      </div>

      {/* Info Jumlah Kosakata & Grammar (Card) */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        {[
          { val: kanjiData.length, label: "Kosakata", icon: "📚" },
          { val: bunpouData.length, label: "Grammar", icon: "📝" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/80 backdrop-blur-md px-5 sm:px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-white/40">
            <span className="text-2xl sm:text-3xl">{stat.icon}</span>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-slate-800 leading-none">{stat.val}</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Area Pemilihan */}
      <div className="w-full max-w-lg space-y-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        
        <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-white/40">
          <h2 className="text-sm font-black text-slate-500 mb-4 uppercase tracking-wider text-center">Pilih Mode Belajar</h2>
          <div className="grid grid-cols-2 gap-3">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={clsx(
                  "relative p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border-2",
                  selectedMode === mode.id 
                    ? "bg-blue-50 border-blue-400 shadow-[0_6px_0_#93c5fd] sm:shadow-[0_8px_0_#93c5fd] -translate-y-1 sm:-translate-y-2" 
                    : "bg-slate-50/80 border-slate-200 hover:bg-slate-100 hover:-translate-y-1 hover:shadow-[0_4px_0_#e2e8f0]"
                )}
              >
                <span className="text-2xl">{mode.icon}</span>
                <div className="text-center">
                  <div className={clsx("text-xs sm:text-sm font-black", selectedMode === mode.id ? "text-blue-700" : "text-slate-600")}>{mode.label}</div>
                  <div className="text-[10px] text-slate-400 font-bold mt-1">{mode.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pilih Kesulitan */}
        <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-white/40">
          <h2 className="text-sm font-black text-slate-500 mb-4 uppercase tracking-wider text-center">Pilih Kecepatan</h2>
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTIES.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDiff(diff.id)}
                className={clsx(
                  "relative p-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2",
                  selectedDiff === diff.id 
                    ? `${diff.bg} ${diff.border} ${diff.shadow} -translate-y-1 sm:-translate-y-2 !border-b-2` 
                    : "bg-slate-50/80 border-slate-200 hover:bg-slate-100 hover:-translate-y-1 hover:shadow-[0_4px_0_#e2e8f0]"
                )}
              >
                <span className="text-2xl mb-1">{diff.icon}</span>
                <div className={clsx("text-[11px] sm:text-sm font-black", selectedDiff === diff.id ? diff.color : "text-slate-600")}>
                  {diff.label}
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold mt-1">{diff.desc}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Tombol Mulai */}
      <div className="mt-8 mb-4 w-full max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <button
          onClick={() => onStart(selectedMode, selectedDiff)}
          className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-black py-4 sm:py-5 rounded-3xl text-xl tracking-wider shadow-[0_10px_0_#059669] hover:shadow-[0_8px_0_#059669] hover:translate-y-1 active:shadow-[0_0px_0_#059669] active:translate-y-3 transition-all flex items-center justify-center gap-3 uppercase"
        >
          AYO MULAI! 🚀
        </button>
      </div>

    </div>
  );
}