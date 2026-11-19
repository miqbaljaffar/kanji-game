"use client";
import { useState } from "react";
import Image from "next/image";
import { GameStats, GameMode, Difficulty, JlptLevel } from "@/types";
import { Mascot } from "./Mascot";
import clsx from "clsx";

interface ResultScreenProps {
  stats: GameStats;
  gameMode: GameMode;
  difficulty: Difficulty;
  level: JlptLevel;
  highScore: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

/* Level badge classes — reuse lvl-* dari globals.css */
const LEVEL_CFG: Record<JlptLevel, { label: string; icon: string; cls: string; textCls: string }> = {
  N5: { label: "JLPT N5", icon: "🟢", cls: "lvl-N5", textCls: "lvl-text-N5" },
  N4: { label: "JLPT N4", icon: "🔵", cls: "lvl-N4", textCls: "lvl-text-N4" },
  N3: { label: "JLPT N3", icon: "🟣", cls: "lvl-N3", textCls: "lvl-text-N3" },
};

function getRankDetail(accuracy: number) {
  if (accuracy >= 90) return { title: "LEGENDARY!", rank: "S", emoji: "👑", color: "#7a5a00", bg: "#fff8d6", bgDk: "#1a1400", border: "#ffc800", borderDk: "#a07000", bottom: "#c49800" };
  if (accuracy >= 70) return { title: "GREAT JOB!", rank: "A", emoji: "🔥", color: "#7a3200", bg: "#fff3e0", bgDk: "#1a0e00", border: "#ff9600", borderDk: "#804a00", bottom: "#cc7800" };
  if (accuracy >= 50) return { title: "NICE WORK!", rank: "B", emoji: "👍", color: "#0c6b9e", bg: "#ddf4ff", bgDk: "#071828", border: "#1cb0f6", borderDk: "#0a5a80", bottom: "#0490c8" };
  return               { title: "TRY AGAIN!", rank: "C", emoji: "💪", color: "#880000", bg: "#ffe0e0", bgDk: "#1a0808", border: "#ff4b4b", borderDk: "#8a2020", bottom: "#cc0000" };
}

/* stat grid configs — reuse result-* classes */
const STAT_GRID = [
  { key: "correct",  label: "Benar",   icon: "✅", cls: "result-benar",   textCls: "result-text-benar"   },
  { key: "wrong",    label: "Salah",   icon: "❌", cls: "result-salah",   textCls: "result-text-salah"   },
  { key: "accuracy", label: "Akurasi", icon: "🎯", cls: "result-akurasi", textCls: "result-text-akurasi" },
  { key: "streak",   label: "Combo",   icon: "⚡", cls: "result-combo",   textCls: "result-text-combo"   },
] as const;

const CONFETTI_COUNT  = 28;
const CONFETTI_COLORS = ["#ffc800","#ce82ff","#58cc02","#ff4b4b","#1cb0f6","#ff9600","#34d399"];
const CONFETTI_SHAPES = ["rect","circle","diamond"] as const;
const CONFETTI_ITEMS  = Array.from({ length: CONFETTI_COUNT }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  return {
    left:  ((seed * 1664525 + 1013904223) >>> 0) % 10000 / 100,
    size:  6 + (i % 5) * 2,
    dur:   1.0 + (i % 8) * 0.15,
    delay: (i * 0.04) % 0.8,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    shape: CONFETTI_SHAPES[i % CONFETTI_SHAPES.length],
  };
});

