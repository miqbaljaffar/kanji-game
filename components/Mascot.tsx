import React from "react";
import { AnswerState } from "@/types";

interface MascotProps {
  state: AnswerState;
}

/**
 * Maskot JRPG — sprite pixel art style (SVG).
 * Idle   : prajurit bertopi biru tenang
 * Correct: prajurit menang, angkat tangan
 * Wrong  : prajurit terpukul, X di mata
 */
export function Mascot({ state }: MascotProps) {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto drop-shadow-xl transition-transform duration-300 shrink-0">

      {/* ── IDLE ── */}
      {state === "idle" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-bounce-soft"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Bayangan */}
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          {/* Badan */}
          <rect x="10" y="17" width="12" height="10" fill="#3b1d6e" />
          {/* Sabuk */}
          <rect x="10" y="22" width="12" height="2"  fill="#fbbf24" />
          {/* Kaki */}
          <rect x="10" y="27" width="4"  height="4"  fill="#1e1040" />
          <rect x="18" y="27" width="4"  height="4"  fill="#1e1040" />
          {/* Sepatu */}
          <rect x="9"  y="30" width="5"  height="2"  fill="#0f0a1e" />
          <rect x="18" y="30" width="5"  height="2"  fill="#0f0a1e" />
          {/* Tangan kiri */}
          <rect x="6"  y="17" width="4"  height="8"  fill="#3b1d6e" />
          <rect x="5"  y="24" width="4"  height="4"  fill="#fde68a" />
          {/* Tangan kanan */}
          <rect x="22" y="17" width="4"  height="8"  fill="#3b1d6e" />
          <rect x="23" y="24" width="4"  height="4"  fill="#fde68a" />
          {/* Leher */}
          <rect x="14" y="14" width="4"  height="3"  fill="#fde68a" />
          {/* Kepala */}
          <rect x="11" y="6"  width="10" height="10" fill="#fde68a" />
          {/* Topi */}
          <rect x="10" y="5"  width="12" height="3"  fill="#1e3a8a" />
          <rect x="9"  y="4"  width="14" height="2"  fill="#1e3a8a" />
          <rect x="11" y="2"  width="10" height="3"  fill="#1e3a8a" />
          {/* Emblem topi */}
          <rect x="14" y="3"  width="4"  height="2"  fill="#fbbf24" />
          {/* Mata kiri */}
          <rect x="13" y="10" width="2"  height="2"  fill="#1e1040" />
          {/* Mata kanan */}
          <rect x="17" y="10" width="2"  height="2"  fill="#1e1040" />
          {/* Kilap mata */}
          <rect x="13" y="10" width="1"  height="1"  fill="#ffffff" />
          <rect x="17" y="10" width="1"  height="1"  fill="#ffffff" />
          {/* Senyum */}
          <rect x="14" y="13" width="4"  height="1"  fill="#c2410c" />
          <rect x="13" y="12" width="1"  height="1"  fill="#c2410c" />
          <rect x="18" y="12" width="1"  height="1"  fill="#c2410c" />
          {/* Pedang */}
          <rect x="25" y="10" width="2"  height="14" fill="#94a3b8" />
          <rect x="23" y="17" width="6"  height="2"  fill="#fbbf24" />
          <rect x="25" y="9"  width="2"  height="2"  fill="#fbbf24" />
        </svg>
      )}

      {/* ── CORRECT ── */}
      {state === "correct" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-bounce-pop"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Bayangan */}
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          {/* Badan */}
          <rect x="10" y="17" width="12" height="10" fill="#166534" />
          {/* Sabuk gold */}
          <rect x="10" y="22" width="12" height="2"  fill="#fbbf24" />
          {/* Kaki */}
          <rect x="10" y="27" width="4"  height="4"  fill="#14532d" />
          <rect x="18" y="27" width="4"  height="4"  fill="#14532d" />
          <rect x="9"  y="30" width="5"  height="2"  fill="#0f0a1e" />
          <rect x="18" y="30" width="5"  height="2"  fill="#0f0a1e" />
          {/* Tangan kiri terangkat tinggi */}
          <rect x="5"  y="9"  width="4"  height="10" fill="#166534" />
          <rect x="4"  y="7"  width="4"  height="4"  fill="#fde68a" />
          {/* Pedang terangkat */}
          <rect x="5"  y="2"  width="2"  height="8"  fill="#e2e8f0" />
          <rect x="3"  y="7"  width="6"  height="2"  fill="#fbbf24" />
          <rect x="5"  y="1"  width="2"  height="2"  fill="#fbbf24" />
          {/* Tangan kanan */}
          <rect x="23" y="17" width="4"  height="8"  fill="#166534" />
          <rect x="23" y="24" width="4"  height="4"  fill="#fde68a" />
          {/* Leher */}
          <rect x="14" y="14" width="4"  height="3"  fill="#fde68a" />
          {/* Kepala */}
          <rect x="11" y="6"  width="10" height="10" fill="#fde68a" />
          {/* Topi hijau pemenang */}
          <rect x="10" y="5"  width="12" height="3"  fill="#166534" />
          <rect x="9"  y="4"  width="14" height="2"  fill="#166534" />
          <rect x="11" y="2"  width="10" height="3"  fill="#166534" />
          <rect x="14" y="3"  width="4"  height="2"  fill="#fbbf24" />
          {/* Mata melengkung (senang) */}
          <rect x="13" y="10" width="2"  height="1"  fill="#1e1040" />
          <rect x="17" y="10" width="2"  height="1"  fill="#1e1040" />
          <rect x="12" y="11" width="1"  height="1"  fill="#1e1040" />
          <rect x="19" y="11" width="1"  height="1"  fill="#1e1040" />
          {/* Senyum lebar */}
          <rect x="13" y="13" width="6"  height="1"  fill="#c2410c" />
          <rect x="12" y="12" width="2"  height="1"  fill="#c2410c" />
          <rect x="18" y="12" width="2"  height="1"  fill="#c2410c" />
          {/* Efek bintang kemenangan */}
          <rect x="24" y="4"  width="2"  height="2"  fill="#fbbf24" />
          <rect x="22" y="2"  width="2"  height="2"  fill="#fbbf24" />
          <rect x="26" y="2"  width="2"  height="2"  fill="#fbbf24" />
          <rect x="20" y="5"  width="2"  height="2"  fill="#fde68a" />
        </svg>
      )}

      {/* ── WRONG ── */}
      {state === "wrong" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-shake"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Bayangan */}
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          {/* Badan merah */}
          <rect x="10" y="18" width="12" height="9"  fill="#7f1d1d" />
          {/* Kaki */}
          <rect x="10" y="27" width="4"  height="4"  fill="#450a0a" />
          <rect x="18" y="27" width="4"  height="4"  fill="#450a0a" />
          <rect x="9"  y="30" width="5"  height="2"  fill="#0f0a1e" />
          <rect x="18" y="30" width="5"  height="2"  fill="#0f0a1e" />
          {/* Tangan kiri jatuh */}
          <rect x="6"  y="22" width="4"  height="6"  fill="#7f1d1d" />
          <rect x="5"  y="27" width="4"  height="4"  fill="#fde68a" />
          {/* Tangan kanan jatuh */}
          <rect x="22" y="22" width="4"  height="6"  fill="#7f1d1d" />
          <rect x="23" y="27" width="4"  height="4"  fill="#fde68a" />
          {/* Leher */}
          <rect x="14" y="15" width="4"  height="3"  fill="#fde68a" />
          {/* Kepala */}
          <rect x="11" y="7"  width="10" height="10" fill="#fde68a" />
          {/* Topi rusak */}
          <rect x="10" y="6"  width="12" height="3"  fill="#450a0a" />
          <rect x="9"  y="5"  width="14" height="2"  fill="#450a0a" />
          <rect x="11" y="3"  width="8"  height="3"  fill="#450a0a" />
          {/* Mata X kiri */}
          <rect x="12" y="10" width="2"  height="2"  fill="#1e1040" />
          <rect x="14" y="12" width="2"  height="2"  fill="#1e1040" />
          <rect x="14" y="10" width="2"  height="2"  fill="#1e1040" />
          <rect x="12" y="12" width="2"  height="2"  fill="#1e1040" />
          {/* Mata X kanan */}
          <rect x="17" y="10" width="2"  height="2"  fill="#1e1040" />
          <rect x="19" y="12" width="2"  height="2"  fill="#1e1040" />
          <rect x="19" y="10" width="2"  height="2"  fill="#1e1040" />
          <rect x="17" y="12" width="2"  height="2"  fill="#1e1040" />
          {/* Mulut sedih */}
          <rect x="13" y="15" width="6"  height="1"  fill="#c2410c" />
          <rect x="12" y="14" width="2"  height="1"  fill="#c2410c" />
          <rect x="18" y="14" width="2"  height="1"  fill="#c2410c" />
          {/* Efek sakit */}
          <rect x="22" y="7"  width="6"  height="1"  fill="#f87171" />
          <rect x="24" y="5"  width="1"  height="5"  fill="#f87171" />
          <rect x="26" y="5"  width="1"  height="5"  fill="#f87171" />
        </svg>
      )}
    </div>
  );
}
