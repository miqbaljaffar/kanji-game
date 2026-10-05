"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface KanjiDetailModalProps {
  entry: KanjiDictionaryEntry | null;
  onClose: () => void;
}

const LEVEL_COLOR = {
  N5: { accent: "#58cc02", pale: "#d7ffb8", text: "#2a7000" },
  N4: { accent: "#1cb0f6", pale: "#ddf4ff", text: "#0c6b9e" },
  N3: { accent: "#a855f7", pale: "#f3e8ff", text: "#6b21a8" },
};

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
  const isShortCompound = entry.kanjiCount === 2;
  const isLongCompound = entry.kanjiCount >= 3;
  const lv = LEVEL_COLOR[entry.level as "N5" | "N4" | "N3"] ?? LEVEL_COLOR.N5;

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
          {/* Stripe atas */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${lv.accent}, transparent)` }}
          />

          <button
            onClick={onClose}
            aria-label="Tutup detail kanji"
            className="rpg-btn-red absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center text-sm font-black z-10 touch-manipulation rounded-xl"
          >✕</button>

          <div className="flex flex-col sm:flex-row items-center gap-4 pr-10">
            {/* Big Kanji box */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={clsx(
                  "flex items-center justify-center font-black whitespace-nowrap overflow-visible w-auto",
                  isSingle
                    ? "min-w-[96px] h-24 sm:min-w-[112px] sm:h-28 px-5 text-4xl sm:text-5xl"
                    : isShortCompound
                      ? "min-w-[128px] h-24 sm:min-w-[144px] sm:h-28 px-6 text-3xl sm:text-4xl"
                      : "min-w-[144px] h-24 sm:min-w-[160px] sm:h-28 px-6 text-2xl sm:text-3xl",
                )}
                style={{
                  fontFamily: "var(--font-jp)",
                  background: "#ffffff",
                  border: `3px solid ${lv.accent}`,
                  borderRadius: 14,
                  color: "#1c1c1c",
                  boxShadow: `0 4px 0 ${lv.accent}`,
                  wordBreak: "keep-all",
                  whiteSpace: "nowrap",
                }}
              >
                {entry.kanji}
              </div>
              <button
                onClick={playTTS}
                aria-label={isPlayingAudio ? `Sedang memutar ${entry.kanji}` : `Putar pengucapan ${entry.kanji}`}
                className={clsx(
                  "px-3 py-2 text-[9px] font-black min-h-[36px] touch-manipulation rounded-lg transition-all",
                  isPlayingAudio ? "animate-pulse" : ""
                )}
                style={isPlayingAudio ? {
                  background: "#fff8d6",
                  border: "2px solid #ffc800",
                  borderBottom: "3px solid #c49800",
                  color: "#7a5a00",
                } : {
                  background: "#ffffff",
                  border: "2px solid #e5e7eb",
                  borderBottom: "3px solid #d1d5db",
                  color: "#6b7280",
                }}
              >
                🔊 {isPlayingAudio ? "Memutar..." : "Putar"}
              </button>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span
                  className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{ background: lv.pale, color: lv.text, border: `1.5px solid ${lv.accent}` }}
                >
                  JLPT {entry.level}
                </span>
                <span
                  className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{ background: "#f5e6ff", color: "#6b21a8", border: "1.5px solid #ce82ff" }}
                >
                  {isSingle ? "1 Kanji" : `${entry.kanjiCount} Kanji`}
                </span>
                {entry.strokes && (
                  <span
                    className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                    style={{ background: "#fff8d6", color: "#7a5a00", border: "1.5px solid #ffc800" }}
                  >
                    {entry.strokes} Goresan
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                {entry.arti}
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm font-bold">
                <span
                  className="px-2.5 py-0.5 text-slate-700 font-bold"
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    fontFamily: "var(--font-jp)",
                  }}
                >
                  {entry.hiragana}
                </span>
                <span className="text-slate-400 italic text-xs">{entry.romaji}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div
          className="flex shrink-0 overflow-x-auto no-scrollbar"
          style={{ borderBottom: "2px solid #f3f4f6", background: "#ffffff" }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={clsx(
                "px-4 py-3 text-[9px] sm:text-[10px] font-black transition-all cursor-pointer shrink-0 touch-manipulation border-b-2",
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
          {/* BREAKDOWN */}
          {activeTab === "breakdown" && (
            <div className="space-y-4 animate-fade-up">
              {!isSingle && entry.components && entry.components.length > 0 ? (
                <div>
                  <div
                    className="p-3 mb-3"
                    style={{ background: "#ddf4ff", border: "1px solid #1cb0f6", borderRadius: 10 }}
                  >
                    <p className="text-[9px] font-black text-blue-700 uppercase mb-1">
                      💡 Kanji Majemuk ({entry.kanjiCount} Karakter)
                    </p>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      Kata <strong className="text-blue-700" style={{ fontFamily: "var(--font-jp)" }}>{entry.kanji}</strong> terbentuk dari {entry.components.length} kanji:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {entry.components.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5"
                        style={{
                          background: "#ffffff",
                          border: "2px solid #e5e7eb",
                          borderBottom: "3px solid #d1d5db",
                          borderRadius: 12,
                        }}
                      >
                        <div
                          className="w-12 h-12 flex items-center justify-center text-2xl font-black shrink-0"
                          style={{
                            fontFamily: "var(--font-jp)",
                            background: "#fff8d6",
                            border: "2px solid #ffc800",
                            borderRadius: 8,
                            color: "#7a5a00",
                          }}
                        >{comp.char}</div>
                        <div className="space-y-1 flex-1 min-w-0 text-xs">
                          <div className="font-black text-slate-700">
                            Arti: <span className="text-amber-600">{comp.meaning}</span>
                          </div>
                          {comp.onyomi   && <div className="font-bold text-slate-500">On: <span className="text-slate-700">{comp.onyomi}</span></div>}
                          {comp.kunyomi  && <div className="font-bold text-slate-500">Kun: <span className="text-slate-700">{comp.kunyomi}</span></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className="p-4 space-y-2"
                  style={{ background: "#ffffff", border: "2px solid #e5e7eb", borderRadius: 12 }}
                >
                  <p className="text-[9px] font-black text-slate-500 uppercase">🈁 Karakter Tunggal</p>
                  <div className="rpg-divider" />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">
                    Kanji <strong className="text-amber-600" style={{ fontFamily: "var(--font-jp)", fontSize: "1.1em" }}>{entry.kanji}</strong> adalah karakter dasar level {entry.level}.
                  </p>
                  {entry.strokes && (
                    <span
                      className="text-[8px] font-black px-2.5 py-1 rounded-full inline-block"
                      style={{ background: "#fff8d6", color: "#7a5a00", border: "1px solid #ffc800" }}
                    >
                      Goresan: {entry.strokes}
                    </span>
                  )}
                </div>
              )}
              {entry.mnemonic && (
                <div
                  className="p-4 space-y-2"
                  style={{ background: "#fffef0", border: "2px solid #ffc800", borderRadius: 12 }}
                >
                  <p className="text-[9px] font-black text-amber-600 uppercase">💡 Tips Memori</p>
                  <div className="rpg-divider" />
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">{entry.mnemonic}</p>
                </div>
              )}
            </div>
          )}

          {/* READINGS */}
          {activeTab === "readings" && (
            <div className="space-y-3 animate-fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className="p-4 space-y-2"
                  style={{ background: "#f5e6ff", border: "2px solid #ce82ff", borderRadius: 12 }}
                >
                  <p className="text-[8px] font-black text-purple-700 uppercase tracking-widest">音読み (Onyomi)</p>
                  <div className="text-lg font-black text-slate-800" style={{ fontFamily: "var(--font-jp)" }}>{entry.onyomi || "–"}</div>
                  <p className="text-[9px] font-bold text-purple-500">Digunakan pada kata majemuk (2+ kanji).</p>
                </div>
                <div
                  className="p-4 space-y-2"
                  style={{ background: "#d7ffb8", border: "2px solid #58cc02", borderRadius: 12 }}
                >
                  <p className="text-[8px] font-black text-green-700 uppercase tracking-widest">訓読み (Kunyomi)</p>
                  <div className="text-lg font-black text-slate-800" style={{ fontFamily: "var(--font-jp)" }}>{entry.kunyomi || "–"}</div>
                  <p className="text-[9px] font-bold text-green-600">Digunakan saat kanji berdiri sendiri.</p>
                </div>
              </div>
              <div
                className="p-4 space-y-2"
                style={{ background: "#ffffff", border: "2px solid #e5e7eb", borderRadius: 12 }}
              >
                <p className="text-[8px] font-black text-amber-600 uppercase">🧠 Cara Mengingat</p>
                <div className="rpg-divider" />
                <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed">
                  {entry.mnemonic || "Asosiasikan bentuk kanji dengan benda di sekitar untuk memudahkan hafalan."}
                </p>
              </div>
            </div>
          )}

          {/* SENTENCE */}
          {activeTab === "sentence" && (
            <div className="space-y-4 animate-fade-up">
              {entry.exampleSentence ? (
                <div
                  className="p-5 space-y-3"
                  style={{ background: "#ddf4ff", border: "2px solid #1cb0f6", borderRadius: 14 }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] font-black text-blue-700 uppercase tracking-widest">Contoh Kalimat</p>
                    <button
                      onClick={() => {
                        if ("speechSynthesis" in window) {
                          window.speechSynthesis.cancel();
                          const u = new SpeechSynthesisUtterance(entry.exampleSentence!.japanese);
                          u.lang = "ja-JP"; u.rate = 0.85;
                          window.speechSynthesis.speak(u);
                        }
                      }}
                      className="rpg-btn px-2.5 py-2 text-[8px] min-h-[36px] touch-manipulation font-black"
                      aria-label="Putar contoh kalimat"
                    >🔊 Putar</button>
                  </div>
                  <div className="h-px bg-blue-200 rounded" />
                  <div
                    className="text-lg sm:text-xl font-black text-slate-800 leading-relaxed"
                    style={{ fontFamily: "var(--font-jp)" }}
                  >
                    {entry.exampleSentence.japanese}
                  </div>
                  <div className="text-xs font-black text-blue-700" style={{ fontFamily: "var(--font-jp)" }}>
                    {entry.exampleSentence.hiragana}
                  </div>
                  <div
                    className="p-3 text-xs font-bold text-slate-600 leading-relaxed"
                    style={{ background: "#ffffff", borderRadius: 8 }}
                  >
                    {entry.exampleSentence.translation}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 text-center space-y-3"
                  style={{ background: "#ffffff", border: "2px solid #e5e7eb", borderRadius: 12 }}
                >
                  <div className="text-3xl">📝</div>
                  <p className="text-[9px] font-black text-slate-500 uppercase">Belum Ada Contoh</p>
                  <p className="text-xs font-bold text-slate-400">
                    Kata <strong style={{ fontFamily: "var(--font-jp)" }}>{entry.kanji}</strong> sering muncul di JLPT {entry.level}.
                  </p>
                </div>
              )}
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
            aria-label="Tutup detail kanji"
            className="rpg-btn px-5 py-2.5 text-[9px] touch-manipulation font-black"
          >Tutup</button>
        </div>
      </div>
    </div>
  );
}
