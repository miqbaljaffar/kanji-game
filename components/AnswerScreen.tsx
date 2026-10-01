"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import { QuizQuestion, GameMode, GameStats, KanjiEntry, KanaEntry } from "@/types";
import { ConfirmModal } from "./ui/ConfirmModal";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { kanjiDetails } from "@/data/kanjiDetails";

interface AnswerScreenProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedIndex: number;
  stats: GameStats;
  gameMode: GameMode;
  onNext: () => void;
  onExit: () => void;
}

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  if (question.mode === "bunpou" && question.bunpouQuestion)
    return { main: question.bunpouQuestion.sentence, prompt: "Lengkapi kalimat berikut!", sub: question.bunpouQuestion.translation };
  if (question.mode === "kana" && question.kanaQuestion)
    return {
      main: question.kanaQuestion.romaji,
      prompt: gameMode === "hiragana-to-romaji" ? "Pilih huruf Hiragana yang tepat!"
        : gameMode === "katakana-to-romaji" ? "Pilih huruf Katakana yang tepat!"
        : "Pilih huruf Kana yang tepat!",
    };
  const entry = question.kanjiQuestion!;
  if (gameMode === "kanji-to-arti")     return { main: entry.kanji,    prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti")  return { main: entry.hiragana, prompt: "Apa arti kosakata ini?" };
  if (gameMode === "kanji-to-hiragana") return { main: entry.kanji,    prompt: "Bagaimana cara bacanya?" };
  return { main: entry.arti, prompt: "Pilih kanji yang tepat!" };
}

function getAnswerText(
  answer: string | KanjiEntry | KanaEntry | null,
  gameMode: GameMode,
  kanaScript?: "hiragana" | "katakana",
): string {
  if (answer === null) return "Waktu habis";
  if (typeof answer === "string") return answer;
  if (gameMode === "arti-to-kanji")      return (answer as KanjiEntry).kanji;
  if (gameMode === "kanji-to-hiragana")  return (answer as KanjiEntry).hiragana;
  if (gameMode === "hiragana-to-arti" || gameMode === "kanji-to-arti") return (answer as KanjiEntry).arti;
  if (gameMode === "hiragana-to-romaji") return (answer as KanaEntry).hiragana;
  if (gameMode === "katakana-to-romaji") return (answer as KanaEntry).katakana;
  if (gameMode === "mixed-kana")         return (answer as KanaEntry)[kanaScript ?? "hiragana"];
  return (answer as KanjiEntry).arti;
}

function getComboLabel(streak: number): { text: string; color: string } | null {
  if (streak < 2) return null;
  if (streak >= 10) return { text: `🔥 ${streak}x LEGENDARY!!`, color: "#ff9600" };
  if (streak >= 7)  return { text: `⚡ ${streak}x AMAZING!`,    color: "#ce82ff" };
  if (streak >= 5)  return { text: `✨ ${streak}x GREAT!`,       color: "#1cb0f6" };
  if (streak >= 3)  return { text: `💥 ${streak}x COMBO!`,      color: "#58cc02" };
  return               { text: `⭐ ${streak}x NICE!`,            color: "#ffc800" };
}

