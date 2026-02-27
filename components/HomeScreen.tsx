"use client";
import { useState } from "react";
import { GameMode, Difficulty } from "@/types";
import { kanjiData } from "@/data/kanji";

interface HomeScreenProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  {
    id: "kanji-to-arti" as GameMode,
    label: "漢字 → Arti",
    desc: "Lihat kanji, tebak artinya!",
    icon: "🀄",
    color: "from-pink-600 to-rose-700",
    glow: "neon-border-pink",
  },
  {
    id: "arti-to-kanji" as GameMode,
    label: "Arti → 漢字",
    desc: "Lihat arti, pilih kanjinya!",
    icon: "🎯",
    color: "from-cyan-600 to-blue-700",
    glow: "neon-border-cyan",
  },
  {
    id: "hiragana-to-arti" as GameMode,
    label: "ひら → Arti",
    desc: "Lihat hiragana, tebak artinya!",
    icon: "✨",
    color: "from-violet-600 to-purple-700",
    glow: "border border-purple-400",
  },
];

const DIFFICULTIES = [
  { id: "easy" as Difficulty, label: "Santai 🌸", desc: "20 detik/soal", color: "text-green-400 border-green-400 hover:bg-green-400/20" },
  { id: "medium" as Difficulty, label: "Normal ⚡", desc: "12 detik/soal", color: "text-yellow-400 border-yellow-400 hover:bg-yellow-400/20" },
  { id: "hard" as Difficulty, label: "Sulit 🔥", desc: "7 detik/soal", color: "text-red-400 border-red-400 hover:bg-red-400/20" },
];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>("kanji-to-arti");
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>("medium");
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-slide-up">
        <div className="inline-block mb-3">
          <div className="text-6xl md:text-8xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <span className="neon-text-pink text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">
              漢字
            </span>
            <span className="text-white"> MASTER</span>
          </div>
          <div className="text-sm md:text-base text-cyan-300 tracking-[0.3em] uppercase font-bold neon-text-cyan">
            JFT Basic A2 Quiz Game
          </div>
        </div>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          {kanjiData.length} kosakata siap diuji! 頑張って！
        </p>
      </div>

      {/* Stats strip */}
      <div className="flex gap-6 mb-8 text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
        {[
          { val: kanjiData.length, label: "Total Kanji", icon: "📚" },
          { val: "20", label: "Soal/Ronde", icon: "🎮" },
          { val: "A2", label: "Level JFT", icon: "🏆" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center bg-white/5 rounded-xl px-4 py-3 border border-white/10 backdrop-blur-sm"
          >
            <span className="text-xl mb-1">{stat.icon}</span>
            <span className="text-xl font-black text-white neon-text-cyan">{stat.val}</span>
            <span className="text-xs text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Mode Selection */}
      <div className="w-full max-w-lg mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
          🎲 Pilih Mode
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`relative rounded-xl p-3 text-center transition-all duration-200 cursor-pointer border
                ${selectedMode === mode.id
                  ? `bg-gradient-to-br ${mode.color} border-transparent shadow-lg scale-105`
                  : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
            >
              <div className="text-2xl mb-1">{mode.icon}</div>
              <div className="text-xs font-bold text-white leading-tight" style={{ fontFamily: "var(--font-jp)" }}>
                {mode.label}
              </div>
              <div className="text-[10px] text-gray-300 mt-1 leading-tight hidden md:block">{mode.desc}</div>
              {selectedMode === mode.id && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-4 h-4 flex items-center justify-center text-[8px] text-black font-black">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className="w-full max-w-lg mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
          ⚡ Kesulitan
        </h2>
        <div className="flex gap-3">
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setSelectedDiff(diff.id)}
              className={`flex-1 rounded-xl py-3 px-2 text-center border transition-all duration-200 cursor-pointer
                ${selectedDiff === diff.id
                  ? `${diff.color} scale-105 bg-white/10`
                  : "border-white/10 text-gray-400 hover:border-white/30"
                }`}
            >
              <div className="text-sm font-black">{diff.label}</div>
              <div className="text-[10px] mt-0.5 opacity-70">{diff.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <button
          onClick={() => onStart(selectedMode, selectedDiff)}
          className="group relative px-12 py-5 rounded-2xl font-black text-xl md:text-2xl text-white
            bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 
            hover:from-pink-500 hover:via-rose-400 hover:to-pink-500
            transition-all duration-200 hover:scale-105 active:scale-95
            cursor-pointer shadow-2xl"
          style={{
            boxShadow: "0 0 30px rgba(255, 45, 120, 0.6), 0 0 60px rgba(255, 45, 120, 0.2)",
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>🎮</span>
            <span>MULAI GAME!</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-600 animate-slide-up" style={{ animationDelay: "0.5s" }}>
        <p>🌸 Setiap ronde: 20 soal acak • Streak bonus • Timer bonus</p>
      </div>
    </div>
  );
}
