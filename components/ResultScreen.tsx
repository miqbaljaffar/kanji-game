"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
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
  if (accuracy >= 90) return {
    title: "LEGENDARY!",  rank: "S", emoji: "👑",
    color: "#7a5a00",     bg: "#fff8d6", border: "#ffc800", bottom: "#c49800",
  };
  if (accuracy >= 70) return {
    title: "GREAT JOB!",  rank: "A", emoji: "🔥",
    color: "#7a3200",     bg: "#fff3e0", border: "#ff9600", bottom: "#cc7800",
  };
  if (accuracy >= 50) return {
    title: "NICE WORK!",  rank: "B", emoji: "👍",
    color: "#0c6b9e",     bg: "#ddf4ff", border: "#1cb0f6", bottom: "#0490c8",
  };
  return {
    title: "TRY AGAIN!",  rank: "C", emoji: "💪",
    color: "#880000",     bg: "#ffe0e0", border: "#ff4b4b", bottom: "#cc0000",
  };
}

const CONFETTI_COUNT  = 28;
const CONFETTI_COLORS = ["#ffc800","#ce82ff","#58cc02","#ff4b4b","#1cb0f6","#ff9600","#34d399"];
const CONFETTI_SHAPES = ["rect","circle","diamond"] as const;

function makeConfetti() {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => {
    const seed  = (i * 2654435761) >>> 0;
    const left  = ((seed * 1664525 + 1013904223) >>> 0) % 10000 / 100;
    const size  = 6 + (i % 5) * 2;
    const dur   = 1.0 + (i % 8) * 0.15;
    const delay = (i * 0.04) % 0.8;
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const shape = CONFETTI_SHAPES[i % CONFETTI_SHAPES.length];
    return { left, size, dur, delay, color, shape };
  });
}

const CONFETTI_ITEMS = makeConfetti();

