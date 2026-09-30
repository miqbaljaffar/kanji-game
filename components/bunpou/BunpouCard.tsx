"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface BunpouCardProps {
  entry: BunpouDictionaryEntry;
  onSelect: (entry: BunpouDictionaryEntry) => void;
}

export function BunpouCard({ entry, onSelect }: BunpouCardProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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
      className="rpg-box group relative flex flex-col justify-between p-4 sm:p-5 cursor-pointer hover:-translate-y-1 transition-all duration-200 active:scale-95 touch-manipulation overflow-hidden"
      style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }}
    >
      <span className="rpg-corner rpg-corner-tl" style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }} />
      <span className="rpg-corner rpg-corner-br" style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }} />

      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={clsx(
              "rpg-badge text-[8px]",
              entry.level === "N5" ? "border-emerald-500 text-emerald-300" : "border-indigo-400 text-indigo-300"
            )}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {entry.level}
          </span>
          <span
            className="rpg-badge text-[8px]"
            style={{ fontFamily: "var(--font-pixel)", borderColor: "#60a5fa", color: "#93c5fd" }}
          >
            {entry.category}
          </span>
        </div>
        {entry.exampleSentences.length > 0 && (
          <button
            type="button"
            onClick={playTTS}
            className={clsx(
              "w-8 h-8 flex items-center justify-center text-xs transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation",
              isPlayingAudio ? "rpg-btn-gold animate-pulse scale-110" : "rpg-btn"
            )}
          >
            🔊
          </button>
        )}
      </div>

      {/* Pattern */}
      <div className="my-1 space-y-1">
        <div
          className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-300 transition-colors leading-snug"
          style={{
            fontFamily: "var(--font-jp)",
            textShadow: "0 0 12px rgba(167,139,250,0.4)",
          }}
        >
          {entry.pattern}
        </div>
        <div className="text-[9px] font-bold text-purple-400 italic">{entry.romajiPattern}</div>
      </div>

      {/* Formula & Meaning */}
      <div className="mt-3 pt-2.5 border-t border-purple-800/60 space-y-2">
        <div
          className="rpg-box-dark px-2.5 py-1 text-[9px] font-mono font-bold text-yellow-400 truncate"
          style={{ borderRadius: "2px" }}
        >
          📐 {entry.formula}
        </div>
        <div className="text-xs sm:text-sm font-black text-purple-100 line-clamp-2 leading-snug">
          {entry.meaning}
        </div>
        <span
          className="rpg-badge text-[7px] inline-block"
          style={{ fontFamily: "var(--font-pixel)", borderColor: "#a78bfa", color: "#c4b5fd" }}
        >
          DETAIL 📝
        </span>
      </div>
    </div>
  );
}