export function ResultScreen({ stats, gameMode, difficulty, level, highScore, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);
  const lvl  = LEVEL_CFG[level];
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [showThankYou,   setShowThankYou]   = useState(false);

  const showConfetti = stats.accuracy >= 70;
  const isNewHigh    = stats.score > 0 && stats.score >= highScore;

  const handleCloseDonation = () => {
    setIsDonationOpen(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3500);
  };

  const statValues: Record<string, string | number> = {
    correct:  stats.correct,
    wrong:    stats.wrong,
    accuracy: `${stats.accuracy}%`,
    streak:   stats.maxStreak,
  };

  return (
    <>
      {/* ── CONFETTI ── */}
      {showConfetti && (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden" aria-hidden="true">
          {CONFETTI_ITEMS.map((p, i) => (
            <div key={i} className="absolute top-0" style={{
              left: `${p.left}%`, width: p.size,
              height: p.shape === "rect" ? p.size * 0.5 : p.size,
              backgroundColor: p.color,
              borderRadius: p.shape === "circle" ? "50%" : "2px",
              transform: p.shape === "diamond" ? "rotate(45deg)" : undefined,
              animation: `confettiFall ${p.dur}s ease-in ${p.delay}s both, confettiSpin ${p.dur}s linear ${p.delay}s both`,
            }} />
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center p-4 sm:p-6 xl:p-8 max-w-lg xl:max-w-xl mx-auto">
        {/* Maskot */}
        <div className="mb-4 animate-bounce-soft">
          <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
        </div>

        {/* ── RESULT CARD ── */}
        <div
          className="dm-result-card w-full screen-enter p-5 sm:p-7 text-center relative overflow-hidden"
          style={{
            border: `2px solid ${rank.border}`,
            borderBottom: `6px solid ${rank.bottom}`,
            borderRadius: 24,
            boxShadow: `0 8px 32px ${rank.border}30`,
          }}
        >
          {/* Rank-color stripe */}
          <style>{`html.dark .dm-result-card { background: var(--bg-surface) !important; }`}</style>
          <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
            style={{ background: `linear-gradient(90deg, ${rank.border}, ${rank.bottom})` }} aria-hidden="true" />

          {/* Level Badge */}
          <div className="flex justify-center mb-3">
            <div className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl", lvl.cls)}
              style={{ border: "1.5px solid" }}>
              <span className="text-base" aria-hidden="true">{lvl.icon}</span>
              <span className={clsx("text-xs font-black", lvl.textCls)}>{lvl.label}</span>
            </div>
          </div>

          {/* Rank badge */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-black text-3xl sm:text-4xl animate-bounce-pop rank-box"
              style={{ background: rank.bg, border: `3px solid ${rank.border}`, borderRadius: 16, color: rank.color, boxShadow: `0 4px 0 ${rank.bottom}` }}
              aria-label={`Peringkat ${rank.rank}`}
            >
              <style>{`html.dark .rank-box { background: ${rank.bgDk} !important; border-color: ${rank.borderDk} !important; }`}</style>
              {rank.rank}
            </div>
            <p className="text-xs dm-text-muted uppercase tracking-[0.2em] font-black">Pelajaran Selesai!</p>
            <h1 className="text-xl sm:text-2xl font-black" style={{ color: rank.color }}>
              {rank.emoji} {rank.title}
            </h1>
          </div>

          <div className="rpg-divider my-3" aria-hidden="true" />

          {/* High Score Banner */}
          {isNewHigh && (
            <div className="result-skor mb-4 py-2.5 px-4 flex items-center justify-center gap-2 animate-bounce-pop"
              style={{ borderRadius: 12, border: "2px solid", borderBottom: "4px solid" }}>
              <span className="text-xl" aria-hidden="true">🏆</span>
              <span className="text-sm font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                Rekor Baru! High Score Dipecahkan!
              </span>
              <span className="text-xl" aria-hidden="true">🏆</span>
            </div>
          )}

          {/* Total Skor */}
          <div className="result-skor card-enter stagger-1 p-4 mb-5 text-center"
            style={{ borderRadius: 14, border: "2px solid", borderBottom: "4px solid" }}>
            <p className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.18em] mb-1">Total Skor</p>
            <div className="text-4xl sm:text-5xl font-black text-amber-600 dark:text-amber-400 tabular-nums">
              ⭐ {stats.score.toLocaleString()}
            </div>
          </div>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 mb-5">
            {STAT_GRID.map((st, si) => (
              <div key={st.key} className={clsx(`card-enter stagger-${si + 2}`, st.cls, "p-3 sm:p-4 text-center")}
                style={{ borderRadius: 14, border: "2px solid", borderBottom: "4px solid" }}>
                <div className="text-xl mb-1" aria-hidden="true">{st.icon}</div>
                <div className={clsx("text-xl sm:text-2xl font-black tabular-nums", st.textCls)}>{statValues[st.key]}</div>
                <div className={clsx("text-[11px] font-black uppercase tracking-widest mt-0.5", st.textCls)} style={{ opacity: 0.7 }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xl:flex-row gap-2.5">
            <button onClick={onPlayAgain} aria-label="Main lagi dari awal"
              className="rpg-btn-gold xl:flex-1 w-full py-4 sm:py-5 touch-manipulation rpg-glow-gold rounded-xl font-black text-base">
              🚀 Main Lagi!
            </button>
            <div className="grid grid-cols-2 xl:flex gap-2.5 xl:flex-1">
              <button onClick={onHome} aria-label="Kembali ke menu utama"
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation font-black dm-text-secondary text-sm">
                🏠 Menu
              </button>
              <button onClick={() => setIsDonationOpen(true)} aria-label="Dukung pengembangan"
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation font-black text-sm"
                style={{ borderColor: "#ff9600", borderBottomColor: "#cc7800", color: "#cc7800" }}>
                💖 Dukung
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL DONASI ── */}
      {isDonationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="dm-modal-content relative p-4 sm:p-5 max-w-sm w-full max-h-[90svh] overflow-y-auto animate-bounce-pop rpg-scroll"
            style={{ borderRadius: 20, boxShadow: "0 8px 40px rgba(0,0,0,0.3)", border: "2px solid", borderBottom: "6px solid" }}>
            <button onClick={handleCloseDonation} aria-label="Tutup modal donasi"
              className="rpg-btn-red absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-xs font-black rounded-lg">✕</button>
            <div className="text-center mt-2">
              <h3 className="text-sm sm:text-base font-black text-amber-700 dark:text-amber-400 mb-1">💖 Dukung Kami!</h3>
              <div className="rpg-divider my-2" />
              <p className="text-xs font-bold dm-text-secondary mb-4 leading-relaxed">
                Scan QRIS di bawah untuk donasi seikhlasnya. Dukunganmu sangat berarti!
              </p>
              <div className="relative mb-4 overflow-hidden bg-white"
                style={{ border: "3px solid #ffc800", borderRadius: 12, aspectRatio: "1", maxHeight: "clamp(140px, 40vh, 260px)", width: "100%" }}>
                <Image src="/images/qris.jpeg" alt="QRIS untuk donasi" fill className="object-contain" />
              </div>
              <button onClick={handleCloseDonation} className="rpg-btn-gold w-full py-3.5 touch-manipulation font-black text-sm rounded-xl">
                Tutup &amp; Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST TERIMA KASIH ── */}
      {showThankYou && (
        <div className="fixed left-1/2 -translate-x-1/2 z-50 animate-slide-up w-full px-4 max-w-md pointer-events-none"
          style={{ bottom: "max(2rem, env(safe-area-inset-bottom, 2rem))" }} aria-live="polite">
          <div className="dm-toast flex items-center gap-3 px-5 py-4"
            style={{ border: "2px solid", borderBottom: "4px solid", boxShadow: "0 4px 20px rgba(255,200,0,0.3)" }}>
            <span className="text-xl shrink-0" aria-hidden="true">✨</span>
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 leading-tight">
              Terima kasih telah mendukung pengembangan game ini!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
