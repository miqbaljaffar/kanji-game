"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface BunpouDetailModalProps {
  entry: BunpouDictionaryEntry | null;
  onClose: () => void;
}

export function BunpouDetailModal({ entry, onClose }: BunpouDetailModalProps) {
  const [activeTab,    setActiveTab]    = useState<"explanation" | "examples">("explanation");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!entry) return null;

  const playTTS = (text: string, index: number) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "ja-JP"; utt.rate = 0.85;
      setPlayingIndex(index);
      utt.onend = utt.onerror = () => setPlayingIndex(null);
      window.speechSynthesis.speak(utt);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl rounded-t-2xl sm:rounded-sm overflow-hidden z-10 flex flex-col max-h-[92svh] sm:max-h-[90svh] animate-slide-up sm:animate-fade-up rpg-scroll"
        style={{
          background: "#1e1040",
          border: "3px solid #7c3aed",
          boxShadow: "0 0 0 1px #0f0a1e, 0 0 60px rgba(124,58,237,0.4)",
        }}
      >
        {/* Mobile handle */}
        <div className="w-12 h-1 bg-purple-700 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* ── Header ── */}
        <div
          className="relative p-4 sm:p-6 shrink-0"
          style={{ background: "linear-gradient(135deg, #1e1040 0%, #2d1b4e 100%)", borderBottom: "2px solid #7c3aed" }}
        >
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${entry.level === "N5" ? "#4ade80" : "#818cf8"}, transparent)` }} />

          <button
            onClick={onClose}
            className="rpg-btn-red absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center text-sm font-black z-10 touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >✕</button>

          <div className="space-y-3 pr-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={clsx("rpg-badge text-[9px]", entry.level === "N5" ? "border-emerald-500 text-emerald-300" : "border-indigo-400 text-indigo-300")}
                style={{ fontFamily: "var(--font-pixel)" }}
              >JLPT {entry.level}</span>
              <span className="rpg-badge text-[9px]" style={{ fontFamily: "var(--font-pixel)", borderColor: "#60a5fa", color: "#93c5fd" }}>
                {entry.category}
              </span>
            </div>

            {/* Pattern */}
            <h2
              className="text-2xl sm:text-3xl font-black text-yellow-300 leading-tight"
              style={{ fontFamily: "var(--font-jp)", textShadow: "0 0 16px rgba(251,191,36,0.4)" }}
            >
              {entry.pattern}
            </h2>
            <p className="text-[9px] font-bold text-purple-400 italic">{entry.romajiPattern}</p>

            {/* Formula pill */}
            <div
              className="rpg-box-dark inline-block px-3 py-1.5 text-[9px] sm:text-xs font-mono font-bold text-yellow-400 max-w-full truncate"
              style={{ borderRadius: "2px" }}
            >
              📐 {entry.formula}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex shrink-0 overflow-x-auto no-scrollbar" style={{ borderBottom: "2px solid #4c1d95", background: "#0f0a1e" }}>
          {([
            { id: "explanation", label: "📘 PENJELASAN" },
            { id: "examples",    label: `📝 KALIMAT (${entry.exampleSentences.length})` },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={clsx(
                "px-4 py-3 text-[9px] font-black transition-all cursor-pointer shrink-0 touch-manipulation border-b-2",
                activeTab === t.id
                  ? "border-yellow-400 text-yellow-300 bg-purple-900/40"
                  : "border-transparent text-purple-500 hover:text-purple-300"
              )}
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 rpg-scroll" style={{ background: "#140c2e" }}>

          {/* EXPLANATION */}
          {activeTab === "explanation" && (
            <div className="space-y-4 animate-fade-up">
              {/* Meaning */}
              <div className="rpg-box p-4 space-y-2" style={{ borderColor: "#60a5fa" }}>
                <p className="text-[8px] font-black text-blue-300 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>
                  💡 FUNGSI &amp; ARTI UTAMA
                </p>
                <div className="rpg-divider" style={{ background: "linear-gradient(90deg, transparent, #60a5fa, transparent)" }} />
                <p className="text-sm sm:text-base font-black text-yellow-200 leading-snug">{entry.meaning}</p>
                <p className="text-xs sm:text-sm font-bold text-purple-200 leading-relaxed pt-1 border-t border-purple-800/40">
                  {entry.explanation}
                </p>
              </div>

              {/* Formula */}
              <div className="rpg-box p-4 space-y-2">
                <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>
                  📐 RUMUS PEMBENTUKAN
                </p>
                <div className="rpg-divider" />
                <div
                  className="rpg-box-dark p-3 font-mono text-xs sm:text-sm font-black text-yellow-300"
                  style={{ borderRadius: "2px" }}
                >
                  {entry.formula}
                </div>
              </div>

              {/* Notes */}
              {entry.notes && (
                <div className="rpg-box p-4 space-y-2" style={{ borderColor: "#fbbf24" }}>
                  <p className="text-[8px] font-black text-yellow-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>
                    ⚠️ CATATAN KHUSUS
                  </p>
                  <div className="rpg-divider" />
                  <p className="text-xs sm:text-sm font-bold text-yellow-100 leading-relaxed">{entry.notes}</p>
                </div>
              )}
            </div>
          )}

          {/* EXAMPLES */}
          {activeTab === "examples" && (
            <div className="space-y-3 animate-fade-up">
              {entry.exampleSentences.map((example, idx) => (
                <div
                  key={idx}
                  className="rpg-box p-4 space-y-2.5 hover:border-purple-400 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div
                        className="text-base sm:text-lg font-black text-white leading-relaxed"
                        style={{ fontFamily: "var(--font-jp)", textShadow: "0 0 10px rgba(167,139,250,0.3)" }}
                      >
                        {example.japanese}
                      </div>
                      <div className="text-xs font-black text-purple-300" style={{ fontFamily: "var(--font-jp)" }}>
                        {example.hiragana}
                      </div>
                    </div>
                    <button
                      onClick={() => playTTS(example.japanese, idx)}
                      className={clsx(
                        "w-11 h-11 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation",
                        playingIndex === idx ? "rpg-btn-gold animate-pulse scale-105" : "rpg-btn"
                      )}
                    >🔊</button>
                  </div>
                  <div className="rpg-box-dark p-2.5 text-xs font-bold text-purple-200 leading-relaxed" style={{ borderRadius: "2px" }}>
                    {example.translation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div
          className="p-3.5 sm:p-4 flex items-center justify-between shrink-0"
          style={{ borderTop: "2px solid #4c1d95", background: "#0f0a1e" }}
        >
          <span className="text-[8px] font-black text-purple-600" style={{ fontFamily: "var(--font-pixel)" }}>
            BUNPOU MASTER • JLPT {entry.level}
          </span>
          <button
            onClick={onClose}
            className="rpg-btn px-5 py-2.5 text-[9px] touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >TUTUP</button>
        </div>
      </div>
    </div>
  );
}
