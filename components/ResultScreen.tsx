"use client";
import { GameStats, GameMode, Difficulty } from "@/types";

interface ResultScreenProps {
  stats: GameStats;
  gameMode: GameMode;
  difficulty: Difficulty;
  onPlayAgain: () => void;
  onHome: () => void;
}

function getRank(accuracy: number, score: number): { label: string; emoji: string; color: string; message: string } {
  if (accuracy >= 95 && score >= 2500) return { label: "MASTER", emoji: "👑", color: "text-yellow-400", message: "Luar biasa! Kamu benar-benar MASTER kanji!" };
  if (accuracy >= 85) return { label: "HEBAT", emoji: "🏆", color: "text-orange-400", message: "Keren sekali! Hampir sempurna!" };
  if (accuracy >= 70) return { label: "BAGUS", emoji: "⭐", color: "text-cyan-400", message: "Bagus! Terus berlatih ya!" };
  if (accuracy >= 50) return { label: "CUKUP", emoji: "🌸", color: "text-pink-400", message: "Lumayan! Jangan menyerah!" };
  return { label: "BELAJAR", emoji: "📚", color: "text-gray-400", message: "Yuk belajar lebih giat lagi!" };
}

const MODE_EMOJIS: Record<GameMode, string> = {
  "kanji-to-arti": "🀄",
  "arti-to-kanji": "🎯",
  "hiragana-to-arti": "✨",
};

const DIFF_LABELS: Record<Difficulty, string> = {
  easy: "Santai 🌸",
  medium: "Normal ⚡",
  hard: "Sulit 🔥",
};

export function ResultScreen({ stats, gameMode, difficulty, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRank(stats.accuracy, stats.score);

  const bars = [
    { label: "Benar", value: stats.correct, total: stats.total, color: "bg-green-400", textColor: "text-green-400" },
    { label: "Salah", value: stats.wrong, total: stats.total, color: "bg-red-400", textColor: "text-red-400" },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm mx-auto">
        {/* Rank Badge */}
        <div className="text-center mb-6 animate-bounce-in">
          <div className="text-7xl mb-2">{rank.emoji}</div>
          <div className={`text-4xl font-black ${rank.color}`} style={{ fontFamily: "var(--font-display)", textShadow: "0 0 20px currentColor" }}>
            {rank.label}!
          </div>
          <div className="text-gray-400 text-sm mt-2">{rank.message}</div>
        </div>

        {/* Score Card */}
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 mb-4 animate-slide-up">
          {/* Big Score */}
          <div className="text-center mb-4">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total Skor</div>
            <div className="text-5xl font-black text-white neon-text-yellow" style={{ fontFamily: "var(--font-display)" }}>
              {stats.score.toLocaleString()}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "✅ Benar", value: stats.correct, color: "text-green-400" },
              { label: "❌ Salah", value: stats.wrong, color: "text-red-400" },
              { label: "🎯 Akurasi", value: `${stats.accuracy}%`, color: "text-cyan-400" },
              { label: "🔥 Max Streak", value: `×${stats.maxStreak}`, color: "text-orange-400" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-white/5 rounded-xl py-3 px-2">
                <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                <div className={`text-xl font-black ${item.color}`}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          {bars.map((bar) => (
            <div key={bar.label} className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span className={bar.textColor}>{bar.label}</span>
                <span className="text-gray-400">{bar.value}/{bar.total}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${bar.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${(bar.value / bar.total) * 100}%` }}
                />
              </div>
            </div>
          ))}

          {/* Game info */}
          <div className="flex justify-center gap-3 mt-4 pt-3 border-t border-white/10">
            <span className="text-xs text-gray-600">{MODE_EMOJIS[gameMode]}</span>
            <span className="text-xs text-gray-500">{DIFF_LABELS[difficulty]}</span>
            <span className="text-xs text-gray-600">⏱ {stats.timeSpent}s</span>
          </div>
        </div>

        {/* Star rating based on accuracy */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-2xl transition-all ${star <= Math.round(stats.accuracy / 20) ? "opacity-100" : "opacity-20"}`}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onHome}
            className="flex-1 py-3 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white 
              transition-all duration-200 font-bold cursor-pointer text-sm"
          >
            🏠 Menu
          </button>
          <button
            onClick={onPlayAgain}
            className="flex-1 py-3 rounded-xl font-black text-white cursor-pointer text-sm
              bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400
              transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 0 20px rgba(255, 45, 120, 0.5)" }}
          >
            🎮 Main Lagi!
          </button>
        </div>

        {/* Encouragement */}
        <p className="text-center text-xs text-gray-600 mt-4">
          頑張ってください！ Semangat belajar! 🌸
        </p>
      </div>
    </div>
  );
}
