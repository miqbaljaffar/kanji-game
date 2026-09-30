"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface KanjiCardProps {
  entry: KanjiDictionaryEntry;
  onSelect: (entry: KanjiDictionaryEntry) => void;
}

export function KanjiCard({ entry, onSelect }: KanjiCardProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const isSingle = entry.kanjiCount === 1;

  const playTTS = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(entry.kanji);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;
      setIsPlayingAudio(true);
      utterance.onend  = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      onClick={() => onSelect(entry)}
      className="rpg-box group relative flex flex-col justify-between p-3 sm:p-4 cursor-pointer hover:-translate-y-1 transition-all duration-200 active:scale-95 touch-manipulation overflow-hidden card-enter"
      style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }}
    >
      {/* Corner decorations */}
      <span className="rpg-corner rpg-corner-tl" style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }} />
      <span className="rpg-corner rpg-corner-br" style={{ borderColor: entry.level === "N5" ? "#4ade80" : "#818cf8" }} />

      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <div className="flex items-center gap-1 flex-wrap">
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
            style={{
              fontFamily: "var(--font-pixel)",
              borderColor: isSingle ? "#fbbf24" : "#a78bfa",
              color:       isSingle ? "#fbbf24" : "#a78bfa",
            }}
          >
            {isSingle ? "1字" : `${entry.kanjiCount}字`}
          </span>
        </div>

        {/* Audio button */}
        <button
          type="button"
          onClick={playTTS}
          className={clsx(
            "w-8 h-8 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation",
            isPlayingAudio
              ? "rpg-btn-gold animate-pulse scale-110"
              : "rpg-btn"
          )}
        >
          🔊
        </button>
      </div>

      {/* Main Kanji */}
      <div className="my-1 text-center">
        <div
          className="text-4xl sm:text-5xl font-black text-white group-hover:text-yellow-300 transition-colors"
          style={{
            fontFamily: "var(--font-jp)",
            textShadow: "0 0 16px rgba(167,139,250,0.5)",
          }}
        >
          {entry.kanji}
        </div>
        <div
          className="text-[10px] sm:text-xs font-black text-purple-300 mt-1"
          style={{ fontFamily: "var(--font-jp)" }}
        >
          {entry.hiragana}
        </div>
        <div className="text-[9px] sm:text-[10px] font-bold text-purple-500 italic">
          {entry.romaji}
        </div>
      </div>

      {/* Meaning & hint */}
      <div className="mt-2 pt-2 border-t border-purple-800/60">
        <div className="text-xs sm:text-sm font-black text-yellow-200 line-clamp-1 text-center">
          {entry.arti}
        </div>
        <div className="mt-1.5 flex items-center justify-center gap-1 flex-wrap">
          {entry.components && entry.components.length > 0 ? (
            <span
              className="rpg-badge text-[7px]"
              style={{ fontFamily: "var(--font-pixel)", borderColor: "#a78bfa", color: "#a78bfa" }}
            >
              BEDAH ✨
            </span>
          ) : entry.mnemonic ? (
            <span
              className="rpg-badge-gold text-[7px]"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              TIPS 💡
            </span>
          ) : (
            <span className="text-[8px] font-bold text-purple-500">INFO 🔍</span>
          )}
        </div>
      </div>
    </div>
  );
}
