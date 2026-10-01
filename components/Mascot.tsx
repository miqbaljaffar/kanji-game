import React from "react";
import { AnswerState } from "@/types";

interface MascotProps {
  state: AnswerState;
}

const STATE_LABEL: Record<AnswerState, string> = {
  idle:    "Maskot sedang bersiap",
  correct: "Maskot merayakan jawaban benar",
  wrong:   "Maskot terpukul karena jawaban salah",
};

export function Mascot({ state }: MascotProps) {
  return (
    <div
      className="relative w-16 h-16 md:w-20 md:h-20 mx-auto drop-shadow-xl transition-transform duration-300 shrink-0"
      role="img"
      aria-label={STATE_LABEL[state]}
    >

      {/* ── IDLE ── */}
      {state === "idle" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-bounce-soft"
          style={{ imageRendering: "pixelated" }}
          aria-hidden="true"
        >
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          <rect x="10" y="17" width="12" height="10" fill="#1cb0f6" />
          <rect x="10" y="22" width="12" height="2"  fill="#ffc800" />
          <rect x="10" y="27" width="4"  height="4"  fill="#0490c8" />
          <rect x="18" y="27" width="4"  height="4"  fill="#0490c8" />
          <rect x="9"  y="30" width="5"  height="2"  fill="#1e3a8a" />
          <rect x="18" y="30" width="5"  height="2"  fill="#1e3a8a" />
          <rect x="6"  y="17" width="4"  height="8"  fill="#1cb0f6" />
          <rect x="5"  y="24" width="4"  height="4"  fill="#fde68a" />
          <rect x="22" y="17" width="4"  height="8"  fill="#1cb0f6" />
          <rect x="23" y="24" width="4"  height="4"  fill="#fde68a" />
          <rect x="14" y="14" width="4"  height="3"  fill="#fde68a" />
          <rect x="11" y="6"  width="10" height="10" fill="#fde68a" />
          <rect x="10" y="5"  width="12" height="3"  fill="#1e3a8a" />
          <rect x="9"  y="4"  width="14" height="2"  fill="#1e3a8a" />
          <rect x="11" y="2"  width="10" height="3"  fill="#1e3a8a" />
          <rect x="14" y="3"  width="4"  height="2"  fill="#58cc02" />
          <rect x="13" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="17" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="13" y="10" width="1"  height="1"  fill="#ffffff" />
          <rect x="17" y="10" width="1"  height="1"  fill="#ffffff" />
          <rect x="14" y="13" width="4"  height="1"  fill="#c2410c" />
          <rect x="13" y="12" width="1"  height="1"  fill="#c2410c" />
          <rect x="18" y="12" width="1"  height="1"  fill="#c2410c" />
          <rect x="25" y="10" width="2"  height="14" fill="#94a3b8" />
          <rect x="23" y="17" width="6"  height="2"  fill="#ffc800" />
          <rect x="25" y="9"  width="2"  height="2"  fill="#ffc800" />
        </svg>
      )}

      {/* ── CORRECT ── */}
      {state === "correct" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-bounce-pop"
          style={{ imageRendering: "pixelated" }}
          aria-hidden="true"
        >
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          <rect x="10" y="17" width="12" height="10" fill="#58cc02" />
          <rect x="10" y="22" width="12" height="2"  fill="#ffc800" />
          <rect x="10" y="27" width="4"  height="4"  fill="#46a302" />
          <rect x="18" y="27" width="4"  height="4"  fill="#46a302" />
          <rect x="9"  y="30" width="5"  height="2"  fill="#1a5c00" />
          <rect x="18" y="30" width="5"  height="2"  fill="#1a5c00" />
          <rect x="5"  y="9"  width="4"  height="10" fill="#58cc02" />
          <rect x="4"  y="7"  width="4"  height="4"  fill="#fde68a" />
          <rect x="5"  y="2"  width="2"  height="8"  fill="#e2e8f0" />
          <rect x="3"  y="7"  width="6"  height="2"  fill="#ffc800" />
          <rect x="5"  y="1"  width="2"  height="2"  fill="#ffc800" />
          <rect x="23" y="17" width="4"  height="8"  fill="#58cc02" />
          <rect x="23" y="24" width="4"  height="4"  fill="#fde68a" />
          <rect x="14" y="14" width="4"  height="3"  fill="#fde68a" />
          <rect x="11" y="6"  width="10" height="10" fill="#fde68a" />
          <rect x="10" y="5"  width="12" height="3"  fill="#46a302" />
          <rect x="9"  y="4"  width="14" height="2"  fill="#46a302" />
          <rect x="11" y="2"  width="10" height="3"  fill="#46a302" />
          <rect x="14" y="3"  width="4"  height="2"  fill="#ffc800" />
          <rect x="13" y="10" width="2"  height="1"  fill="#3c3c3c" />
          <rect x="17" y="10" width="2"  height="1"  fill="#3c3c3c" />
          <rect x="12" y="11" width="1"  height="1"  fill="#3c3c3c" />
          <rect x="19" y="11" width="1"  height="1"  fill="#3c3c3c" />
          <rect x="13" y="13" width="6"  height="1"  fill="#c2410c" />
          <rect x="12" y="12" width="2"  height="1"  fill="#c2410c" />
          <rect x="18" y="12" width="2"  height="1"  fill="#c2410c" />
          <rect x="24" y="4"  width="2"  height="2"  fill="#ffc800" />
          <rect x="22" y="2"  width="2"  height="2"  fill="#ffc800" />
          <rect x="26" y="2"  width="2"  height="2"  fill="#ffc800" />
          <rect x="20" y="5"  width="2"  height="2"  fill="#fde68a" />
        </svg>
      )}

      {/* ── WRONG ── */}
      {state === "wrong" && (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full animate-shake"
          style={{ imageRendering: "pixelated" }}
          aria-hidden="true"
        >
          <ellipse cx="16" cy="30" rx="7" ry="2" fill="rgba(0,0,0,0.3)" />
          <rect x="10" y="18" width="12" height="9"  fill="#ff4b4b" />
          <rect x="10" y="27" width="4"  height="4"  fill="#cc0000" />
          <rect x="18" y="27" width="4"  height="4"  fill="#cc0000" />
          <rect x="9"  y="30" width="5"  height="2"  fill="#880000" />
          <rect x="18" y="30" width="5"  height="2"  fill="#880000" />
          <rect x="6"  y="22" width="4"  height="6"  fill="#ff4b4b" />
          <rect x="5"  y="27" width="4"  height="4"  fill="#fde68a" />
          <rect x="22" y="22" width="4"  height="6"  fill="#ff4b4b" />
          <rect x="23" y="27" width="4"  height="4"  fill="#fde68a" />
          <rect x="14" y="15" width="4"  height="3"  fill="#fde68a" />
          <rect x="11" y="7"  width="10" height="10" fill="#fde68a" />
          <rect x="10" y="6"  width="12" height="3"  fill="#cc0000" />
          <rect x="9"  y="5"  width="14" height="2"  fill="#cc0000" />
          <rect x="11" y="3"  width="8"  height="3"  fill="#cc0000" />
          <rect x="12" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="14" y="12" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="14" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="12" y="12" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="17" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="19" y="12" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="19" y="10" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="17" y="12" width="2"  height="2"  fill="#3c3c3c" />
          <rect x="13" y="15" width="6"  height="1"  fill="#c2410c" />
          <rect x="12" y="14" width="2"  height="1"  fill="#c2410c" />
          <rect x="18" y="14" width="2"  height="1"  fill="#c2410c" />
          <rect x="22" y="7"  width="6"  height="1"  fill="#ff4b4b" />
          <rect x="24" y="5"  width="1"  height="5"  fill="#ff4b4b" />
          <rect x="26" y="5"  width="1"  height="5"  fill="#ff4b4b" />
        </svg>
      )}
    </div>
  );
}
