"use client";
import { useState } from "react";
import { GameMode, Difficulty } from "@/types";
import { kanjiData } from "@/data/kanji";
import clsx from "clsx";

interface HomeScreenProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  { id: "kanji-to-arti" as GameMode, label: "漢字 → Arti", desc: "Tebak Artinya", icon: "📖" },
  { id: "arti-to-kanji" as GameMode, label: "Arti → 漢字", desc: "Pilih Kanji", icon: "🎯" },
  { id: "hiragana-to-arti" as GameMode, label: "ひら → Arti", desc: "Dari Hiragana", icon: "✨" },
];

const DIFFICULTIES = [
  { id: "easy" as Difficulty, label: "Santai", icon: "🐢", desc: "20s / soal", color: "text-green-500", bg: "bg-green-100", border: "border-green-400" },
  { id: "medium" as Difficulty, label: "Normal", icon: "🏃", desc: "12s / soal", color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-400" },
  { id: "hard" as Difficulty, label: "Cepat", icon: "🚀", desc: "7s / soal", color: "text-red-500", bg: "bg-red-100", border: "border-red-400" },
];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>("kanji-to-arti");
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>("medium");

  return (
    <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 md:px-6 py-8">
      
      {/* Judul Aplikasi */}
      <div className="text-center mb-8 animate-slide-up mt-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3 text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]" style={{ fontFamily: "var(--font-display)", WebkitTextStroke: "2px #1e293b" }}>
          KANJI MASTER
        </h1>
        <div className="inline-block px-5 py-2 rounded-xl bg-yellow-400 border-b-4 border-yellow-600 shadow-sm">
          <span className="text-sm md:text-base text-yellow-900 font-black uppercase tracking-widest">
            JFT Basic A2
          </span>
        </div>
      </div>

      {/* Info Jumlah Kosakata (Card) */}
      <div className="flex gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.05s" }}>
        {[
          { val: kanjiData.length, label: "Kosakata", icon: "📚" },
          { val: "20", label: "Soal", icon: "⭐" }
        ].map((stat) => (
          <div key={stat.label} className="duo-card px-5 py-3 flex items-center gap-3">
            <span className="text-2xl md:text-3xl">{stat.icon}</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-800 leading-none">{stat.val}</span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Area Pemilihan */}
      <div className="w-full max-w-lg space-y-5 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        
        {/* Pilih Mode */}
        <div className="duo-card p-4 md:p-5">
          <h2 className="text-base font-black text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-blue-500 bg-blue-100 px-2 py-0.5 rounded-lg">1</span> Pilih Mode Main
          </h2>
          {/* Mengubah gap menjadi lebih lega (gap-3 atau gap-4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={clsx(
                  "duo-btn p-3 flex flex-row md:flex-col items-center justify-start md:justify-center gap-3 md:gap-1 transition-all",
                  selectedMode === mode.id 
                    ? "bg-blue-50 border-blue-400 text-blue-700 scale-[1.02] border-b-4 shadow-sm" 
                    : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                )}
              >
                <span className="text-2xl">{mode.icon}</span>
                <div className="text-left md:text-center">
                  <div className="text-sm font-black mb-0.5">{mode.label}</div>
                  <div className="text-[10px] opacity-70 font-bold">{mode.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pilih Kesulitan */}
        <div className="duo-card p-4 md:p-5">
          <h2 className="text-base font-black text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-blue-500 bg-blue-100 px-2 py-0.5 rounded-lg">2</span> Pilih Kecepatan
          </h2>
          {/* Memberikan gap yang lebih lega antar kotak */}
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTIES.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDiff(diff.id)}
                className={clsx(
                  "duo-btn py-3 px-2 flex flex-col items-center transition-all",
                  selectedDiff === diff.id 
                    ? `${diff.bg} ${diff.border} scale-[1.02] border-b-4 shadow-sm` 
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <span className="text-2xl mb-1">{diff.icon}</span>
                <div className={`text-xs md:text-sm font-black mb-0.5 ${selectedDiff === diff.id ? diff.color : 'text-slate-600'}`}>
                  {diff.label}
                </div>
                <div className="text-[10px] text-slate-400 font-bold">{diff.desc}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Tombol Mulai */}
      <div className="mt-6 mb-4 animate-slide-up w-full max-w-lg" style={{ animationDelay: "0.15s" }}>
        <button
          onClick={() => onStart(selectedMode, selectedDiff)}
          className="duo-btn-primary w-full py-4 md:py-5 text-xl tracking-wide flex justify-center items-center gap-2 uppercase"
        >
          AYO MULAI! 🚀
        </button>
      </div>

    </div>
  );
}