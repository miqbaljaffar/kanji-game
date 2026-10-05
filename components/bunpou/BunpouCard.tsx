"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface BunpouCardProps {
  entry: BunpouDictionaryEntry;
  onSelect: (entry: BunpouDictionaryEntry) => void;
}

const LEVEL_STYLE = {
  N5: { bg: "#d7ffb8", border: "#58cc02", bottom: "#46a302", text: "#2a7000" },
  N4: { bg: "#ddf4ff", border: "#1cb0f6", bottom: "#0490c8", text: "#0c6b9e" },
  N3: { bg: "#f3e8ff", border: "#a855f7", bottom: "#7e22ce", text: "#6b21a8" },
} as const;

export function BunpouCard({ entry, onSelect }: BunpouCardProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const lv = LEVEL_STYLE[entry.level as "N5" | "N4" | "N3"] ?? LEVEL_STYLE.N5;

  const playTTS = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window && entry.exampleSentences.length > 0) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(entry.exampleSentences[0].japanese);
      utterance.lang  = "ja-JP";
      utterance.rate  = 0.85;
      setIsPlayingAudio(true);
      utterance.onend   = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      onClick={() => onSelect(entry)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(entry); } }}
      aria-label={`Lihat detail pola bunpou ${entry.pattern} — ${entry.meaning}`}
      className="group relative flex flex-col justify-between p-4 sm:p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 touch-manipulation overflow-hidden card-enter"
      style={{
        background: "#ffffff",
        border: `2px solid ${lv.border}`,
        borderBottom: `4px solid ${lv.bottom}`,
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: lv.bg, color: lv.text, border: `1px solid ${lv.border}` }}
          >
            {entry.level}
          </span>
          <span
            className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: "#ddf4ff", color: "#0c6b9e", border: "1px solid #1cb0f6" }}
          >
            {entry.category}
          </span>
        </div>
        {entry.exampleSentences.length > 0 && (
          <button
            type="button"
            onClick={playTTS}
            aria-label={isPlayingAudio ? "Sedang memutar contoh kalimat" : `Putar contoh kalimat ${entry.pattern}`}
            className={clsx(
              "w-9 h-9 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation rounded-xl",
            )}
            style={isPlayingAudio ? {
              background: "#fff8d6",
              border: "2px solid #ffc800",
              borderBottom: "3px solid #c49800",
            } : {
              background: "#f3f4f6",
              border: "2px solid #e5e7eb",
              borderBottom: "3px solid #d1d5db",
            }}
          >
            🔊
          </button>
        )}
      </div>

      {/* Pattern */}
      <div className="my-1 space-y-1">
        <div
          className="text-xl sm:text-2xl font-black text-slate-800 group-hover:text-green-600 transition-colors leading-snug"
          style={{ fontFamily: "var(--font-jp)" }}
        >
          {entry.pattern}
        </div>
        <div className="text-[9px] font-bold text-slate-400 italic">{entry.romajiPattern}</div>
      </div>

      {/* Formula & Meaning */}
      <div
        className="mt-3 pt-2.5 border-t border-gray-100 space-y-2"
      >
        <div
          className="px-2.5 py-1.5 text-[9px] font-mono font-bold text-amber-700 line-clamp-2"
          style={{ background: "#fffef0", border: "1px solid #fde68a", borderRadius: 6 }}
        >
          📐 {entry.formula}
        </div>
        <div className="text-xs sm:text-sm font-black text-slate-700 line-clamp-2 leading-snug">
          {entry.meaning}
        </div>
        <span
          className="text-[7px] font-black px-2 py-0.5 rounded-full inline-block"
          style={{ background: "#f5e6ff", color: "#6b21a8", border: "1px solid #ce82ff" }}
        >
          DETAIL 📝
        </span>
      </div>
    </div>
  );
}
