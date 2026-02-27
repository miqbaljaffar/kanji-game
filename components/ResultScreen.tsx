"use client";
import { GameStats, GameMode, Difficulty } from "@/types";

interface ResultScreenProps {
  stats: GameStats;
  gameMode: GameMode;
  difficulty: Difficulty;
  onPlayAgain: () => void;
  onHome: () => void;
}

function getRankDetail(accuracy: number) {
  if (accuracy >= 95) return { title: "SENSEI", emoji: "👑", color: "text-yellow-400", gradient: "from-yellow-400 to-orange-500", desc: "Sempurna! Kamu adalah master kanji sejati." };
  if (accuracy >= 80) return { title: "HEBAT", emoji: "🔥", color: "text-pink-400", gradient: "from-pink-400 to-rose-500", desc: "Luar biasa! Sedikit lagi menuju kesempurnaan." };
  if (accuracy >= 60) return { title: "BAGUS", emoji: "⭐", color: "text-cyan-400", gradient: "from-cyan-400 to-blue-500", desc: "Kerja bagus! Latihan lagi agar makin lancar." };
  return { title: "BERJUANG", emoji: "📚", color: "text-gray-400", gradient: "from-gray-400 to-gray-600", desc: "Jangan menyerah! Semua butuh proses." };
}

export function ResultScreen({ stats, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-10">
      
      <div className="w-full max-w-md w-full glass-panel rounded-3xl p-8 relative overflow-hidden animate-bounce-in">
        {/* Decorative background flare */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b ${rank.gradient} opacity-20 blur-[50px] pointer-events-none`} />

        {/* Header / Rank */}
        <div className="text-center mb-8 relative z-10">
          <div className="text-7xl mb-4 transform hover:scale-110 transition-transform cursor-default">{rank.emoji}</div>
          <h2 className="text-xs text-gray-400 uppercase tracking-[0.3em] font-bold mb-1">Peringkat Kamu</h2>
          <h1 className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${rank.gradient}`} style={{ fontFamily: "var(--font-display)" }}>
            {rank.title}
          </h1>
          <p className="text-sm text-gray-400 mt-2">{rank.desc}</p>
        </div>

        {/* Big Score Box */}
        <div className="bg-black/30 rounded-2xl p-6 text-center border border-white/5 mb-8">
          <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Total Skor</div>
          <div className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" style={{ fontFamily: "var(--font-display)" }}>
            {stats.score.toLocaleString()}
          </div>
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl mb-1">🎯</span>
            <span className="text-2xl font-black text-cyan-400">{stats.accuracy}%</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Akurasi</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl mb-1">⚡</span>
            <span className="text-2xl font-black text-orange-400">{stats.maxStreak}</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Max Streak</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl mb-1">✅</span>
            <span className="text-2xl font-black text-green-400">{stats.correct}</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Benar</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl mb-1">❌</span>
            <span className="text-2xl font-black text-red-400">{stats.wrong}</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Salah</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onPlayAgain}
            className="w-full py-4 rounded-xl font-black text-white text-lg transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-[0_0_30px_rgba(255,45,120,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            MAIN LAGI
          </button>
          <button
            onClick={onHome}
            className="w-full py-4 rounded-xl font-bold text-gray-300 glass-button text-sm"
          >
            KEMBALI KE MENU
          </button>
        </div>
      </div>
    </div>
  );
}