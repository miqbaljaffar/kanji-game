"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface KanjiDetailModalProps {
  entry: KanjiDictionaryEntry | null;
  onClose: () => void;
}

export function KanjiDetailModal({ entry, onClose }: KanjiDetailModalProps) {
  const [activeTab,       setActiveTab]       = useState<"breakdown" | "readings" | "sentence">("breakdown");
  const [isPlayingAudio,  setIsPlayingAudio]  = useState(false);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!entry) return null;

  const isSingle = entry.kanjiCount === 1;

  const playTTS = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(entry.kanji);
      utt.lang = "ja-JP"; utt.rate = 0.85;
      setIsPlayingAudio(true);
      utt.onend = utt.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utt);
    }
  };

  const TABS = [
    { id: "breakdown", label: isSingle ? "🧩 Bedah" : "🧩 Majemuk" },
    { id: "readings",  label: "🗣️ Bacaan" },
    { id: "sentence",  label: "📝 Kalimat" },
  ] as const;

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
          className="relative p-4 sm:p-6 shrink-0 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1040 0%, #2d1b4e 100%)", borderBottom: "2px solid #7c3aed" }}
        >
          {/* Garis atas dekoratif */}
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${entry.level === "N5" ? "#4ade80" : "#818cf8"}, transparent)` }} />

          {/* Close */}
          <button
            onClick={onClose}
            className="rpg-btn-red absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center text-sm font-black z-10 touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >✕</button>

          <div className="flex flex-col sm:flex-row items-center gap-4 pr-10">
            {/* Big Kanji box */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-6xl font-black"
                style={{
                  fontFamily: "var(--font-jp)",
                  background: "#0f0a1e",
                  border: "3px solid #fbbf24",
                  color: "#fef3c7",
                  textShadow: "0 0 20px rgba(251,191,36,0.6)",
                  boxShadow: "0 0 20px rgba(251,191,36,0.2)",
                }}
              >
                {entry.kanji}
              </div>
              <button
                onClick={playTTS}
                className={clsx("rpg-btn px-3 py-2 text-[8px] min-h-[36px] touch-manipulation", isPlayingAudio && "animate-pulse rpg-btn-gold")}
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                🔊 {isPlayingAudio ? "MEMUTAR..." : "PUTAR"}
              </button>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span
                  className={clsx("rpg-badge text-[9px]", entry.level === "N5" ? "border-emerald-500 text-emerald-300" : "border-indigo-400 text-indigo-300")}
                  style={{ fontFamily: "var(--font-pixel)" }}
                >JLPT {entry.level}</span>
                <span className="rpg-badge text-[9px]" style={{ fontFamily: "var(--font-pixel)", borderColor: "#a78bfa", color: "#c4b5fd" }}>
                  {isSingle ? "1 KANJI" : `${entry.kanjiCount} KANJI`}
                </span>
                {entry.strokes && (
                  <span className="rpg-badge-gold text-[9px]" style={{ fontFamily: "var(--font-pixel)" }}>
                    {entry.strokes} GORESAN
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-yellow-300" style={{ fontFamily: "var(--font-pixel)" }}>
                {entry.arti}
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm font-bold">
                <span className="rpg-box-dark px-2.5 py-0.5 text-purple-200" style={{ fontFamily: "var(--font-jp)" }}>
                  {entry.hiragana}
                </span>
                <span className="text-purple-400 italic text-xs">{entry.romaji}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex shrink-0 overflow-x-auto no-scrollbar" style={{ borderBottom: "2px solid #4c1d95", background: "#0f0a1e" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={clsx(
                "px-4 py-3 text-[9px] sm:text-[10px] font-black transition-all cursor-pointer shrink-0 touch-manipulation border-b-2",
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

          {/* BREAKDOWN */}
          {activeTab === "breakdown" && (
            <div className="space-y-4 animate-fade-up">
              {!isSingle && entry.components && entry.components.length > 0 ? (
                <div>
                  <div className="rpg-box-dark p-3 mb-3">
                    <p className="text-[9px] font-black text-yellow-400 uppercase mb-1" style={{ fontFamily: "var(--font-pixel)" }}>
                      💡 KANJI MAJEMUK ({entry.kanjiCount} KARAKTER)
                    </p>
                    <p className="text-xs font-bold text-purple-200 leading-relaxed">
                      Kata <strong className="text-yellow-300" style={{ fontFamily: "var(--font-jp)" }}>{entry.kanji}</strong> terbentuk dari {entry.components.length} kanji berikut:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {entry.components.map((comp, idx) => (
                      <div key={idx} className="rpg-box flex items-start gap-3 p-3.5">
                        <div
                          className="w-12 h-12 flex items-center justify-center text-2xl font-black shrink-0"
                          style={{
                            fontFamily: "var(--font-jp)", background: "#0f0a1e",
                            border: "2px solid #7c3aed", color: "#e9d5ff",
                          }}
                        >{comp.char}</div>
                        <div className="space-y-1 flex-1 min-w-0 text-xs">
                          <div className="font-black text-purple-100">
                            Arti: <span className="text-yellow-300">{comp.meaning}</span>
                          </div>
                          {comp.onyomi   && <div className="font-bold text-purple-400">On: <span className="text-purple-200">{comp.onyomi}</span></div>}
                          {comp.kunyomi  && <div className="font-bold text-purple-400">Kun: <span className="text-purple-200">{comp.kunyomi}</span></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rpg-box p-4 space-y-2">
                  <p className="text-[9px] font-black text-yellow-400 uppercase" style={{ fontFamily: "var(--font-pixel)" }}>🈁 KARAKTER TUNGGAL</p>
                  <div className="rpg-divider" />
                  <p className="text-xs font-bold text-purple-200 leading-relaxed">
                    Kanji <strong className="text-yellow-300" style={{ fontFamily: "var(--font-jp)", fontSize: "1.1em" }}>{entry.kanji}</strong> adalah karakter dasar level {entry.level}.
                  </p>
                  {entry.strokes && (
                    <span className="rpg-badge-gold text-[8px]" style={{ fontFamily: "var(--font-pixel)" }}>
                      GORESAN: {entry.strokes}
                    </span>
                  )}
                </div>
              )}
              {entry.mnemonic && (
                <div className="rpg-box-gold p-4 space-y-2">
                  <p className="text-[9px] font-black text-yellow-400 uppercase" style={{ fontFamily: "var(--font-pixel)" }}>💡 TIPS MEMORI</p>
                  <div className="rpg-divider" />
                  <p className="text-xs sm:text-sm font-bold text-yellow-100 leading-relaxed">{entry.mnemonic}</p>
                </div>
              )}
            </div>
          )}

          {/* READINGS */}
          {activeTab === "readings" && (
            <div className="space-y-3 animate-fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rpg-box p-4 space-y-2" style={{ borderColor: "#a78bfa" }}>
                  <p className="text-[8px] font-black text-purple-300 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>音読み (ONYOMI)</p>
                  <div className="text-lg font-black text-white" style={{ fontFamily: "var(--font-jp)" }}>{entry.onyomi || "–"}</div>
                  <p className="text-[9px] font-bold text-purple-500">Digunakan pada kata majemuk (2+ kanji).</p>
                </div>
                <div className="rpg-box p-4 space-y-2" style={{ borderColor: "#4ade80" }}>
                  <p className="text-[8px] font-black text-emerald-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>訓読み (KUNYOMI)</p>
                  <div className="text-lg font-black text-white" style={{ fontFamily: "var(--font-jp)" }}>{entry.kunyomi || "–"}</div>
                  <p className="text-[9px] font-bold text-purple-500">Digunakan saat kanji berdiri sendiri.</p>
                </div>
              </div>
              <div className="rpg-box p-4 space-y-2">
                <p className="text-[8px] font-black text-yellow-400 uppercase" style={{ fontFamily: "var(--font-pixel)" }}>🧠 CARA MENGINGAT</p>
                <div className="rpg-divider" />
                <p className="text-xs sm:text-sm font-bold text-purple-200 leading-relaxed">
                  {entry.mnemonic || "Asosiasikan bentuk kanji dengan benda di sekitar untuk memudahkan hafalan."}
                </p>
              </div>
            </div>
          )}

          {/* SENTENCE */}
          {activeTab === "sentence" && (
            <div className="space-y-4 animate-fade-up">
              {entry.exampleSentence ? (
                <div className="rpg-box p-5 space-y-3" style={{ borderColor: "#60a5fa" }}>
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] font-black text-blue-300 uppercase tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>CONTOH KALIMAT</p>
                    <button
                      onClick={() => {
                        if ("speechSynthesis" in window) {
                          window.speechSynthesis.cancel();
                          const u = new SpeechSynthesisUtterance(entry.exampleSentence!.japanese);
                          u.lang = "ja-JP"; u.rate = 0.85;
                          window.speechSynthesis.speak(u);
                        }
                      }}
                      className="rpg-btn px-2.5 py-2 text-[8px] min-h-[36px] touch-manipulation"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >🔊 PUTAR</button>
                  </div>
                  <div className="rpg-divider" style={{ background: "linear-gradient(90deg, transparent, #60a5fa, transparent)" }} />
                  <div className="text-lg sm:text-xl font-black text-white leading-relaxed" style={{ fontFamily: "var(--font-jp)", textShadow: "0 0 12px rgba(167,139,250,0.4)" }}>
                    {entry.exampleSentence.japanese}
                  </div>
                  <div className="text-xs font-black text-blue-300" style={{ fontFamily: "var(--font-jp)" }}>
                    {entry.exampleSentence.hiragana}
                  </div>
                  <div className="rpg-box-dark p-3 text-xs font-bold text-purple-200 leading-relaxed">
                    {entry.exampleSentence.translation}
                  </div>
                </div>
              ) : (
                <div className="rpg-box p-6 text-center space-y-3">
                  <div className="text-3xl">📝</div>
                  <p className="text-[9px] font-black text-yellow-300" style={{ fontFamily: "var(--font-pixel)" }}>NO EXAMPLE YET</p>
                  <p className="text-xs font-bold text-purple-300">
                    Kata <strong style={{ fontFamily: "var(--font-jp)" }}>{entry.kanji}</strong> sering muncul di percakapan sehari-hari JLPT {entry.level}.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div
          className="p-3.5 sm:p-4 flex items-center justify-between shrink-0"
          style={{ borderTop: "2px solid #4c1d95", background: "#0f0a1e" }}
        >
          <span className="text-[8px] font-black text-purple-600" style={{ fontFamily: "var(--font-pixel)" }}>
            KANJI MASTER • JLPT {entry.level}
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
