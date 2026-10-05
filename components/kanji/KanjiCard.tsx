"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface KanjiCardProps {
  entry: KanjiDictionaryEntry;
  onSelect: (entry: KanjiDictionaryEntry) => void;
}

const LEVEL_STYLE = {
  N5: { bg: "#d7ffb8", border: "#58cc02", bottom: "#46a302", text: "#2a7000", badge: "#2a7000" },
  N4: { bg: "#ddf4ff", border: "#1cb0f6", bottom: "#0490c8", text: "#0c6b9e", badge: "#0c6b9e" },
  N3: { bg: "#f3e8ff", border: "#a855f7", bottom: "#7e22ce", text: "#6b21a8", badge: "#6b21a8" },
} as const;

export function KanjiCard({ entry, onSelect }: KanjiCardProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const isSingle = entry.kanjiCount === 1;
  const isShortCompound = entry.kanjiCount === 2;
  const isLongCompound = entry.kanjiCount >= 3;
  const lv = LEVEL_STYLE[entry.level as "N5" | "N4" | "N3"] ?? LEVEL_STYLE.N5;

  const playTTS = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(entry.kanji);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;
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
      aria-label={`Lihat detail kanji ${entry.kanji} — ${entry.arti}`}
      className="group relative flex flex-col justify-between p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 touch-manipulation overflow-hidden card-enter"
      style={{
        background: "#ffffff",
        border: `2px solid ${lv.border}`,
        borderBottom: `4px solid ${lv.bottom}`,
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <div className="flex items-center gap-1 flex-wrap">
          {/* Level badge */}
          <span
            className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: lv.bg, color: lv.text, border: `1px solid ${lv.border}` }}
          >
            {entry.level}
          </span>
          {/* Type badge */}
          <span
            className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{
              background: isSingle ? "#fff8d6" : "#f5e6ff",
              color:       isSingle ? "#7a5a00" : "#6b21a8",
              border:      isSingle ? "1px solid #ffc800" : "1px solid #ce82ff",
            }}
          >
            {isSingle ? "1字" : `${entry.kanjiCount}字`}
          </span>
        </div>

        {/* TTS button */}
        <button
          type="button"
          onClick={playTTS}
          aria-label={isPlayingAudio ? `Sedang memutar pengucapan ${entry.kanji}` : `Putar pengucapan ${entry.kanji}`}
          className={clsx(
            "w-9 h-9 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation rounded-xl",
            isPlayingAudio
              ? "scale-110"
              : ""
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
      </div>

      {/* Main Kanji */}
      <div className="my-1 text-center min-h-[84px] sm:min-h-[96px] flex flex-col items-center justify-center">
        <div
          className={clsx(
            "w-full font-black text-slate-800 group-hover:text-green-600 transition-colors whitespace-nowrap",
            isSingle
              ? "text-4xl sm:text-5xl md:text-6xl leading-tight"
              : isShortCompound
                ? "text-2xl sm:text-3xl md:text-4xl leading-tight"
                : "text-xl sm:text-2xl md:text-3xl leading-snug",
          )}
          style={{
            fontFamily: "var(--font-jp)",
            overflowWrap: "normal",
            wordBreak: "keep-all",
          }}
        >
          {entry.kanji}
        </div>
        <div
          className={clsx(
            "w-full font-black text-slate-500 mt-1 truncate",
            isLongCompound ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs",
          )}
          style={{ fontFamily: "var(--font-jp)" }}
        >
          {entry.hiragana}
        </div>
        <div
          className={clsx(
            "w-full font-bold text-slate-400 italic truncate",
            isLongCompound ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]",
          )}
        >
          {entry.romaji}
        </div>
      </div>

      {/* Meaning & hint */}
      <div className="mt-2 pt-2 border-t border-gray-100">
        <div className="text-xs sm:text-sm font-black text-slate-700 line-clamp-1 text-center">
          {entry.arti}
        </div>
        <div className="mt-1.5 flex items-center justify-center gap-1 flex-wrap">
          {entry.components && entry.components.length > 0 ? (
            <span
              className="text-[7px] font-black px-2 py-0.5 rounded-full"
              style={{ background: "#f5e6ff", color: "#6b21a8", border: "1px solid #ce82ff" }}
            >
              BEDAH ✨
            </span>
          ) : entry.mnemonic ? (
            <span
              className="text-[7px] font-black px-2 py-0.5 rounded-full"
              style={{ background: "#fff8d6", color: "#7a5a00", border: "1px solid #ffc800" }}
            >
              TIPS 💡
            </span>
          ) : (
            <span className="text-[8px] font-bold text-slate-400">INFO 🔍</span>
          )}
        </div>
      </div>
    </div>
  );
}
