"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface KanjiCardProps {
  entry: KanjiDictionaryEntry;
  onSelect: (entry: KanjiDictionaryEntry) => void;
}

const LEVEL_STYLE = {
  N5: { bg: "#d7ffb8", bgDk: "#0d2208", border: "#58cc02", borderDk: "#2a6b00", bottom: "#46a302", bottomDk: "#1f5000", text: "#2a7000", textDk: "#7fff3a" },
  N4: { bg: "#ddf4ff", bgDk: "#071828", border: "#1cb0f6", borderDk: "#0a5a80", bottom: "#0490c8", bottomDk: "#074060", text: "#0c6b9e", textDk: "#60d8ff" },
  N3: { bg: "#f3e8ff", bgDk: "#140820", border: "#a855f7", borderDk: "#6a2c9a", bottom: "#7e22ce", bottomDk: "#4a1a7a", text: "#6b21a8", textDk: "#c880ff" },
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
      className={clsx("group", "kanji-card-" + entry.level.toLowerCase(), "relative flex flex-col justify-between p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 touch-manipulation overflow-hidden card-enter")}
      style={{
        border: `2px solid ${lv.border}`,
        borderBottom: `4px solid ${lv.bottom}`,
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <style>{`
        html.dark .kanji-card-${entry.level.toLowerCase()} {
          background: ${lv.bgDk} !important;
          border-color: ${lv.borderDk} !important;
          border-bottom-color: ${lv.bottomDk} !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-level-badge {
          background: ${lv.bgDk} !important;
          color: ${lv.textDk} !important;
          border-color: ${lv.borderDk} !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-type-single {
          background: #1a1400 !important; color: #ffd54f !important; border-color: #a07000 !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-type-compound {
          background: #140820 !important; color: #c880ff !important; border-color: #6a2c9a !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-title {
          color: ${lv.textDk} !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-hira {
          color: ${lv.textDk} !important; opacity: 0.8;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-romaji {
          color: ${lv.textDk} !important; opacity: 0.6;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-meaning {
          color: var(--text-primary) !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-tts-idle {
          background: var(--bg-surface3) !important;
          border-color: var(--border-base) !important;
          border-bottom-color: var(--border-strong) !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-hint-bedah {
          background: #140820 !important; color: #c880ff !important; border-color: #6a2c9a !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-hint-tips {
          background: #1a1400 !important; color: #ffd54f !important; border-color: #a07000 !important;
        }
        html.dark .kanji-card-${entry.level.toLowerCase()} .kanji-hint-info {
          color: var(--text-muted) !important;
        }
      `}</style>
      {/* Top badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <div className="flex items-center gap-1 flex-wrap">
          {/* Level badge */}
          <span
            className="text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide kanji-level-badge"
            style={{ background: lv.bg, color: lv.text, border: `1px solid ${lv.border}` }}
          >
            {entry.level}
          </span>
          {/* Type badge */}
          <span
            className={clsx(
              "text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide kanji-type-badge",
              isSingle ? "kanji-type-single" : "kanji-type-compound",
            )}
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
          className="kanji-tts-idle"
        >
          🔊
        </button>
      </div>

      {/* Main Kanji */}
      <div className="my-1 text-center min-h-[84px] sm:min-h-[96px] flex flex-col items-center justify-center">
        <div
          className={clsx(
            "kanji-title w-full font-black whitespace-nowrap transition-colors",
            "text-slate-800 group-hover:text-green-600",
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
            "kanji-hira w-full font-black mt-1 truncate",
            "text-slate-500",
            isLongCompound ? "text-[11px] sm:text-xs" : "text-xs sm:text-xs",
          )}
          style={{ fontFamily: "var(--font-jp)" }}
        >
          {entry.hiragana}
        </div>
        <div
          className={clsx(
            "kanji-romaji w-full font-bold italic truncate",
            "text-slate-400",
            isLongCompound ? "text-[11px] sm:text-xs" : "text-[11px] sm:text-xs",
          )}
        >
          {entry.romaji}
        </div>
      </div>

      {/* Meaning & hint */}
      <div className="mt-2 pt-2 border-t border-gray-100">
        <div className="kanji-meaning text-xs sm:text-sm font-black text-slate-700 line-clamp-1 text-center">
          {entry.arti}
        </div>
        <div className="mt-1.5 flex items-center justify-center gap-1 flex-wrap">
          {entry.components && entry.components.length > 0 ? (
            <span
              className="kanji-hint-bedah text-[11px] font-black px-2 py-0.5 rounded-full"
              style={{ background: "#f5e6ff", color: "#6b21a8", border: "1px solid #ce82ff" }}
            >
              BEDAH ✨
            </span>
          ) : entry.mnemonic ? (
            <span
              className="kanji-hint-tips text-[11px] font-black px-2 py-0.5 rounded-full"
              style={{ background: "#fff8d6", color: "#7a5a00", border: "1px solid #ffc800" }}
            >
              TIPS 💡
            </span>
          ) : (
            <span className="kanji-hint-info text-[11px] font-bold text-slate-400">INFO 🔍</span>
          )}
        </div>
      </div>
    </div>
  );
}
