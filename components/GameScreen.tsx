"use client";
import { useMemo, useState } from "react";
import {
  QuizQuestion,
  AnswerState,
  GameStats,
  GameMode,
  Difficulty,
  KanjiEntry,
  KanaEntry,
} from "@/types";
import { Mascot } from "./Mascot";
import { ConfirmModal } from "./ui/ConfirmModal";
import clsx from "clsx";

interface GameScreenProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  answerState: AnswerState;
  selectedIndex: number | null;
  stats: GameStats;
  timeLeft: number;
  timeRatio: number;
  gameMode: GameMode;
  difficulty: Difficulty;
  showFloatingScore: boolean;
  floatingScoreValue: number;
  onAnswer: (idx: number) => void;
  onExit: () => void;
}

function getQuestionDisplay(
  question: QuizQuestion,
  gameMode: GameMode
): { main: string; prompt: string; sub?: string } {
  if (question.mode === "bunpou" && question.bunpouQuestion) {
    return { main: question.bunpouQuestion.sentence, prompt: "Lengkapi kalimat berikut!" };
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

/** Warna HP bar berdasarkan rasio waktu */
function hpBarColor(ratio: number) {
  if (ratio > 0.5) return "from-emerald-400 to-green-500";
  if (ratio > 0.25) return "from-yellow-400 to-amber-500";
  return "from-red-500 to-rose-600";
}

export function GameScreen({
  question,
  questionIndex,
  totalQuestions,
  answerState,
  selectedIndex,
  stats,
  timeLeft,
  timeRatio,
  gameMode,
  showFloatingScore,
  floatingScoreValue,
  onAnswer,
  onExit,
}: GameScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  const isJpFontForQuestion = [
    "kanji-to-arti","kanji-to-hiragana","hiragana-to-arti","bunpou",
  ].includes(gameMode);

  const isJpFontForOptions = [
    "arti-to-kanji","kanji-to-hiragana","bunpou",
    "hiragana-to-romaji","katakana-to-romaji","mixed-kana",
  ].includes(gameMode);

  const allOptions =
    question.mode === "bunpou"
      ? question.stringOptions!
      : question.mode === "kana"
      ? question.kanaOptions!
      : question.kanjiOptions!;

  function getOptionText(opt: string | KanjiEntry | KanaEntry): string {
    if (question.mode === "bunpou") return opt as string;
    if (question.mode === "kana") {
      const o = opt as KanaEntry;
      const script = question.kanaScript ?? (gameMode === "hiragana-to-romaji" ? "hiragana" : "katakana");
      return o[script];
    }
    const o = opt as KanjiEntry;
    if (gameMode === "arti-to-kanji")   return o.kanji;
    if (gameMode === "kanji-to-hiragana") return o.hiragana;
    return o.arti;
  }

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

      {/* ── HEADER BAR ── */}
      <div className="flex-none rpg-box flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 mb-3 relative">
        <span className="rpg-corner rpg-corner-tl" />
        <span className="rpg-corner rpg-corner-br" />

        {/* Tombol keluar */}
        <button
          onClick={() => setIsExitConfirmOpen(true)}
          className="rpg-btn-red w-9 h-9 flex items-center justify-center text-sm font-black shrink-0 touch-manipulation"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          ✕
        </button>

        {/* Progress + Timer section */}
        <div className="flex-1 min-w-0 space-y-1.5">
          {/* Soal ke-X / Total */}
          <div className="flex justify-between items-center">
            <span
              className="text-[8px] text-purple-300 font-black uppercase tracking-widest"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              QUEST {questionIndex + 1}/{totalQuestions}
            </span>
            {/* Timer */}
            <div className="flex items-center gap-1">
              <span className="text-[9px] text-purple-300">⏱</span>
              <span
                className={clsx(
                  "text-[10px] font-black w-5 text-right",
                  timeRatio <= 0.3 ? "text-red-400 animate-pulse" : "text-yellow-300"
                )}
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {timeLeft}
              </span>
            </div>
          </div>

          {/* HP Bar (progres soal) */}
          <div className="rpg-hp-bar">
            <div
              className={clsx("rpg-hp-fill bg-gradient-to-r", hpBarColor(timeRatio))}
              style={{ width: `${timeRatio * 100}%` }}
            />
          </div>

          {/* EXP / Progress soal */}
          <div className="rpg-hp-bar" style={{ height: "8px" }}>
            <div
              className="rpg-hp-fill bg-gradient-to-r from-purple-500 to-violet-400"
              style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Skor */}
        <div className="rpg-box-gold px-2.5 py-1.5 flex items-center gap-1 shrink-0">
          <span className="text-sm">⭐</span>
          <span
            className="font-black text-yellow-300 text-xs sm:text-sm"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {stats.score}
          </span>
        </div>
      </div>

      {/* ── BATTLE AREA ── */}
      <div className="flex-1 flex flex-col justify-center relative mt-10 mb-4 z-10 min-h-0">

        {/* Maskot (sprite karakter) */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
          <div
            className="p-2 rounded-sm"
            style={{
              background: "#1e1040",
              border: "3px solid #7c3aed",
              boxShadow: "0 0 0 1px #0f0a1e, 0 4px 16px rgba(124,58,237,0.4)",
            }}
          >
            <Mascot state={answerState} />
          </div>
        </div>

        {/* Dialog box pertanyaan */}
        <div className="rpg-box w-full relative flex flex-col items-center justify-center p-5 sm:p-7 text-center min-h-40">
          <span className="rpg-corner rpg-corner-tl" />
          <span className="rpg-corner rpg-corner-tr" />
          <span className="rpg-corner rpg-corner-bl" />
          <span className="rpg-corner rpg-corner-br" />

          <p
            className="text-[8px] sm:text-[9px] font-black text-yellow-400 uppercase tracking-[0.2em] mb-3 mt-3"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {display.prompt}
          </p>

          <h2
            className={clsx(
              "font-black leading-tight text-white break-words w-full",
              gameMode === "arti-to-kanji"
                ? "text-3xl sm:text-4xl"
                : gameMode === "bunpou"
                ? "text-xl sm:text-2xl"
                : "text-5xl sm:text-7xl"
            )}
            style={{
              fontFamily: isJpFontForQuestion ? "var(--font-jp)" : "var(--font-body)",
              textShadow: "0 0 20px rgba(167,139,250,0.6)",
            }}
          >
            {display.main}
          </h2>

          {display.sub && (
            <p className="text-xs sm:text-sm font-bold text-purple-300 mt-3 px-2">
              &ldquo;{display.sub}&rdquo;
            </p>
          )}

          {/* Floating score */}
          {showFloatingScore && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float-score">
              <span
                className="text-4xl sm:text-5xl font-black text-yellow-300"
                style={{
                  fontFamily: "var(--font-pixel)",
                  textShadow: "0 0 12px rgba(251,191,36,0.8)",
                }}
              >
                +{floatingScoreValue}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── GRID JAWABAN ── */}
      <div className="flex-none grid grid-cols-2 gap-2.5 sm:gap-3 pb-3 z-20">
        {allOptions.map((opt, idx) => {
          const optionText = getOptionText(opt);

          const isSelected = selectedIndex === idx;
          const isCorrectOpt = idx === question.correctIndex;
          const revealed = answerState !== "idle";

          let stateClass = "";
          if (revealed && isCorrectOpt) stateClass = "rpg-answer-correct";
          else if (revealed && isSelected && !isCorrectOpt) stateClass = "rpg-answer-wrong";

          return (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              disabled={answerState !== "idle"}
              className={clsx(
                "rpg-btn relative w-full p-3.5 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-150 outline-none touch-manipulation",
                stateClass,
                !revealed && "hover:-translate-y-0.5"
              )}
            >
              <span
                className={clsx(
                  "block font-black leading-tight",
                  isJpFontForOptions ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                )}
                style={{
                  fontFamily: isJpFontForOptions ? "var(--font-jp)" : "var(--font-body)",
                }}
              >
                {optionText}
              </span>
              {/* Indikator benar/salah */}
              {revealed && isCorrectOpt && (
                <span className="text-xs mt-1 text-emerald-300" style={{ fontFamily: "var(--font-pixel)" }}>
                  ✓ BENAR
                </span>
              )}
              {revealed && isSelected && !isCorrectOpt && (
                <span className="text-xs mt-1 text-red-300" style={{ fontFamily: "var(--font-pixel)" }}>
                  ✗ SALAH
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
