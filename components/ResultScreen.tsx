"use client";
import { useState } from "react";
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
  if (accuracy >= 90)
    return { title: "LEGENDARY!", rank: "S", emoji: "👑", color: "text-yellow-300", borderColor: "#fbbf24", glow: "rgba(251,191,36,0.4)" };
  if (accuracy >= 70)
    return { title: "GREAT JOB!", rank: "A", emoji: "🔥", color: "text-orange-300", borderColor: "#fb923c", glow: "rgba(251,146,60,0.4)" };
  if (accuracy >= 50)
    return { title: "NICE WORK!", rank: "B", emoji: "👍", color: "text-blue-300", borderColor: "#60a5fa", glow: "rgba(96,165,250,0.4)" };
  return { title: "TRY AGAIN!", rank: "C", emoji: "💀", color: "text-purple-300", borderColor: "#a78bfa", glow: "rgba(167,139,250,0.3)" };
}

export function ResultScreen({ stats, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [showThankYou,   setShowThankYou]   = useState(false);

  const handleCloseDonation = () => {
    setIsDonationOpen(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3500);
  };

  return (
    <>
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center p-4 sm:p-6 max-w-lg mx-auto">

        {/* Maskot */}
        <div className="mb-4 animate-bounce-soft">
          <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
        </div>

        {/* ── RESULT CARD ── */}
        <div
          className="w-full rpg-box relative p-5 sm:p-7 text-center animate-fade-up overflow-hidden"
          style={{
            borderColor: rank.borderColor,
            boxShadow: `0 0 0 1px #0f0a1e, 0 0 40px ${rank.glow}`,
          }}
        >
          {/* Corner decorations pakai warna rank */}
          <span className="rpg-corner rpg-corner-tl" style={{ borderColor: rank.borderColor }} />
          <span className="rpg-corner rpg-corner-tr" style={{ borderColor: rank.borderColor }} />
          <span className="rpg-corner rpg-corner-bl" style={{ borderColor: rank.borderColor }} />
          <span className="rpg-corner rpg-corner-br" style={{ borderColor: rank.borderColor }} />

          {/* Garis atas dekoratif */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${rank.borderColor}, transparent)` }}
          />

          {/* Badge Rank */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-black text-2xl sm:text-3xl"
              style={{
                fontFamily: "var(--font-pixel)",
                background: "#0f0a1e",
                border: `3px solid ${rank.borderColor}`,
                color: rank.borderColor,
                boxShadow: `0 0 12px ${rank.glow}`,
              }}
            >
              {rank.rank}
            </div>
          </div>

          <p
            className="text-[8px] sm:text-[9px] text-purple-400 uppercase tracking-[0.2em] mb-1"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            PELAJARAN SELESAI
          </p>
          <h1
            className={clsx_result("text-xl sm:text-2xl font-black mb-1", rank.color)}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {rank.emoji} {rank.title}
          </h1>

          <div className="rpg-divider my-3" />

          {/* Skor utama */}
          <div
            className="rpg-box-gold relative p-4 mb-5 text-center"
            style={{ boxShadow: "0 0 20px rgba(251,191,36,0.2)" }}
          >
            <span className="rpg-corner rpg-corner-tl" />
            <span className="rpg-corner rpg-corner-br" />
            <p
              className="text-[8px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              TOTAL SKOR
            </p>
            <div
              className="text-4xl sm:text-5xl font-black text-yellow-300"
              style={{
                fontFamily: "var(--font-pixel)",
                textShadow: "0 0 20px rgba(251,191,36,0.7)",
              }}
            >
              ⭐ {stats.score.toLocaleString()}
            </div>
          </div>

          {/* Grid stat 2×2 */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {[
              { val: stats.correct,   label: "Benar",   icon: "✅", color: "text-emerald-300", border: "#4ade80" },
              { val: stats.wrong,     label: "Salah",   icon: "❌", color: "text-red-300",     border: "#f87171" },
              { val: `${stats.accuracy}%`, label: "Akurasi", icon: "🎯", color: "text-blue-300", border: "#60a5fa" },
              { val: stats.maxStreak, label: "Combo",   icon: "⚡", color: "text-purple-300",  border: "#a78bfa" },
            ].map((s) => (
              <div
                key={s.label}
                className="rpg-box relative p-3 sm:p-4 text-center"
                style={{ borderColor: s.border }}
              >
                <div className="text-xl mb-1">{s.icon}</div>
                <div
                  className={clsx_result("text-xl sm:text-2xl font-black", s.color)}
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-[7px] sm:text-[8px] text-purple-400 font-black uppercase tracking-widest mt-0.5"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tombol aksi */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={onPlayAgain}
              className="rpg-btn-gold w-full py-4 sm:py-5 touch-manipulation rpg-glow-gold"
              style={{ fontFamily: "var(--font-pixel)", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              ⚔ MAIN LAGI!
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={onHome}
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "9px", letterSpacing: "0.05em" }}
              >
                🏠 MENU
              </button>
              <button
                onClick={() => setIsDonationOpen(true)}
                className="rpg-btn py-3.5 sm:py-4 touch-manipulation"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "9px",
                  letterSpacing: "0.05em",
                  borderColor: "#f472b6",
                  color: "#f9a8d4",
                }}
              >
                💖 DUKUNG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL DONASI ── */}
      {isDonationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="rpg-box-gold relative p-5 max-w-sm w-full animate-bounce-pop"
            style={{ boxShadow: "0 0 0 1px #0f0a1e, 0 0 40px rgba(251,191,36,0.3)" }}
          >
            <span className="rpg-corner rpg-corner-tl" />
            <span className="rpg-corner rpg-corner-tr" />
            <span className="rpg-corner rpg-corner-bl" />
            <span className="rpg-corner rpg-corner-br" />

            <button
              onClick={handleCloseDonation}
              className="rpg-btn-red absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-xs font-black"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              ✕
            </button>

            <div className="text-center mt-2">
              <h3
                className="text-sm sm:text-base font-black text-yellow-300 mb-1"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                💖 DUKUNG KAMI!
              </h3>
              <div className="rpg-divider my-2" />
              <p className="text-xs font-bold text-purple-200 mb-4 leading-relaxed">
                Scan QRIS di bawah untuk donasi seikhlasnya. Dukunganmu sangat berarti!
              </p>

              <div
                className="relative aspect-square mb-4 overflow-hidden"
                style={{ border: "3px solid #fbbf24", background: "#fff" }}
              >
                <Image src="/images/qris.jpeg" alt="QRIS" fill className="object-contain" />
              </div>

              <button
                onClick={handleCloseDonation}
                className="rpg-btn-gold w-full py-3.5 touch-manipulation"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "9px", letterSpacing: "0.05em" }}
              >
                TUTUP &amp; SELESAI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST TERIMA KASIH ── */}
      {showThankYou && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-slide-up w-full px-4 max-w-md pointer-events-none">
          <div
            className="rpg-box-gold flex items-center gap-3 px-5 py-4"
            style={{ boxShadow: "0 0 20px rgba(251,191,36,0.4)" }}
          >
            <span className="text-xl shrink-0">✨</span>
            <p className="text-xs font-bold text-yellow-200 leading-tight">
              Terima kasih telah mendukung pengembangan game ini!
            </p>
          </div>
        </div>
      )}
    </>
  );
}

/* helper kecil agar tidak import cn/clsx */
function clsx_result(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(" ");
}
