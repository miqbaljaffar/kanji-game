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
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      entry.exampleSentences.length > 0
    ) {
      window.speechSynthesis.cancel();
      const textToSay = entry.exampleSentences[0].japanese;
      const utterance = new SpeechSynthesisUtterance(textToSay);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;

      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      onClick={() => onSelect(entry)}
      className="group relative bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white/70 hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden active:scale-98 touch-manipulation"
    >
      {/* Top Header Badges */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Level Badge */}
          <span
            className={clsx(
              "px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-xs",
              entry.level === "N5"
                ? "bg-emerald-500 text-white"
                : "bg-indigo-600 text-white"
            )}
          >
            JLPT {entry.level}
          </span>

          {/* Category Badge */}
          <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black">
            {entry.category}
          </span>
        </div>

        {/* Audio TTS Button */}
        {entry.exampleSentences.length > 0 && (
          <button
            type="button"
            onClick={playTTS}
            title="Dengarkan contoh kalimat"
            className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-200 cursor-pointer border shrink-0 active:scale-90 touch-manipulation",
              isPlayingAudio
                ? "bg-amber-500 text-white animate-pulse border-amber-500 shadow-md scale-110"
                : "bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border-slate-200"
            )}
          >
            🔊
          </button>
        )}
      </div>

      {/* Main Grammar Pattern */}
      <div className="my-1 space-y-1">
        <div className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight font-jp group-hover:text-blue-600 transition-colors">
          {entry.pattern}
        </div>
        <div className="text-[11px] font-bold text-slate-400 italic">
          {entry.romajiPattern}
        </div>
      </div>

      {/* Formula Snippet & Meaning */}
      <div className="mt-3 pt-2.5 border-t border-slate-100/80 space-y-2">
        <div className="bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold text-slate-600 truncate">
          📐 {entry.formula}
        </div>

        <div className="text-xs sm:text-sm font-black text-slate-800 line-clamp-2 leading-snug">
          {entry.meaning}
        </div>

        <div className="text-[10px] font-bold text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-md inline-block border border-blue-100">
          Klik untuk Contoh Kalimat & Penjelasan 📝
        </div>
      </div>
    </div>
  );
}
