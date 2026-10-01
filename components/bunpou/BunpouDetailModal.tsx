"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface BunpouDetailModalProps {
  entry: BunpouDictionaryEntry | null;
  onClose: () => void;
}

const LEVEL_COLOR = {
  N5: { accent: "#58cc02", pale: "#d7ffb8", text: "#2a7000" },
  N4: { accent: "#1cb0f6", pale: "#ddf4ff", text: "#0c6b9e" },
};

export function BunpouDetailModal({ entry, onClose }: BunpouDetailModalProps) {
  const [activeTab,    setActiveTab]    = useState<"explanation" | "examples">("explanation");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!entry) return null;

  const lv = LEVEL_COLOR[entry.level as "N5" | "N4"] ?? LEVEL_COLOR.N5;

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
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl rounded-t-2xl sm:rounded-2xl overflow-hidden z-10 flex flex-col max-h-[92svh] sm:max-h-[90svh] animate-slide-up sm:animate-fade-up rpg-scroll"
        style={{
          background: "#ffffff",
          border: "2px solid #e5e7eb",
          borderBottom: `4px solid ${lv.accent}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Mobile handle */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-2.5 sm:hidden shrink-0" />

        {/* ── Header ── */}
        <div
          className="relative p-4 sm:p-6 shrink-0"
          style={{
            background: lv.pale,
            borderBottom: `2px solid ${lv.accent}`,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${lv.accent}, transparent)` }}
          />

          <button
            onClick={onClose}
            aria-label="Tutup detail bunpou"
            className="rpg-btn-red absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center text-sm font-black z-10 touch-manipulation rounded-xl"
          >✕</button>

          <div className="space-y-3 pr-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                style={{ background: "#ffffff", color: lv.text, border: `1.5px solid ${lv.accent}` }}
              >
                JLPT {entry.level}
              </span>
              <span
                className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                style={{ background: "#ddf4ff", color: "#0c6b9e", border: "1.5px solid #1cb0f6" }}
              >
                {entry.category}
              </span>
            </div>

            {/* Pattern */}
            <h2
              className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight"
              style={{ fontFamily: "var(--font-jp)" }}
            >
              {entry.pattern}
            </h2>
            <p className="text-[9px] font-bold text-slate-500 italic">{entry.romajiPattern}</p>

            {/* Formula pill */}
            <div
              className="inline-block px-3 py-1.5 text-[9px] sm:text-xs font-mono font-bold text-amber-700 max-w-full truncate"
              style={{ background: "#fffef0", border: "1px solid #fde68a", borderRadius: 8 }}
            >
              📐 {entry.formula}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div
          className="flex shrink-0 overflow-x-auto no-scrollbar"
          style={{ borderBottom: "2px solid #f3f4f6", background: "#ffffff" }}
        >
          {([
            { id: "explanation", label: "📘 Penjelasan" },
            { id: "examples",    label: `📝 Kalimat (${entry.exampleSentences.length})` },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={clsx(
                "px-4 py-3 text-[9px] font-black transition-all cursor-pointer shrink-0 touch-manipulation border-b-2",
                activeTab === t.id
                  ? "border-green-500 text-green-600 bg-green-50"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div
          className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 rpg-scroll"
          style={{ background: "#f9fafb" }}
        >
          {/* EXPLANATION */}
          {activeTab === "explanation" && (
            <div className="space-y-4 animate-fade-up">
              {/* Meaning */}
              <div
                className="p-4 space-y-2"
                style={{ background: "#ddf4ff", border: "2px solid #1cb0f6", borderRadius: 12 }}
              >
                <p className="text-[8px] font-black text-blue-700 uppercase tracking-widest">
                  💡 Fungsi &amp; Arti Utama
                </p>
                <div className="h-px bg-blue-200 rounded" />
                <p className="text-sm sm:text-base font-black text-slate-800 leading-snug">{entry.meaning}</p>
                <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed pt-1 border-t border-blue-100">
                  {entry.explanation}
                </p>
              </div>

              {/* Formula */}
              <div
                className="p-4 space-y-2"
                style={{ background: "#ffffff", border: "2px solid #e5e7eb", borderRadius: 12 }}
              >
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
                  📐 Rumus Pembentukan
                </p>
                <div className="rpg-divider" />
                <div
                  className="p-3 font-mono text-xs sm:text-sm font-black text-amber-700"
                  style={{ background: "#fffef0", border: "1px solid #fde68a", borderRadius: 8 }}
                >
                  {entry.formula}
                </div>
              </div>

              {/* Notes */}
              {entry.notes && (
                <div
                  className="p-4 space-y-2"
                  style={{ background: "#fff8d6", border: "2px solid #ffc800", borderRadius: 12 }}
                >
                  <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest">
                    ⚠️ Catatan Khusus
                  </p>
                  <div className="rpg-divider" />
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">{entry.notes}</p>
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
                  className="p-4 space-y-2.5 transition-colors"
                  style={{
                    background: "#ffffff",
                    border: "2px solid #e5e7eb",
                    borderBottom: "3px solid #d1d5db",
                    borderRadius: 12,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div
                        className="text-base sm:text-lg font-black text-slate-800 leading-relaxed"
                        style={{ fontFamily: "var(--font-jp)" }}
                      >
                        {example.japanese}
                      </div>
                      <div
                        className="text-xs font-black text-slate-500"
                        style={{ fontFamily: "var(--font-jp)" }}
                      >
                        {example.hiragana}
                      </div>
                    </div>
                    <button
                      onClick={() => playTTS(example.japanese, idx)}
                      className={clsx(
                        "w-11 h-11 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0 active:scale-90 touch-manipulation rounded-xl",
                      )}
                      style={playingIndex === idx ? {
                        background: "#fff8d6",
                        border: "2px solid #ffc800",
                        borderBottom: "3px solid #c49800",
                      } : {
                        background: "#f3f4f6",
                        border: "2px solid #e5e7eb",
                        borderBottom: "3px solid #d1d5db",
                      }}
                    >🔊</button>
                  </div>
                  <div
                    className="p-2.5 text-xs font-bold text-slate-600 leading-relaxed"
                    style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 6 }}
                  >
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
          style={{ borderTop: "2px solid #f3f4f6", background: "#ffffff" }}
        >
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
            KanjiMocha · JLPT {entry.level}
          </span>
          <button
            onClick={onClose}
            aria-label="Tutup detail bunpou"
            className="rpg-btn px-5 py-2.5 text-[9px] touch-manipulation font-black"
          >Tutup</button>
        </div>
      </div>
    </div>
  );
}
