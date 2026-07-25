"use client";

import { KanjiDictionaryEntry } from "@/types";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface KanjiDetailModalProps {
  entry: KanjiDictionaryEntry | null;
  onClose: () => void;
}

export function KanjiDetailModal({ entry, onClose }: KanjiDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"breakdown" | "readings" | "sentence">("breakdown");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!entry) return null;

  const playTTS = () => {
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden animate-fade-in">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container (Bottom Sheet on Mobile, Centered Modal on Desktop) */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t-4 sm:border-4 border-white/80 overflow-hidden z-10 flex flex-col max-h-[92vh] sm:max-h-[90vh] animate-slide-up sm:animate-fade-in">
        
        {/* Mobile Handle Drag Indicator */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Header Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6 text-white overflow-hidden shrink-0">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center font-black transition-all cursor-pointer border border-white/30 z-10 active:scale-90 touch-manipulation"
          >
            ✕
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Big Kanji Display Box */}
            <div className="relative group bg-white/20 backdrop-blur-md rounded-2xl p-4 min-w-[120px] text-center border border-white/30 shadow-inner">
              <span className="text-6xl sm:text-7xl font-black font-jp tracking-tight text-white drop-shadow-md">
                {entry.kanji}
              </span>
              
              {/* Floating Audio Play Button */}
              <button
                type="button"
                onClick={playTTS}
                className={clsx(
                  "mt-2 w-full py-1.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer border shadow-sm",
                  isPlayingAudio
                    ? "bg-amber-400 text-slate-900 border-amber-300 animate-pulse"
                    : "bg-white/30 hover:bg-white/40 text-white border-white/40"
                )}
              >
                <span>🔊</span> {isPlayingAudio ? "Memutar..." : "Putar Suara"}
              </button>
            </div>

            {/* Title Info */}
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-xs",
                    entry.level === "N5" ? "bg-emerald-400 text-slate-900" : "bg-indigo-300 text-slate-900"
                  )}
                >
                  JLPT {entry.level}
                </span>

                <span className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-black text-white">
                  {isSingle ? "1 Kanji (Tunggal)" : `${entry.kanjiCount} Kanji (Majemuk)`}
                </span>

                {entry.strokes && (
                  <span className="bg-amber-400/90 text-slate-900 px-3 py-1 rounded-full text-xs font-black">
                    {entry.strokes} Goresan
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white pt-1">
                {entry.arti}
              </h2>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-white/90 text-sm font-bold pt-0.5">
                <span className="bg-black/20 px-2.5 py-0.5 rounded-lg border border-white/10 font-jp">
                  {entry.hiragana}
                </span>
                <span>•</span>
                <span className="italic">{entry.romaji}</span>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-2 sm:px-4 pt-2 sm:pt-3 shrink-0 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => setActiveTab("breakdown")}
            className={clsx(
              "px-3.5 sm:px-4 py-2.5 sm:py-3 font-black text-xs sm:text-sm transition-all border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95 touch-manipulation",
              activeTab === "breakdown"
                ? "border-blue-600 text-blue-600 bg-white rounded-t-xl"
                : "border-transparent text-slate-400 hover:text-slate-600"
            )}
          >
            <span>🧩</span> {isSingle ? "Bedah Karakter" : "Bedah Kanji Majemuk"}
          </button>

          <button
            onClick={() => setActiveTab("readings")}
            className={clsx(
              "px-3.5 sm:px-4 py-2.5 sm:py-3 font-black text-xs sm:text-sm transition-all border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95 touch-manipulation",
              activeTab === "readings"
                ? "border-blue-600 text-blue-600 bg-white rounded-t-xl"
                : "border-transparent text-slate-400 hover:text-slate-600"
            )}
          >
            <span>🗣️</span> Bacaan & Hafalan
          </button>

          <button
            onClick={() => setActiveTab("sentence")}
            className={clsx(
              "px-3.5 sm:px-4 py-2.5 sm:py-3 font-black text-xs sm:text-sm transition-all border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95 touch-manipulation",
              activeTab === "sentence"
                ? "border-blue-600 text-blue-600 bg-white rounded-t-xl"
                : "border-transparent text-slate-400 hover:text-slate-600"
            )}
          >
            <span>📝</span> Contoh Kalimat
          </button>
        </div>

        {/* Modal Tab Contents (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          
          {/* TAB 1: BREAKDOWN */}
          {activeTab === "breakdown" && (
            <div className="space-y-5 animate-fade-in">
              {!isSingle && entry.components && entry.components.length > 0 ? (
                <div>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4">
                    <h4 className="text-xs font-black text-blue-700 uppercase tracking-wider mb-1">
                      💡 Penjelasan Elemen Kanji Majemuk ({entry.kanjiCount} Karakter)
                    </h4>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      Kata <strong className="text-blue-700">{entry.kanji}</strong> terbentuk dari penggabungan {entry.components.length} karakter kanji berikut:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {entry.components.map((comp, idx) => (
                      <div
                        key={idx}
                        className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl p-4 shadow-xs transition-all flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-black font-jp shrink-0 shadow-sm">
                          {comp.char}
                        </div>
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="text-sm font-black text-slate-800">
                            Arti: <span className="text-blue-600">{comp.meaning}</span>
                          </div>
                          {comp.onyomi && (
                            <div className="text-[11px] font-bold text-slate-500">
                              Onyomi: <span className="text-slate-700">{comp.onyomi}</span>
                            </div>
                          )}
                          {comp.kunyomi && (
                            <div className="text-[11px] font-bold text-slate-500">
                              Kunyomi: <span className="text-slate-700">{comp.kunyomi}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                  <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                    <span>🈁</span> Informasi Karakter Tunggal
                  </h4>
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">
                    Kanji <strong className="text-blue-600 font-jp text-base">{entry.kanji}</strong> adalah karakter kanji dasar tingkat {entry.level} yang digunakan secara tunggal atau sebagai akar pembentuk kata lainnya.
                  </p>
                  {entry.strokes && (
                    <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-xl text-xs font-black">
                      Total Goresan (Strokes): {entry.strokes} langkah
                    </div>
                  )}
                </div>
              )}

              {/* Mnemonic Summary Box in Breakdown Tab */}
              {entry.mnemonic && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
                    <span className="text-lg">💡</span> Tips Memori & Asosiasi Visual
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                    {entry.mnemonic}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: READINGS & MNEMONIC */}
          {activeTab === "readings" && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Onyomi Card */}
                <div className="bg-white border-2 border-purple-100 rounded-2xl p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-purple-600 uppercase tracking-wider">
                      音読み (Onyomi)
                    </span>
                    <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-md font-bold">
                      Cara Baca Cina
                    </span>
                  </div>
                  <div className="text-lg font-black text-slate-800 font-jp">
                    {entry.onyomi || "-"}
                  </div>
                  <p className="text-[11px] font-bold text-slate-400">
                    Biasa digunakan pada kata majemuk (Jukugo / 2+ Kanji).
                  </p>
                </div>

                {/* Kunyomi Card */}
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">
                      訓読み (Kunyomi)
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-bold">
                      Cara Baca Jepang
                    </span>
                  </div>
                  <div className="text-lg font-black text-slate-800 font-jp">
                    {entry.kunyomi || "-"}
                  </div>
                  <p className="text-[11px] font-bold text-slate-400">
                    Biasa digunakan saat kanji berdiri sendiri atau dengan okurigana.
                  </p>
                </div>

              </div>

              {/* Mnemonic Details */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
                  <span>🧠</span> Cara Mengingat & Filosofi Visual
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed">
                  {entry.mnemonic || "Asosiasikan bentuk kanji dengan benda di sekitar untuk memudahkan hafalan dalam konteks kalimat JFT Basic A2."}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: EXAMPLE SENTENCE */}
          {activeTab === "sentence" && (
            <div className="space-y-4 animate-fade-in">
              {entry.exampleSentence ? (
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-wider">
                      Contoh Kalimat Penggunaan
                    </span>
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && "speechSynthesis" in window) {
                          window.speechSynthesis.cancel();
                          const utt = new SpeechSynthesisUtterance(entry.exampleSentence!.japanese);
                          utt.lang = "ja-JP";
                          utt.rate = 0.85;
                          window.speechSynthesis.speak(utt);
                        }
                      }}
                      className="text-xs font-black text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 flex items-center gap-1 cursor-pointer"
                    >
                      🔊 Putar Kalimat
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg sm:text-xl font-black text-slate-800 font-jp leading-relaxed">
                      {entry.exampleSentence.japanese}
                    </div>
                    <div className="text-xs font-black text-blue-600 tracking-wide">
                      {entry.exampleSentence.hiragana}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-600 pt-2 border-t border-slate-100">
                      Meaning: <span className="text-slate-800">{entry.exampleSentence.translation}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-2">
                  <div className="text-3xl">📝</div>
                  <div className="text-sm font-black text-slate-800">
                    Contoh Kalimat Sederhana
                  </div>
                  <p className="text-xs font-bold text-slate-500">
                    Kata <strong className="text-blue-600 font-jp">{entry.kanji}</strong> ({entry.hiragana}) sering muncul pada percakapan kerja dan kehidupan sehari-hari standar JFT Basic A2 / JLPT {entry.level}.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs font-bold text-slate-400">
            Kanji Master Ensiklopedia • JLPT {entry.level}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            Tutup Penjelasan
          </button>
        </div>

      </div>
    </div>
  );
}
