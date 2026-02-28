"use client";
import { GameStats, GameMode, Difficulty } from "@/types";
import { Mascot } from "./Mascot";

interface ResultScreenProps {
  stats: GameStats;
  gameMode: GameMode;
  difficulty: Difficulty;
  onPlayAgain: () => void;
  onHome: () => void;
}

function getRankDetail(accuracy: number) {
  if (accuracy >= 90) return { title: "LUAR BIASA!", emoji: "🏆", color: "text-yellow-500", desc: "Pintar sekali! Kamu benar-benar Master Kanji." };
  if (accuracy >= 70) return { title: "HEBAT!", emoji: "🔥", color: "text-orange-500", desc: "Kerja bagus! Sedikit lagi jadi sempurna." };
  if (accuracy >= 50) return { title: "BAGUS!", emoji: "👍", color: "text-blue-500", desc: "Bagus! Terus berlatih supaya makin jago ya." };
  return { title: "AYO COBA LAGI", emoji: "💪", color: "text-slate-500", desc: "Jangan menyerah! Belajar lagi pasti bisa." };
}

export function ResultScreen({ stats, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);

  return (
    <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center p-6 sm:p-8 max-w-lg mx-auto">
      
      {/* Maskot dengan animasi bounce-soft */}
      <div className="mb-4 animate-bounce-soft">
        <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
      </div>

      {/* Card hasil dengan desain modern */}
      <div className="w-full bg-white/90 backdrop-blur-lg border-2 border-slate-100 shadow-xl p-8 text-center animate-fade-up relative overflow-hidden rounded-[2.5rem]">
        
        {/* Dekorasi pita juara di atas */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 to-orange-400"></div>

        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mt-2">Pelajaran Selesai</h2>
        <h1 className={`text-4xl font-black mt-2 mb-3 ${rank.color}`}>
          {rank.emoji} {rank.title}
        </h1>
        <p className="text-base font-bold text-slate-500 mb-8">{rank.desc}</p>

        {/* Skor Utama dengan gradient background */}
        <div className="bg-gradient-to-b from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-6 mb-8 shadow-inner">
          <div className="text-sm font-black text-yellow-600 uppercase mb-2">Total Skor Kamu</div>
          <div className="text-6xl font-black text-yellow-500 drop-shadow-sm">
            ⭐ {stats.score.toLocaleString()}
          </div>
        </div>

        {/* Grid Statistik 2x2 dengan desain modern */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-green-50 border border-green-200 p-4 rounded-3xl flex flex-col items-center">
            <span className="text-3xl font-black text-green-600 mb-1">{stats.correct}</span>
            <span className="text-xs font-bold text-green-700 uppercase">Benar ✅</span>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-3xl flex flex-col items-center">
            <span className="text-3xl font-black text-red-600 mb-1">{stats.wrong}</span>
            <span className="text-xs font-bold text-red-700 uppercase">Salah ❌</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-3xl flex flex-col items-center">
            <span className="text-3xl font-black text-blue-600 mb-1">{stats.accuracy}%</span>
            <span className="text-xs font-bold text-blue-700 uppercase">Akurasi 🎯</span>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-3xl flex flex-col items-center">
            <span className="text-3xl font-black text-purple-600 mb-1">{stats.maxStreak}</span>
            <span className="text-xs font-bold text-purple-700 uppercase">Beruntun ⚡</span>
          </div>
        </div>

        {/* Tombol Aksi dengan efek 3D */}
        <div className="flex flex-col gap-4">
          <button
            onClick={onPlayAgain}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black py-5 rounded-2xl text-lg tracking-widest shadow-[0_6px_0_#2563eb] active:shadow-none active:translate-y-2 transition-all uppercase"
          >
            MAIN LAGI! 🔥
          </button>
          <button
            onClick={onHome}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 rounded-2xl text-sm tracking-widest shadow-[0_4px_0_#cbd5e1] active:shadow-none active:translate-y-1 transition-all uppercase"
          >
            MENU UTAMA 🏠
          </button>
        </div>
      </div>
    </div>
  );
}