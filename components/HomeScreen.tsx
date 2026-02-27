"use client";
import { useState } from "react";
import { GameMode, Difficulty, AppTheme } from "@/types";
import { kanjiData } from "@/data/kanji";
import clsx from "clsx";

interface HomeScreenProps {
  theme: AppTheme;
  onThemeChange: (theme: AppTheme) => void;
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

const MODES = [
  { id: "kanji-to-arti" as GameMode, label: "漢字 → Arti", desc: "Tebak Artinya", icon: "🀄" },
  { id: "arti-to-kanji" as GameMode, label: "Arti → 漢字", desc: "Pilih Kanji", icon: "🎯" },
  { id: "hiragana-to-arti" as GameMode, label: "ひら → Arti", desc: "Tebak dari Hiragana", icon: "✨" },
];

const DIFFICULTIES = [
  { id: "easy" as Difficulty, label: "Santai", icon: "🌸", desc: "20s / soal", color: "text-green-500" },
  { id: "medium" as Difficulty, label: "Normal", icon: "⚡", desc: "12s / soal", color: "text-yellow-500" },
  { id: "hard" as Difficulty, label: "Sulit", icon: "🔥", desc: "7s / soal", color: "text-red-500" },
];

export function HomeScreen({ theme, onThemeChange, onStart }: HomeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>("kanji-to-arti");
  const [selectedDiff, setSelectedDiff] = useState<Difficulty>("medium");

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-10">
      
      {/* Theme Switcher Toggle */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg z-50">
        <button 
          onClick={() => onThemeChange("kids")}
          className={clsx("px-4 py-2 rounded-full text-sm font-black transition-all", theme === "kids" ? "bg-yellow-400 text-slate-800 shadow-md" : "text-gray-400 hover:text-white")}
        >
          🎈 Anak
        </button>
        <button 
          onClick={() => onThemeChange("pro")}
          className={clsx("px-4 py-2 rounded-full text-sm font-black transition-all", theme === "pro" ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white")}
        >
          🌙 Pro
        </button>
      </div>

      {/* Header Section */}
      <div className="text-center mb-10 animate-slide-up mt-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2" style={{ fontFamily: "var(--font-display)" }}>
          <span className={clsx("bg-clip-text text-transparent", theme === "kids" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : "bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400")}>
            漢字
          </span>
          <span className={clsx("drop-shadow-md", theme === "kids" ? "text-slate-800" : "text-white")}> MASTER</span>
        </h1>
        <div className="inline-block px-4 py-1 rounded-full glass-panel border-cyan-500/30 mt-2">
          <span className={clsx("text-xs md:text-sm font-bold uppercase tracking-[0.2em]", theme === "kids" ? "text-blue-600" : "text-cyan-300 text-glow-cyan")}>
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
            <span className={clsx("text-2xl font-black", theme === "kids" ? "text-slate-800" : "text-white")}>{stat.val}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Selection Area */}
      <div className="w-full max-w-xl space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        
        {/* Game Mode */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className={clsx("w-2 h-5 rounded-full", theme === "kids" ? "bg-yellow-400" : "bg-pink-500")} />
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pilih Mode</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={clsx(
                  "glass-button p-4 rounded-xl flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 md:gap-2 group",
                  selectedMode === mode.id 
                    ? (theme === "kids" ? "border-blue-400 bg-blue-100 scale-[1.05]" : "border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(255,45,120,0.2)] scale-[1.02]") 
                    : "hover:-translate-y-1"
                )}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{mode.icon}</span>
                <div className="text-left md:text-center">
                  <div className={clsx("text-sm font-bold mb-0.5", theme === "kids" ? "text-slate-800" : "text-white")} style={{ fontFamily: "var(--font-jp)" }}>
                    {mode.label}
                  </div>
                  <div className="text-[10px] text-gray-500">{mode.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className={clsx("w-2 h-5 rounded-full", theme === "kids" ? "bg-blue-400" : "bg-cyan-500")} />
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tingkat Kesulitan</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTIES.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDiff(diff.id)}
                className={clsx(
                  "glass-button py-4 px-2 rounded-xl text-center group",
                  selectedDiff === diff.id 
                    ? (theme === "kids" ? "border-yellow-400 bg-yellow-50 scale-[1.05]" : "border-cyan-500 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,245,255,0.2)] scale-[1.02]") 
                    : "hover:-translate-y-1"
                )}
              >
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">{diff.icon}</div>
                <div className={`text-sm font-black mb-0.5 ${diff.color}`}>{diff.label}</div>
                <div className="text-[10px] text-gray-500">{diff.desc}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Start Button */}
      <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <button
          onClick={() => onStart(selectedMode, selectedDiff)}
          className={clsx(
            "relative px-14 py-5 rounded-full font-black text-xl text-white overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95",
            theme === "kids" 
              ? "bg-blue-500 border-4 border-white shadow-[0_8px_0_#2563eb]" 
              : "bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-[0_0_40px_rgba(255,45,120,0.6)]"
          )}
        >
          {theme !== "kids" && <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s]" />}
          <span className="relative z-10 flex items-center gap-3 tracking-wider">
            MULAI BERMAIN <span className="group-hover:translate-x-2 transition-transform">🚀</span>
          </span>
        </button>
      </div>

    </div>
  );
}