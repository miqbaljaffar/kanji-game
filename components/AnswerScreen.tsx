"use client";
import { useMemo, useState, useEffect } from "react";
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

type Difficulty = "easy" | "medium" | "hard";

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  if (question.mode === "bunpou" && question.bunpouQuestion) {
    return {
      main: question.bunpouQuestion.sentence,
      prompt: "Lengkapi kalimat berikut!",
      sub: question.bunpouQuestion.translation,
    };
  }
  if (question.mode === "kana" && question.kanaQuestion) {
    return {
      main: question.kanaQuestion.romaji,
      prompt:
        gameMode === "hiragana-to-romaji"
          ? "Pilih huruf Hiragana yang tepat!"
          : gameMode === "katakana-to-romaji"
          ? "Pilih huruf Katakana yang tepat!"
          : "Pilih huruf Kana yang tepat!",
    };
  }
  const entry = question.kanjiQuestion!;
  if (gameMode === "kanji-to-arti")     return { main: entry.kanji,    prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti")  return { main: entry.hiragana, prompt: "Apa arti kosakata ini?" };
  if (gameMode === "kanji-to-hiragana") return { main: entry.kanji,    prompt: "Bagaimana cara bacanya?" };
  return { main: entry.arti, prompt: "Pilih kanji yang tepat!" };
}

function getAnswerText(
  answer: string | KanjiEntry | KanaEntry | null,
  gameMode: GameMode,
  kanaScript?: "hiragana" | "katakana"
): string {
  if (answer === null) return "Waktu habis";
  if (typeof answer === "string") return answer;
  if (gameMode === "arti-to-kanji")     return (answer as KanjiEntry).kanji;
  if (gameMode === "kanji-to-hiragana") return (answer as KanjiEntry).hiragana;
  if (gameMode === "hiragana-to-arti" || gameMode === "kanji-to-arti") return (answer as KanjiEntry).arti;
  if (gameMode === "hiragana-to-romaji") return (answer as KanaEntry).hiragana;
  if (gameMode === "katakana-to-romaji") return (answer as KanaEntry).katakana;
  if (gameMode === "mixed-kana") return (answer as KanaEntry)[kanaScript ?? "hiragana"];
  return (answer as KanjiEntry).arti;
}