export function AnswerScreen({
  question, questionIndex, totalQuestions, selectedIndex,
  stats, gameMode, onNext, onExit,
}: AnswerScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const [fetchedDetails, setFetchedDetails] = useState<
    Record<string, { onyomi: string; kunyomi: string; mnemonic: string }>
  >({});
  const [showCombo, setShowCombo] = useState(false);
  const comboTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stats.streak >= 2) {
      setShowCombo(true);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => setShowCombo(false), 1800);
    }
    return () => { if (comboTimerRef.current) clearTimeout(comboTimerRef.current); };
  }, [stats.streak]);

  const display   = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);
  const isJpQ     = ["kanji-to-arti","kanji-to-hiragana","hiragana-to-arti","bunpou"].includes(gameMode);
  const isJpOpt   = ["arti-to-kanji","kanji-to-hiragana","bunpou","hiragana-to-romaji","katakana-to-romaji","mixed-kana"].includes(gameMode);
  const isTimeout = selectedIndex < 0;
  const isCorrect = !isTimeout && selectedIndex === question.correctIndex;

  const allOptions =
    question.mode === "bunpou" ? question.stringOptions!
    : question.mode === "kana" ? question.kanaOptions!
    : question.kanjiOptions!;
  const selectedAnswer = isTimeout ? null : allOptions[selectedIndex];
  const correctAnswer  = allOptions[question.correctIndex];
  const selectedText   = getAnswerText(selectedAnswer, gameMode, question.kanaScript);
  const correctText    = getAnswerText(correctAnswer,  gameMode, question.kanaScript);

  const comboLabel = getComboLabel(stats.streak);

  const kanjiChars = useMemo(() => {
    if (question.mode !== "kanji" || !question.kanjiQuestion) return [];
    const matches = question.kanjiQuestion.kanji.match(/[\u4e00-\u9faf]/g) || [];
    return Array.from(new Set(matches));
  }, [question]);

  useEffect(() => {
    kanjiChars.forEach(async (char) => {
      if (kanjiDetails[char] || fetchedDetails[char]) return;
      try {
        const res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(char)}`);
        if (res.ok) {
          const data = await res.json();
          const onyomi   = data.on_readings.join(", ")  || "-";
          const kunyomi  = data.kun_readings.join(", ") || "-";
          const meanings = data.meanings.slice(0, 3).join(", ");
          const mnemonic = `Arti: ${meanings}. Jumlah coretan: ${data.stroke_count}.`;
          setFetchedDetails((prev) => prev[char] ? prev : { ...prev, [char]: { onyomi, kunyomi, mnemonic } });
        }
      } catch (err) { console.error("Gagal fetch kanji:", err); }
    });
  }, [kanjiChars]);

  const matchedKanjiDetails = useMemo(
    () => kanjiChars.map((char) => ({ char, detail: kanjiDetails[char] || fetchedDetails[char] || null })),
    [kanjiChars, fetchedDetails],
  );

  /* colors */
  const statusBg     = isCorrect ? "#d7ffb8" : isTimeout ? "#fff8d6" : "#ffe0e0";
  const statusBorder = isCorrect ? "#58cc02" : isTimeout ? "#ffc800" : "#ff4b4b";
  const statusText   = isCorrect ? "#2a7000" : isTimeout ? "#7a5a00" : "#880000";

  return (
    <div className="relative z-10 flex flex-col min-h-dvh p-3 sm:p-5 max-w-lg mx-auto overflow-x-hidden">
      {isExitConfirmOpen && (
        <ConfirmModal
          title="Keluar permainan?"
          message="Jika kamu keluar sekarang, permainan akan selesai dan hasil akan ditampilkan."
          confirmText="Ya, selesai"
          cancelText="Lanjutkan"
          onConfirm={() => { setIsExitConfirmOpen(false); onExit(); }}
          onCancel={() => setIsExitConfirmOpen(false)}
        />
      )}

      {/* ── COMBO POPUP ── */}
      {showCombo && comboLabel && isCorrect && (
        <div
          className="fixed top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          style={{ animation: "comboPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards, comboFade 0.8s ease-out 1s forwards" }}
        >
          <div
            className="px-5 py-3 text-center whitespace-nowrap"
            style={{
              background: "#ffffff",
              border: `2px solid ${comboLabel.color}`,
              borderBottom: `4px solid ${comboLabel.color}`,
              borderRadius: 14,
              boxShadow: `0 4px 20px ${comboLabel.color}40`,
            }}
          >
            <span className="font-black text-sm sm:text-base" style={{ color: comboLabel.color }}>
              {comboLabel.text}
            </span>
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      <div
        className="flex-none flex items-center justify-between p-2.5 sm:p-3 mb-3"
        style={{
          background: "#ffffff",
          border: "2px solid #e5e7eb",
          borderBottom: "4px solid #d1d5db",
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => setIsExitConfirmOpen(true)}
          aria-label="Keluar dari permainan"
          className="rpg-btn-red w-11 h-11 flex items-center justify-center text-sm font-black touch-manipulation rounded-xl"
        >✕</button>

        <div className="flex-1 mx-3">
          <div className="rpg-hp-bar">
            <div
              className="rpg-hp-fill bg-gradient-to-r from-blue-400 to-cyan-400"
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%`, transition: "width 0.5s ease" }}
            />
          </div>
          <p className="text-[9px] text-slate-400 font-black text-center mt-1 uppercase tracking-widest">
            {questionIndex + 1} / {totalQuestions}
          </p>
        </div>

        <div
          className="px-2.5 py-1.5 flex items-center gap-1"
          style={{
            background: "#fff8d6",
            border: "2px solid #ffc800",
            borderBottom: "3px solid #c49800",
            borderRadius: 10,
          }}
        >
          <span className="text-sm">⭐</span>
          <span className="font-black text-amber-600 text-xs">{stats.score}</span>
        </div>
      </div>

      {/* ── KONTEN ── */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto rpg-scroll pb-2">

        {/* Status Benar / Salah */}
        <div
          className="screen-enter relative p-3 sm:p-4 text-center"
          style={{
            background: statusBg,
            border: `2px solid ${statusBorder}`,
            borderBottom: `4px solid ${statusBorder}`,
            borderRadius: 16,
            boxShadow: `0 4px 16px ${statusBorder}30`,
          }}
        >
          <div className="text-3xl mb-1">{isCorrect ? "🎉" : isTimeout ? "⏰" : "💔"}</div>
          <p className="text-sm sm:text-base font-black" style={{ color: statusText }}>
            {isCorrect ? "BENAR! Keren!" : isTimeout ? "WAKTU HABIS!" : "SALAH! Coba lagi!"}
          </p>

          {/* Streak dots */}
          {stats.streak >= 2 && isCorrect && (
            <div className="mt-2 flex items-center justify-center gap-1">
              {Array.from({ length: Math.min(stats.streak, 10) }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"
                  style={{
                    animation: `bouncePop 0.4s cubic-bezier(0.175,0.885,0.32,1.275) ${i * 0.05}s both`,
                    opacity: 0.6 + i * 0.04,
                  }}
                />
              ))}
              <span className="text-[9px] font-black text-green-700 ml-1">{stats.streak} STREAK! 🔥</span>
            </div>
          )}
        </div>

        {/* Soal */}
        <div
          className="relative p-4 text-center card-enter stagger-1"
          style={{
            background: "#ffffff",
            border: "2px solid #e5e7eb",
            borderBottom: "4px solid #d1d5db",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mb-2">SOAL</p>
          <h2
            className={clsx(
              "font-black leading-tight text-slate-800 break-words",
              gameMode === "arti-to-kanji" ? "text-2xl sm:text-3xl"
              : gameMode === "bunpou" ? "text-lg sm:text-xl" : "text-4xl sm:text-5xl",
            )}
            style={{ fontFamily: isJpQ ? "var(--font-jp)" : "var(--font-body)" }}
          >{display.main}</h2>
          {display.sub && (
            <p className="text-xs font-bold text-slate-500 mt-2">&ldquo;{display.sub}&rdquo;</p>
          )}
        </div>

        {/* Jawaban User */}
        <div className="card-enter stagger-2">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5 pl-1">
            › Jawaban kamu
          </p>
          <div
            className="relative p-4 text-center rpg-answer-correct"
            style={!isCorrect ? {
              background: "#ffe0e0",
              border: "2px solid #ff4b4b",
              borderBottom: "4px solid #cc0000",
              borderRadius: 14,
            } : {
              background: "#d7ffb8",
              border: "2px solid #58cc02",
              borderBottom: "4px solid #46a302",
              borderRadius: 14,
            }}
          >
            <span
              className="block font-black text-xl sm:text-2xl"
              style={{
                fontFamily: isJpOpt ? "var(--font-jp)" : "var(--font-body)",
                color: isCorrect ? "#2a7000" : "#880000",
              }}
            >
              {selectedText}
            </span>
          </div>
        </div>

        {/* Jawaban Benar (jika salah) */}
        {!isCorrect && (
          <div className="card-enter stagger-3">
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5 pl-1">
              › Jawaban yang benar
            </p>
            <div
              className="relative p-4 text-center"
              style={{
                background: "#d7ffb8",
                border: "2px solid #58cc02",
                borderBottom: "4px solid #46a302",
                borderRadius: 14,
              }}
            >
              <span
                className="block font-black text-xl sm:text-2xl text-green-800"
                style={{ fontFamily: isJpOpt ? "var(--font-jp)" : "var(--font-body)" }}
              >
                {correctText}
              </span>
            </div>
          </div>
        )}

        {/* Detail kata (kanji mode) */}
        {question.mode === "kanji" && question.kanjiQuestion && (
          <div
            className="card-enter stagger-4 p-4 space-y-2 text-xs"
            style={{
              background: "#f0fdf4",
              border: "2px solid #bbf7d0",
              borderBottom: "4px solid #86efac",
              borderRadius: 14,
            }}
          >
            <p className="text-[9px] font-black text-green-700 uppercase tracking-[0.15em]">📖 Info Kata</p>
            <div className="h-px bg-green-200 rounded" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <div>
                <span className="text-green-600 font-black block text-[9px] uppercase">Kanji</span>
                <span className="text-slate-800 font-black text-lg" style={{ fontFamily: "var(--font-jp)" }}>
                  {question.kanjiQuestion.kanji}
                </span>
              </div>
              <div>
                <span className="text-green-600 font-black block text-[9px] uppercase">Hiragana</span>
                <span className="text-slate-700 font-bold text-base" style={{ fontFamily: "var(--font-jp)" }}>
                  {question.kanjiQuestion.hiragana}
                </span>
              </div>
              <div>
                <span className="text-green-600 font-black block text-[9px] uppercase">Romaji</span>
                <span className="text-slate-600 font-bold italic">{question.kanjiQuestion.romaji}</span>
              </div>
              <div>
                <span className="text-green-600 font-black block text-[9px] uppercase">Arti</span>
                <span className="text-amber-700 font-bold">{question.kanjiQuestion.arti}</span>
              </div>
            </div>
          </div>
        )}

        {/* Detail per karakter kanji */}
        {matchedKanjiDetails.length > 0 && (
          <div className="space-y-2">
            <p className="text-[9px] font-black text-slate-500 uppercase pl-1 tracking-widest">
              🔍 Detail Kanji ({matchedKanjiDetails.length})
            </p>
            {matchedKanjiDetails.map(({ char, detail }, di) => (
              <div
                key={char}
                className={`card-enter stagger-${Math.min(di + 5, 12)} p-4`}
                style={{
                  background: "#ffffff",
                  border: "2px solid #e5e7eb",
                  borderBottom: "4px solid #d1d5db",
                  borderRadius: 14,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-3xl font-black shrink-0"
                    style={{
                      fontFamily: "var(--font-jp)",
                      background: "#fff8d6",
                      border: "2px solid #ffc800",
                      borderRadius: 10,
                      color: "#7a5a00",
                    }}
                  >{char}</div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
                    Karakter Kanji
                  </p>
                </div>

                <div className="h-px bg-gray-100 mb-3 rounded" />

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div
                    className="p-2"
                    style={{ background: "#f5e6ff", border: "1px solid #ce82ff", borderRadius: 8 }}
                  >
                    <span className="block text-[8px] font-black text-purple-600 uppercase mb-1">音読み (On)</span>
                    <span className="text-slate-700 font-bold">{detail?.onyomi ?? "–"}</span>
                  </div>
                  <div
                    className="p-2"
                    style={{ background: "#d7ffb8", border: "1px solid #58cc02", borderRadius: 8 }}
                  >
                    <span className="block text-[8px] font-black text-green-700 uppercase mb-1">訓読み (Kun)</span>
                    <span className="text-slate-700 font-bold break-all">{detail?.kunyomi ?? "–"}</span>
                  </div>
                </div>

                <div
                  className="p-3 mt-2 text-xs"
                  style={{ background: "#fffef0", border: "1px solid #ffc800", borderRadius: 8 }}
                >
                  <span className="block text-[8px] font-black text-amber-600 uppercase mb-1">💡 Mnemonic</span>
                  <p className="text-slate-600 font-semibold leading-relaxed">
                    {detail?.mnemonic ?? "Bayangkan visual kanji ini agar mudah diingat."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── TOMBOL LANJUT ── */}
      <div className="flex-none pt-3">
        <button
          onClick={onNext}
          aria-label={questionIndex + 1 >= totalQuestions ? "Lihat hasil akhir" : "Lanjut ke soal berikutnya"}
          className="rpg-btn-gold w-full py-4 sm:py-5 flex items-center justify-center gap-3 touch-manipulation rpg-glow-gold rounded-xl text-sm font-black"
        >
          {questionIndex + 1 >= totalQuestions ? "🏆 Lihat Hasil" : "Soal Berikutnya"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