export function ResultScreen({ stats, gameMode, difficulty, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [showThankYou,   setShowThankYou]   = useState(false);

  const showConfetti = stats.accuracy >= 70;

  const handleCloseDonation = () => {
    setIsDonationOpen(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3500);
  };

  return (
    <>
      {/* ── CONFETTI (rank S / A) ── */}
      {showConfetti && (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
          {CONFETTI_ITEMS.map((p, i) => (
            <div
              key={i}
              className="absolute top-0"
              style={{
                left:   `${p.left}%`,
                width:  p.size,
                height: p.shape === "rect" ? p.size * 0.5 : p.size,
                backgroundColor: p.color,
                borderRadius: p.shape === "circle" ? "50%" : "2px",
                transform: p.shape === "diamond" ? "rotate(45deg)" : undefined,
                animation: `confettiFall ${p.dur}s ease-in ${p.delay}s both, confettiSpin ${p.dur}s linear ${p.delay}s both`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center p-4 sm:p-6 max-w-lg mx-auto">

        {/* Maskot */}
        <div className="mb-4 animate-bounce-soft">
          <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
        </div>

        {/* ── RESULT CARD ── */}
        <div
          className="w-full screen-enter p-5 sm:p-7 text-center overflow-hidden"
          style={{
            background: "#ffffff",
            border: `2px solid ${rank.border}`,
            borderBottom: `6px solid ${rank.bottom}`,
            borderRadius: 24,
            boxShadow: `0 8px 32px ${rank.border}30`,
          }}
        >
          {/* Stripe atas dekoratif */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
            style={{ background: `linear-gradient(90deg, ${rank.border}, ${rank.bottom})` }}
          />

          {/* Rank badge */}
          <div className="flex flex-col items-center gap-2 mb-4 mt-2">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-black text-3xl sm:text-4xl animate-bounce-pop"
              style={{
                background: rank.bg,
                border: `3px solid ${rank.border}`,
                borderRadius: 16,
                color: rank.color,
                boxShadow: `0 4px 0 ${rank.bottom}`,
              }}
            >{rank.rank}</div>
            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black">
              Pelajaran Selesai!
            </p>
            <h1 className="text-xl sm:text-2xl font-black" style={{ color: rank.color }}>
              {rank.emoji} {rank.title}
            </h1>
          </div>

          <div className="rpg-divider my-3" />

          {/* Total skor */}
          <div
            className="card-enter stagger-1 p-4 mb-5 text-center"
            style={{
              background: "#fff8d6",
              border: "2px solid #ffc800",
              borderBottom: "4px solid #c49800",
              borderRadius: 14,
            }}
          >
            <p className="text-[9px] font-black text-amber-600 uppercase tracking-[0.18em] mb-1">Total Skor</p>
            <div className="text-4xl sm:text-5xl font-black text-amber-600">
              ⭐ {stats.score.toLocaleString()}
            </div>
          </div>

          {/* Grid stat 2×2 */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {[
              { val: stats.correct,        label: "Benar",   icon: "✅", bg: "#d7ffb8", border: "#58cc02",  text: "#2a7000", s: 2 },
              { val: stats.wrong,          label: "Salah",   icon: "❌", bg: "#ffe0e0", border: "#ff4b4b",  text: "#880000", s: 3 },
              { val: `${stats.accuracy}%`, label: "Akurasi", icon: "🎯", bg: "#ddf4ff", border: "#1cb0f6",  text: "#0c6b9e", s: 4 },
              { val: stats.maxStreak,      label: "Combo",   icon: "⚡", bg: "#f5e6ff", border: "#ce82ff",  text: "#6b21a8", s: 5 },
            ].map((st) => (
              <div
                key={st.label}
                className={`card-enter stagger-${st.s} p-3 sm:p-4 text-center`}
                style={{
                  background: st.bg,
                  border: `2px solid ${st.border}`,
                  borderBottom: `4px solid ${st.border}`,
                  borderRadius: 14,
                }}
              >
                <div className="text-xl mb-1">{st.icon}</div>
                <div className="text-xl sm:text-2xl font-black" style={{ color: st.text }}>{st.val}</div>
                <div className="text-[8px] font-black uppercase tracking-widest mt-0.5" style={{ color: st.text, opacity: 0.7 }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tombol aksi */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={onPlayAgain}
              className="rpg-btn-gold w-full py-4 sm:py-5 touch-manipulation rpg-glow-gold rounded-xl font-black text-base"
            >
              🚀 Main Lagi!
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={onHome}
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation font-black text-slate-600 text-sm"
              >🏠 Menu</button>
              <button
                onClick={() => setIsDonationOpen(true)}
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation font-black text-sm"
                style={{ borderColor: "#ff9600", borderBottomColor: "#cc7800", color: "#cc7800" }}
              >💖 Dukung</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL DONASI ── */}
      {isDonationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            className="relative p-4 sm:p-5 max-w-sm w-full max-h-[90svh] overflow-y-auto animate-bounce-pop rpg-scroll"
            style={{
              background: "#fffef0",
              border: "2px solid #ffc800",
              borderBottom: "6px solid #c49800",
              borderRadius: 20,
              boxShadow: "0 8px 40px rgba(255,200,0,0.25)",
            }}
          >
            <button
              onClick={handleCloseDonation}
              className="rpg-btn-red absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-xs font-black rounded-lg"
            >✕</button>

            <div className="text-center mt-2">
              <h3 className="text-sm sm:text-base font-black text-amber-700 mb-1">💖 Dukung Kami!</h3>
              <div className="rpg-divider my-2" />
              <p className="text-xs font-bold text-slate-600 mb-4 leading-relaxed">
                Scan QRIS di bawah untuk donasi seikhlasnya. Dukunganmu sangat berarti!
              </p>
              <div
                className="relative mb-4 overflow-hidden"
                style={{
                  border: "3px solid #ffc800",
                  background: "#fff",
                  borderRadius: 12,
                  aspectRatio: "1",
                  maxHeight: "clamp(140px, 40vh, 260px)",
                  width: "100%",
                }}
              >
                <Image src="/images/qris.jpeg" alt="QRIS" fill className="object-contain" />
              </div>
              <button
                onClick={handleCloseDonation}
                className="rpg-btn-gold w-full py-3.5 touch-manipulation font-black text-sm rounded-xl"
              >Tutup &amp; Selesai</button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST TERIMA KASIH ── */}
      {showThankYou && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-50 animate-slide-up w-full px-4 max-w-md pointer-events-none"
          style={{ bottom: "max(2rem, env(safe-area-inset-bottom, 2rem))" }}
        >
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{
              background: "#fffef0",
              border: "2px solid #ffc800",
              borderBottom: "4px solid #c49800",
              borderRadius: 14,
              boxShadow: "0 4px 20px rgba(255,200,0,0.3)",
            }}
          >
            <span className="text-xl shrink-0">✨</span>
            <p className="text-xs font-bold text-amber-700 leading-tight">
              Terima kasih telah mendukung pengembangan game ini!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
