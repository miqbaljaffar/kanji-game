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

  const playTTS = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(entry.kanji);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;

      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const isSingle = entry.kanjiCount === 1;

  return (
    <div
      onClick={() => onSelect(entry)}
      className="group relative bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white/70 hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden active:scale-98 touch-manipulation"
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
        <div className="flex items-center gap-1 flex-wrap">
          {/* Level Badge */}
          <span
            className={clsx(
              "px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-xs",
              entry.level === "N5"
                ? "bg-emerald-500 text-white"
                : "bg-indigo-600 text-white"
            )}
          >
            {entry.level}
          </span>

          {/* Type Badge (1 Kanji vs Majemuk) */}
          <span
            className={clsx(
              "px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black tracking-wide border",
              isSingle
                ? "bg-amber-50 text-amber-700 border-amber-200"
                : "bg-purple-50 text-purple-700 border-purple-200"
            )}
          >
            {isSingle ? "1 Kanji" : `${entry.kanjiCount} Kanji`}
          </span>
        </div>

        {/* Audio TTS Button */}
        <button
          type="button"
          onClick={playTTS}
          title="Dengarkan pengucapan"
          className={clsx(
            "w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm transition-all duration-200 cursor-pointer border shrink-0 active:scale-90 touch-manipulation",
            isPlayingAudio
              ? "bg-blue-600 text-white animate-pulse border-blue-600 shadow-md scale-110"
              : "bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border-slate-200 hover:border-blue-300"
          )}
        >
          🔊
        </button>
      </div>

      {/* Main Character Display */}
      <div className="my-1.5 sm:my-2 text-center">
        <div className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight group-hover:scale-105 transition-transform duration-300 font-jp drop-shadow-xs">
          {entry.kanji}
        </div>
        <div className="text-[11px] sm:text-xs font-black text-blue-600 mt-1 tracking-wider">
          {entry.hiragana}
        </div>
        <div className="text-[10px] sm:text-[11px] font-bold text-slate-400">
          {entry.romaji}
        </div>
      </div>

      {/* Meaning & Footer */}
      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-100/80">
        <div className="text-xs sm:text-sm font-black text-slate-800 line-clamp-1 text-center">
          {entry.arti}
        </div>

        {/* Component tags indicator */}
        <div className="mt-1.5 sm:mt-2.5 flex items-center justify-center gap-1 flex-wrap">
          {entry.components && entry.components.length > 0 ? (
            <span className="text-[9px] sm:text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded-md sm:rounded-lg border border-purple-100">
              Bedah Kanji ✨
            </span>
          ) : entry.mnemonic ? (
            <span className="text-[9px] sm:text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md sm:rounded-lg border border-amber-100">
              Tips Hafal 💡
            </span>
          ) : (
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400">
              Detail 🔍
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
