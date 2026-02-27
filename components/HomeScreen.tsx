"use client";
import { useState } from "react";
import { GameMode, Difficulty } from "@/types";
import { kanjiData } from "@/data/kanji";
import clsx from "clsx";

interface HomeScreenProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  { id: "kanji-to-arti" as GameMode, label: "漢字 → Arti", desc: "Tebak Artinya", icon: "🀄" },
  { id: "arti-to-kanji" as GameMode, label: "Arti → 漢字", desc: "Pilih Kanji", icon: "🎯" },
  { id: "hiragana-to-arti" as GameMode, label: "ひら → Arti", desc: "Tebak dari Hiragana", icon: "✨" },
];

const DIFFICULTIES = [
  { id: "easy" as Difficulty, label: "Santai", icon: "🌸", desc: "20s / soal", color: "text-green-400" },
  { id: "medium" as Difficulty, label: "Normal", icon: "⚡", desc: "12s / soal", color: "text-yellow-400" },
  { id: "hard" as Difficulty, label: "Sulit", icon: "🔥", desc: "7s / soal", color: "text-red-400" },
];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>("kanji-to-arti");
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>("medium");

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-10">
      
      {/* Header Section */}
      <div className="text-center mb-10 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2" style={{ fontFamily: "var(--font-display)" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            漢字
          </span>
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"> MASTER</span>
        </h1>
        <div className="inline-block px-4 py-1 rounded-full glass-panel border-cyan-500/30">
          <span className="text-xs md:text-sm text-cyan-300 font-bold uppercase tracking-[0.2em] text-glow-cyan">
            JFT Basic A2 Quiz
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-4 md:gap-6 mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        {[
          { val: kanjiData.length, label: "Total Kosakata", icon: "📚" },
          { val: "20", label: "Soal / Ronde", icon: "🎮" }
        ].map((stat) => (
          <div key={stat.label} className="glass-panel rounded-2xl px-6 py-4 flex flex-col items-center min-w-[140px]">
            <span className="text-2xl mb-2">{stat.icon}</span>
            <span className="text-2xl font-black text-white">{stat.val}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Selection Area */}
      <div className="w-full max-w-xl space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        
        {/* Game Mode */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-1 h-4 bg-pink-500 rounded-full" />
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Pilih Mode</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={clsx(
                  "glass-button p-4 rounded-xl flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 md:gap-2 group",
                  selectedMode === mode.id 
                    ? "border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(255,45,120,0.2)] scale-[1.02]" 
                    : "hover:-translate-y-1"
                )}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{mode.icon}</span>
                <div className="text-left md:text-center">
                  <div className="text-sm font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-jp)" }}>
                    {mode.label}
                  </div>
                  <div className="text-[10px] text-gray-400">{mode.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-1 h-4 bg-cyan-500 rounded-full" />
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Tingkat Kesulitan</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTIES.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDiff(diff.id)}
                className={clsx(
                  "glass-button py-4 px-2 rounded-xl text-center group",
                  selectedDiff === diff.id 
                    ? `border-cyan-500 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,245,255,0.2)] scale-[1.02]` 
                    : "hover:-translate-y-1"
                )}
              >
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">{diff.icon}</div>
                <div className={`text-sm font-black mb-0.5 ${diff.color}`}>{diff.label}</div>
                <div className="text-[10px] text-gray-400">{diff.desc}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Start Button */}
      <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <button
          onClick={() => onStart(selectedMode, selectedDiff)}
          className="relative px-14 py-5 rounded-full font-black text-xl text-white overflow-hidden group
            bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-300
            hover:shadow-[0_0_40px_rgba(255,45,120,0.6)] hover:scale-105 active:scale-95"
        >
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s]" />
          <span className="relative z-10 flex items-center gap-3 tracking-wider">
            MULAI BERMAIN <span className="group-hover:translate-x-2 transition-transform">🚀</span>
          </span>
        </button>
      </div>

    </div>
  );
}