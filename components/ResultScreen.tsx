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
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-6 max-w-md mx-auto">
      
      {/* Maskot muncul di atas dengan ekspresi senang */}
      <div className="mb-2 animate-bounce-slow">
         <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
      </div>

      <div className="w-full duo-card p-8 text-center animate-slide-up relative overflow-hidden">
        {/* Dekorasi pita juara */}
        <div className="absolute top-0 left-0 w-full h-3 bg-yellow-400"></div>

        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mt-2">Pelajaran Selesai</h2>
        <h1 className={`text-3xl font-black mt-1 mb-2 ${rank.color}`}>
          {rank.title}
        </h1>
        <p className="text-sm font-bold text-slate-500 mb-6">{rank.desc}</p>

        {/* Skor Utama */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mb-6">
          <div className="text-xs font-black text-yellow-600 uppercase mb-1">Total Skor Kamu</div>
          <div className="text-5xl font-black text-yellow-500 drop-shadow-sm">
            ⭐ {stats.score.toLocaleString()}
          </div>
        </div>

        {/* Kotak Statistik Kecil */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-green-50 border-2 border-green-200 p-3 rounded-2xl flex flex-col items-center">
            <span className="text-xl mb-1">✅</span>
            <span className="text-xl font-black text-green-600">{stats.correct}</span>
            <span className="text-[10px] font-bold text-green-700 uppercase mt-1">Benar</span>
          </div>
          <div className="bg-red-50 border-2 border-red-200 p-3 rounded-2xl flex flex-col items-center">
            <span className="text-xl mb-1">❌</span>
            <span className="text-xl font-black text-red-600">{stats.wrong}</span>
            <span className="text-[10px] font-bold text-red-700 uppercase mt-1">Salah</span>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 p-3 rounded-2xl flex flex-col items-center">
            <span className="text-xl mb-1">🎯</span>
            <span className="text-xl font-black text-blue-600">{stats.accuracy}%</span>
            <span className="text-[10px] font-bold text-blue-700 uppercase mt-1">Akurasi</span>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 p-3 rounded-2xl flex flex-col items-center">
            <span className="text-xl mb-1">⚡</span>
            <span className="text-xl font-black text-orange-600">{stats.maxStreak}</span>
            <span className="text-[10px] font-bold text-orange-700 uppercase mt-1">Beruntun</span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onPlayAgain}
            className="duo-btn-primary w-full py-4 uppercase tracking-widest text-lg"
          >
            MAIN LAGI!
          </button>
          <button
            onClick={onHome}
            className="duo-btn-secondary w-full py-4 uppercase tracking-widest text-sm"
          >
            MENU UTAMA
          </button>
        </div>
      </div>
    </div>
  );
}