export function AnswerScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedIndex,
  stats,
  gameMode,
  onNext,
  onExit,
}: AnswerScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const [fetchedDetails, setFetchedDetails] = useState<
    Record<string, { onyomi: string; kunyomi: string; mnemonic: string }>
  >({});

  const display        = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);
  const isJpQ          = ["kanji-to-arti","kanji-to-hiragana","hiragana-to-arti","bunpou"].includes(gameMode);
  const isJpOpt        = ["arti-to-kanji","kanji-to-hiragana","bunpou","hiragana-to-romaji","katakana-to-romaji","mixed-kana"].includes(gameMode);
  const isTimeout      = selectedIndex < 0;
  const isCorrect      = !isTimeout && selectedIndex === question.correctIndex;
  const allOptions     =
    question.mode === "bunpou"
      ? question.stringOptions!
      : question.mode === "kana"
      ? question.kanaOptions!
      : question.kanjiOptions!;
  const selectedAnswer  = isTimeout ? null : allOptions[selectedIndex];
  const correctAnswer   = allOptions[question.correctIndex];
  const selectedText    = getAnswerText(selectedAnswer, gameMode, question.kanaScript);
  const correctText     = getAnswerText(correctAnswer,  gameMode, question.kanaScript);

  /* Ekstrak karakter kanji dari soal */
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
      } catch (err) {
        console.error("Gagal fetch kanji:", err);
      }
    });
  }, [kanjiChars]);

  const matchedKanjiDetails = useMemo(
    () => kanjiChars.map((char) => ({ char, detail: kanjiDetails[char] || fetchedDetails[char] || null })),
    [kanjiChars, fetchedDetails]
  );

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

      {/* ── HEADER ── */}
      <div className="flex-none rpg-box flex items-center justify-between p-2.5 sm:p-3 mb-3 relative">
        <span className="rpg-corner rpg-corner-tl" />
        <span className="rpg-corner rpg-corner-br" />

        <button
          onClick={() => setIsExitConfirmOpen(true)}
          className="rpg-btn-red w-9 h-9 flex items-center justify-center text-sm font-black touch-manipulation"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          ✕
        </button>

        {/* Progress bar */}
        <div className="flex-1 mx-3">
          <div className="rpg-hp-bar">
            <div
              className="rpg-hp-fill bg-gradient-to-r from-purple-500 to-violet-400"
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <p className="text-[8px] text-purple-400 text-center mt-1" style={{ fontFamily: "var(--font-pixel)" }}>
            {questionIndex + 1} / {totalQuestions}
          </p>
        </div>

        <div className="rpg-box-gold px-2.5 py-1.5 flex items-center gap-1">
          <span className="text-sm">⭐</span>
          <span
            className="font-black text-yellow-300 text-xs"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {stats.score}
          </span>
        </div>
      </div>

      {/* ── KONTEN UTAMA ── */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto rpg-scroll pb-2">

        {/* Status Benar / Salah — banner besar */}
        <div
          className={clsx(
            "rpg-box relative p-3 sm:p-4 text-center",
            isCorrect ? "border-emerald-500" : "border-red-500"
          )}
          style={{
            borderColor: isCorrect ? "#4ade80" : "#f87171",
            boxShadow: isCorrect
              ? "0 0 0 1px #0f0a1e, 0 8px 24px rgba(74,222,128,0.25)"
              : "0 0 0 1px #0f0a1e, 0 8px 24px rgba(248,113,113,0.25)",
          }}
        >
          <span className="rpg-corner rpg-corner-tl" style={{ borderColor: isCorrect ? "#4ade80" : "#f87171" }} />
          <span className="rpg-corner rpg-corner-tr" style={{ borderColor: isCorrect ? "#4ade80" : "#f87171" }} />
          <span className="rpg-corner rpg-corner-bl" style={{ borderColor: isCorrect ? "#4ade80" : "#f87171" }} />
          <span className="rpg-corner rpg-corner-br" style={{ borderColor: isCorrect ? "#4ade80" : "#f87171" }} />

          <div className="text-3xl mb-1">{isCorrect ? "🎉" : isTimeout ? "⏰" : "💀"}</div>
          <p
            className={clsx(
              "text-sm sm:text-base font-black",
              isCorrect ? "text-emerald-300" : "text-red-300"
            )}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {isCorrect ? "BENAR!" : isTimeout ? "WAKTU HABIS!" : "SALAH!"}
          </p>
        </div>

        {/* Soal yang ditanyakan */}
        <div className="rpg-box relative p-4 text-center">
          <span className="rpg-corner rpg-corner-tl" />
          <span className="rpg-corner rpg-corner-br" />
          <p
            className="text-[8px] font-black text-yellow-400 uppercase tracking-[0.2em] mb-2"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            SOAL
          </p>
          <h2
            className={clsx(
              "font-black leading-tight text-white break-words",
              gameMode === "arti-to-kanji" ? "text-2xl sm:text-3xl" :
              gameMode === "bunpou"        ? "text-lg sm:text-xl"   : "text-4xl sm:text-5xl"
            )}
            style={{
              fontFamily: isJpQ ? "var(--font-jp)" : "var(--font-body)",
              textShadow: "0 0 16px rgba(167,139,250,0.5)",
            }}
          >
            {display.main}
          </h2>
          {display.sub && (
            <p className="text-xs font-bold text-purple-300 mt-2">&ldquo;{display.sub}&rdquo;</p>
          )}
        </div>

        {/* Jawaban User */}
        <div>
          <p
            className="text-[8px] font-black text-purple-400 uppercase tracking-widest mb-1.5 pl-1"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            ▸ JAWABAN KAMU
          </p>
          <div
            className={clsx(
              "rpg-box relative p-4 text-center",
              isCorrect ? "rpg-answer-correct" : "rpg-answer-wrong"
            )}
          >
            <span
              className="block font-black text-xl sm:text-2xl"
              style={{ fontFamily: isJpOpt ? "var(--font-jp)" : "var(--font-body)" }}
            >
              {selectedText}
            </span>
          </div>
        </div>

        {/* Jawaban Benar (hanya jika salah) */}
        {!isCorrect && (
          <div>
            <p
              className="text-[8px] font-black text-purple-400 uppercase tracking-widest mb-1.5 pl-1"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              ▸ JAWABAN BENAR
            </p>
            <div className="rpg-box relative p-4 text-center rpg-answer-correct">
              <span className="rpg-corner rpg-corner-tl" style={{ borderColor: "#4ade80" }} />
              <span className="rpg-corner rpg-corner-br" style={{ borderColor: "#4ade80" }} />
              <span
                className="block font-black text-xl sm:text-2xl"
                style={{ fontFamily: isJpOpt ? "var(--font-jp)" : "var(--font-body)" }}
              >
                {correctText}
              </span>
            </div>
          </div>
        )}

        {/* Detail Kata (mode kanji) */}
        {question.mode === "kanji" && question.kanjiQuestion && (
          <div className="rpg-box-dark p-4 space-y-2 text-xs">
            <p
              className="text-[8px] font-black text-yellow-400 uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              ▸ INFO KATA
            </p>
            <div className="rpg-divider" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <div>
                <span className="text-purple-400 font-black block text-[9px] uppercase">Kanji</span>
                <span className="text-white font-black text-lg" style={{ fontFamily: "var(--font-jp)" }}>
                  {question.kanjiQuestion.kanji}
                </span>
              </div>
              <div>
                <span className="text-purple-400 font-black block text-[9px] uppercase">Hiragana</span>
                <span className="text-purple-200 font-bold text-base" style={{ fontFamily: "var(--font-jp)" }}>
                  {question.kanjiQuestion.hiragana}
                </span>
              </div>
              <div>
                <span className="text-purple-400 font-black block text-[9px] uppercase">Romaji</span>
                <span className="text-purple-200 font-bold italic">{question.kanjiQuestion.romaji}</span>
              </div>
              <div>
                <span className="text-purple-400 font-black block text-[9px] uppercase">Arti</span>
                <span className="text-yellow-200 font-bold">{question.kanjiQuestion.arti}</span>
              </div>
            </div>
          </div>
        )}

        {/* Detail per karakter Kanji */}
        {matchedKanjiDetails.length > 0 && (
          <div className="space-y-2">
            <p
              className="text-[8px] font-black text-purple-400 uppercase pl-1 tracking-widest"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              ▸ DETAIL KANJI ({matchedKanjiDetails.length})
            </p>
            {matchedKanjiDetails.map(({ char, detail }) => (
              <div key={char} className="rpg-box relative p-4">
                <span className="rpg-corner rpg-corner-tl" />
                <span className="rpg-corner rpg-corner-br" />

                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-3xl font-black text-yellow-300 shrink-0"
                    style={{
                      fontFamily: "var(--font-jp)",
                      background: "#0f0a1e",
                      border: "2px solid #fbbf24",
                      textShadow: "0 0 12px rgba(251,191,36,0.6)",
                    }}
                  >
                    {char}
                  </div>
                  <div>
                    <p
                      className="text-[8px] text-purple-400 font-black uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      Karakter Kanji
                    </p>
                  </div>
                </div>

                <div className="rpg-divider" />

                <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                  <div className="rpg-box-dark p-2 rounded-sm">
                    <span
                      className="block text-[8px] font-black text-purple-400 uppercase mb-1"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      音読み (On)
                    </span>
                    <span className="text-purple-200 font-bold">{detail?.onyomi ?? "–"}</span>
                  </div>
                  <div className="rpg-box-dark p-2 rounded-sm">
                    <span
                      className="block text-[8px] font-black text-emerald-400 uppercase mb-1"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      訓読み (Kun)
                    </span>
                    <span className="text-purple-200 font-bold break-all">{detail?.kunyomi ?? "–"}</span>
                  </div>
                </div>

                <div className="rpg-box-dark p-3 mt-2 text-xs rounded-sm">
                  <span
                    className="block text-[8px] font-black text-yellow-400 uppercase mb-1"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    💡 Mnemonic
                  </span>
                  <p className="text-purple-200 font-semibold leading-relaxed">
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
          className="rpg-btn-gold w-full py-4 sm:py-5 flex items-center justify-center gap-3 touch-manipulation"
          style={{ fontFamily: "var(--font-pixel)", fontSize: "11px" }}
        >
          {questionIndex + 1 >= totalQuestions ? "⚔ LIHAT HASIL" : "SOAL BERIKUTNYA"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
