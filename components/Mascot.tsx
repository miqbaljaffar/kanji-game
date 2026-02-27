import React from "react";
import { AnswerState } from "@/types";

interface MascotProps {
  state: AnswerState;
}

export function Mascot({ state }: MascotProps) {
  // Maskot Kucing Ninja Ceria
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 drop-shadow-xl transition-transform duration-300">
      
      {/* STATE IDLE: Menunggu Jawaban */}
      {state === "idle" && (
        <svg viewBox="0 0 100 100" className="w-full h-full animate-bounce-slow">
          {/* Telinga */}
          <path d="M 15 35 L 25 5 L 40 20 Z" fill="#facc15" />
          <path d="M 85 35 L 75 5 L 60 20 Z" fill="#facc15" />
          {/* Wajah */}
          <circle cx="50" cy="50" r="40" fill="#fef08a" />
          {/* Topeng Ninja */}
          <path d="M 10 45 Q 50 60 90 45 L 90 25 Q 50 40 10 25 Z" fill="#3b82f6" />
          {/* Mata */}
          <circle cx="35" cy="35" r="5" fill="#fff" />
          <circle cx="65" cy="35" r="5" fill="#fff" />
          <circle cx="35" cy="35" r="2.5" fill="#000" />
          <circle cx="65" cy="35" r="2.5" fill="#000" />
          {/* Mulut Senyum Kecil */}
          <path d="M 45 65 Q 50 70 55 65" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}

      {/* STATE CORRECT: Jawaban Benar */}
      {state === "correct" && (
        <svg viewBox="0 0 100 100" className="w-full h-full animate-bounce-in">
          <path d="M 15 35 L 25 5 L 40 20 Z" fill="#4ade80" />
          <path d="M 85 35 L 75 5 L 60 20 Z" fill="#4ade80" />
          <circle cx="50" cy="50" r="40" fill="#86efac" />
          <path d="M 10 45 Q 50 60 90 45 L 90 25 Q 50 40 10 25 Z" fill="#3b82f6" />
          {/* Mata Senang (Bentuk Lengkung) */}
          <path d="M 30 35 Q 35 30 40 35" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M 60 35 Q 65 30 70 35" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          {/* Mulut Ketawa Lebar */}
          <path d="M 40 60 Q 50 75 60 60 Z" fill="#ef4444" stroke="#333" strokeWidth="2" />
        </svg>
      )}

      {/* STATE WRONG: Jawaban Salah */}
      {state === "wrong" && (
        <svg viewBox="0 0 100 100" className="w-full h-full animate-shake">
          <path d="M 15 45 L 20 15 L 40 30 Z" fill="#f87171" />
          <path d="M 85 45 L 80 15 L 60 30 Z" fill="#f87171" />
          <circle cx="50" cy="50" r="40" fill="#fca5a5" />
          <path d="M 10 45 Q 50 60 90 45 L 90 25 Q 50 40 10 25 Z" fill="#3b82f6" />
          {/* Mata X (Pusing) */}
          <path d="M 30 30 L 40 40 M 40 30 L 30 40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M 60 30 L 70 40 M 70 30 L 60 40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          {/* Mulut Gelombang */}
          <path d="M 40 70 L 45 65 L 50 70 L 55 65 L 60 70" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bintang Pusing */}
          <text x="10" y="20" fontSize="15" className="animate-spin origin-center" fill="#fbbf24">⭐</text>
          <text x="75" y="20" fontSize="15" className="animate-spin origin-center" fill="#fbbf24">⭐</text>
        </svg>
      )}
    </div>
  );
}