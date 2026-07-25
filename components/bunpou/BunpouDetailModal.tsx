"use client";

import { BunpouDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface BunpouDetailModalProps {
  entry: BunpouDictionaryEntry | null;
  onClose: () => void;
}

export function BunpouDetailModal({ entry, onClose }: BunpouDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"explanation" | "examples">("explanation");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!entry) return null;

  const playTTS = (text: string, index: number) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;

      setPlayingIndex(index);
      utterance.onend = () => setPlayingIndex(null);
      utterance.onerror = () => setPlayingIndex(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden animate-fade-in">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t-4 sm:border-4 border-white/80 overflow-hidden z-10 flex flex-col max-h-[92vh] sm:max-h-[90vh] animate-slide-up sm:animate-fade-in">
        
        {/* Mobile Handle Drag Indicator */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Header Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6 text-white overflow-hidden shrink-0">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center font-black transition-all cursor-pointer border border-white/30 z-10 active:scale-90 touch-manipulation"
          >
            ✕
          </button>

          <div className="space-y-3 pr-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={clsx(
                  "px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-xs",
                  entry.level === "N5" ? "bg-emerald-400 text-slate-900" : "bg-indigo-300 text-slate-900"
                )}
              >
                JLPT {entry.level}
              </span>

              <span className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-black text-white">
                {entry.category}
              </span>
            </div>

            {/* Title Pattern */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-jp">
                {entry.pattern}
              </h2>
              <p className="text-xs font-bold text-white/80 italic mt-0.5">
                {entry.romajiPattern}
              </p>
            </div>

            {/* Formula Pill Box */}
            <div className="bg-black/25 backdrop-blur-md border border-white/30 p-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold text-amber-300 inline-block max-w-full truncate">
              📐 Rumus: {entry.formula}
            </div>

          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-2 sm:px-4 pt-2 sm:pt-3 shrink-0 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => setActiveTab("explanation")}
            className={clsx(
              "px-4 py-2.5 sm:py-3 font-black text-xs sm:text-sm transition-all border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95 touch-manipulation",
              activeTab === "explanation"
                ? "border-blue-600 text-blue-600 bg-white rounded-t-xl"
                : "border-transparent text-slate-400 hover:text-slate-600"
            )}
          >
            <span>📘</span> Penjelasan & Catatan
          </button>

          <button
            onClick={() => setActiveTab("examples")}
            className={clsx(
              "px-4 py-2.5 sm:py-3 font-black text-xs sm:text-sm transition-all border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95 touch-manipulation",
              activeTab === "examples"
                ? "border-blue-600 text-blue-600 bg-white rounded-t-xl"
                : "border-transparent text-slate-400 hover:text-slate-600"
            )}
          >
            <span>📝</span> Contoh Kalimat ({entry.exampleSentences.length})
          </button>
        </div>

        {/* Modal Tab Contents */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-slate-50/50">
          
          {/* TAB 1: EXPLANATION */}
          {activeTab === "explanation" && (
            <div className="space-y-4 animate-fade-in">
              {/* Meaning & Function Box */}
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
                <h4 className="text-xs font-black text-blue-600 uppercase tracking-wider">
                  💡 Fungsi & Arti Utama
                </h4>
                <p className="text-sm sm:text-base font-black text-slate-800 leading-snug">
                  {entry.meaning}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {entry.explanation}
                </p>
              </div>

              {/* Formula Detailed Card */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📐</span> Rumus Pembentukan (Formula)
                </h4>
                <div className="bg-slate-100 p-3 rounded-xl font-mono text-xs sm:text-sm font-black text-blue-700">
                  {entry.formula}
                </div>
              </div>

              {/* Notes / Pitfalls */}
              {entry.notes && (
                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2">
                  <h4 className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>⚠️</span> Catatan & Perhatian Khusus
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-amber-900 leading-relaxed">
                    {entry.notes}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: EXAMPLES */}
          {activeTab === "examples" && (
            <div className="space-y-3.5 animate-fade-in">
              {entry.exampleSentences.map((example, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl p-4 shadow-xs transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-base sm:text-lg font-black text-slate-800 font-jp leading-relaxed">
                        {example.japanese}
                      </div>
                      <div className="text-xs font-black text-blue-600 tracking-wide">
                        {example.hiragana}
                      </div>
                    </div>

                    {/* Audio TTS Button */}
                    <button
                      type="button"
                      onClick={() => playTTS(example.japanese, idx)}
                      className={clsx(
                        "w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200 cursor-pointer border shrink-0 active:scale-90 touch-manipulation",
                        playingIndex === idx
                          ? "bg-blue-600 text-white animate-pulse border-blue-600 shadow-md scale-105"
                          : "bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border-slate-200"
                      )}
                    >
                      🔊
                    </button>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-600 pt-2 border-t border-slate-100">
                    {example.translation}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs font-bold text-slate-400">
            Bunpou Ensiklopedia • JLPT {entry.level}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-black text-xs rounded-xl shadow-md transition-all cursor-pointer active:scale-95 touch-manipulation"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
