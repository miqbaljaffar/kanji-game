"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface BunpouCardProps {
  entry: BunpouDictionaryEntry;
  onSelect: (entry: BunpouDictionaryEntry) => void;
}

const LEVEL_STYLE = {
  N5: { bg: "#d7ffb8", bgDk: "#0d2208", border: "#58cc02", borderDk: "#2a6b00", bottom: "#46a302", bottomDk: "#1f5000", text: "#2a7000", textDk: "#7fff3a" },
  N4: { bg: "#ddf4ff", bgDk: "#071828", border: "#1cb0f6", borderDk: "#0a5a80", bottom: "#0490c8", bottomDk: "#074060", text: "#0c6b9e", textDk: "#60d8ff" },
  N3: { bg: "#f3e8ff", bgDk: "#140820", border: "#a855f7", borderDk: "#6a2c9a", bottom: "#7e22ce", bottomDk: "#4a1a7a", text: "#6b21a8", textDk: "#c880ff" },
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
      className={clsx("group", "bunpou-card-" + entry.level.toLowerCase(), "relative flex flex-col justify-between p-4 sm:p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 touch-manipulation overflow-hidden card-enter")}
      style={{
        border: `2px solid ${lv.border}`,
        borderBottom: `4px solid ${lv.bottom}`,
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <style>{`
        html.dark .bunpou-card-${entry.level.toLowerCase()} {
          background: ${lv.bgDk} !important;
          border-color: ${lv.borderDk} !important;
          border-bottom-color: ${lv.bottomDk} !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-level-badge {
          background: ${lv.bgDk} !important; color: ${lv.textDk} !important; border-color: ${lv.borderDk} !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-category-badge {
          background: #071828 !important; color: #60d8ff !important; border-color: #0a5a80 !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-title {
          color: ${lv.textDk} !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-romaji {
          color: ${lv.textDk} !important; opacity: 0.6;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-formula {
          background: #1a1400 !important; color: #ffd54f !important; border-color: #a07000 !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-meaning {
          color: var(--text-primary) !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-detail {
          background: #140820 !important; color: #c880ff !important; border-color: #6a2c9a !important;
        }
        html.dark .bunpou-card-${entry.level.toLowerCase()} .bunpou-tts-idle {
          background: var(--bg-surface3) !important; border-color: var(--border-base) !important; border-bottom-color: var(--border-strong) !important;
        }
      `}</style>
      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="bunpou-level-badge text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: lv.bg, color: lv.text, border: `1px solid ${lv.border}` }}
          >
            {entry.level}
          </span>
          <span
            className="bunpou-category-badge text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
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
              "bunpou-tts-idle w-9 h-9 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation rounded-xl",
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
          className="bunpou-title text-xl sm:text-2xl font-black text-slate-800 group-hover:text-green-600 transition-colors leading-snug"
          style={{ fontFamily: "var(--font-jp)" }}
        >
          {entry.pattern}
        </div>
        <div className="bunpou-romaji text-[11px] font-bold text-slate-400 italic">{entry.romajiPattern}</div>
      </div>

      {/* Formula & Meaning */}
      <div
        className="mt-3 pt-2.5 border-t border-gray-100 space-y-2"
      >
        <div
          className="bunpou-formula px-2.5 py-1.5 text-[11px] font-mono font-bold text-amber-700 line-clamp-2"
          style={{ background: "#fffef0", border: "1px solid #fde68a", borderRadius: 6 }}
        >
          📐 {entry.formula}
        </div>
        <div className="bunpou-meaning text-xs sm:text-sm font-black text-slate-700 line-clamp-2 leading-snug">
          {entry.meaning}
        </div>
        <span
          className="bunpou-detail text-[11px] font-black px-2 py-0.5 rounded-full inline-block"
          style={{ background: "#f5e6ff", color: "#6b21a8", border: "1px solid #ce82ff" }}
        >
          DETAIL 📝
        </span>
      </div>
    </div>
  );
}
