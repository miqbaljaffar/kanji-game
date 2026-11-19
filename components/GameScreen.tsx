"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import {
  QuizQuestion, AnswerState, GameStats, GameMode, Difficulty,
  KanjiEntry, KanaEntry,
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
  gameMode: GameMode,
): { main: string; prompt: string; sub?: string } {
  if (question.mode === "bunpou" && question.bunpouQuestion)
    return { main: question.bunpouQuestion.sentence, prompt: "Lengkapi kalimat berikut!" };
  if (question.mode === "kana" && question.kanaQuestion)
    return {
      main: question.kanaQuestion.romaji,
      prompt:
        gameMode === "hiragana-to-romaji" ? "Pilih huruf Hiragana yang tepat!"
        : gameMode === "katakana-to-romaji" ? "Pilih huruf Katakana yang tepat!"
        : "Pilih huruf Kana yang tepat!",
    };
  const e = question.kanjiQuestion!;
  if (gameMode === "kanji-to-arti")     return { main: e.kanji,    prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti")  return { main: e.hiragana, prompt: "Apa arti kosakata ini?" };
  if (gameMode === "kanji-to-hiragana") return { main: e.kanji,    prompt: "Bagaimana cara bacanya?" };
  return { main: e.arti, prompt: "Pilih kanji yang tepat!" };
}

function hpBarColor(ratio: number): string {
  if (ratio > 0.5) return "from-emerald-400 to-green-500";
  if (ratio > 0.25) return "from-yellow-400 to-amber-500";
  return "from-red-400 to-rose-500";
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState,
  selectedIndex, stats, timeLeft, timeRatio, gameMode,
  showFloatingScore, floatingScoreValue, onAnswer, onExit,
}: GameScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const [hpKey, setHpKey] = useState(0);
  const [mascotAttacking, setMascotAttacking] = useState(false);
  const [glowIdx, setGlowIdx] = useState<number | null>(null);
  const prevQuestionRef = useRef<QuizQuestion | null>(null);

  useEffect(() => {
    if (prevQuestionRef.current !== question) {
      prevQuestionRef.current = question;
      setHpKey((k) => k + 1);
    }
  }, [question]);

  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  const isJpQ   = ["kanji-to-arti","kanji-to-hiragana","hiragana-to-arti","bunpou"].includes(gameMode);
  const isJpOpt = ["arti-to-kanji","kanji-to-hiragana","bunpou","hiragana-to-romaji","katakana-to-romaji","mixed-kana"].includes(gameMode);

  const allOptions =
    question.mode === "bunpou" ? question.stringOptions!
    : question.mode === "kana" ? question.kanaOptions!
    : question.kanjiOptions!;

  function getOptionText(opt: string | KanjiEntry | KanaEntry): string {
    if (question.mode === "bunpou") return opt as string;
    if (question.mode === "kana") {
      const o = opt as KanaEntry;
      const s = question.kanaScript ?? (gameMode === "hiragana-to-romaji" ? "hiragana" : "katakana");
      return o[s];
    }
    const o = opt as KanjiEntry;
    if (gameMode === "arti-to-kanji")     return o.kanji;
    if (gameMode === "kanji-to-hiragana") return o.hiragana;
    return o.arti;
  }

  function handleAnswerClick(idx: number) {
    if (answerState !== "idle") return;
    setMascotAttacking(true);
    setGlowIdx(idx);
    setTimeout(() => setMascotAttacking(false), 400);
    setTimeout(() => setGlowIdx(null), 600);
    onAnswer(idx);
  }

  return (
    <main
      className="relative z-10 flex flex-col min-h-dvh p-3 sm:p-5 xl:p-6 max-w-lg xl:max-w-2xl mx-auto overflow-x-hidden"
      aria-label="Layar permainan"
    >
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
      <div className="dm-game-header flex-none flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 mb-3">
        {/* Exit button */}
        <button
          onClick={() => setIsExitConfirmOpen(true)}
          aria-label="Keluar dari permainan"
          className="rpg-btn-red w-11 h-11 flex items-center justify-center text-sm font-black shrink-0 touch-manipulation rounded-xl"
        >✕</button>

        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs dm-text-secondary font-black uppercase tracking-widest">
              {questionIndex + 1} / {totalQuestions}
            </span>
            {/* Timer */}
            <div className="flex items-center gap-1">
              <span className="text-[11px]" aria-hidden="true">⏱</span>
              <span
                className={clsx(
                  "text-xs font-black w-5 text-right tabular-nums",
                  timeRatio <= 0.3 ? "text-red-500 animate-pulse" : "dm-text-secondary",
                )}
                aria-label={`Waktu tersisa ${timeLeft} detik`}
              >{timeLeft}</span>
            </div>
          </div>

          {/* HP Bar (timer) */}
          <div className="rpg-hp-bar" role="progressbar" aria-label="Timer" aria-valuenow={Math.round(timeRatio*100)} aria-valuemin={0} aria-valuemax={100}>
            <div
              key={`hp-${hpKey}`}
              className={clsx("rpg-hp-fill bg-gradient-to-r rpg-hp-fill-new", hpBarColor(timeRatio))}
              style={{ width: `${timeRatio * 100}%` }}
            />
          </div>

          {/* EXP Bar (progress soal) */}
          <div className="rpg-hp-bar" style={{ height: "8px" }} role="progressbar" aria-label="Progress soal" aria-valuenow={questionIndex} aria-valuemin={0} aria-valuemax={totalQuestions}>
            <div
              className="rpg-hp-fill bg-gradient-to-r from-blue-400 to-cyan-400"
              style={{ width: `${(questionIndex / totalQuestions) * 100}%`, transition: "width 0.5s ease" }}
            />
          </div>
        </div>

        {/* Skor */}
        <div className="dm-score-box px-2.5 py-1.5 flex items-center gap-1 shrink-0">
          <span className="text-sm" aria-hidden="true">⭐</span>
          <span className="font-black text-amber-600 dark:text-amber-400 text-xs sm:text-sm tabular-nums">
            {stats.score}
          </span>
        </div>
      </div>

      {/* ── QUESTION AREA ── */}
      <section
        aria-label="Area soal"
        className="flex-1 flex flex-col justify-center relative mt-10 mb-4 z-10 min-h-0"
      >
        {/* Mascot */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
          <div
            className={clsx(
              "dm-mascot-box p-2 transition-transform",
              mascotAttacking ? "[animation:mascotAttack_0.35s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]" : "",
            )}
          >
            <Mascot state={answerState} />
          </div>
        </div>

        {/* Kotak pertanyaan */}
        <div className="dm-question-box w-full relative flex flex-col items-center justify-center p-5 sm:p-7 text-center min-h-40">
          <p className="text-xs font-black dm-text-muted uppercase tracking-[0.18em] mb-3 mt-3">
            {display.prompt}
          </p>

          <h2
            className={clsx(
              "font-black leading-tight dm-text-primary break-words w-full",
              gameMode === "arti-to-kanji" ? "text-3xl sm:text-4xl"
              : gameMode === "bunpou"       ? "text-lg sm:text-2xl"
              : "text-5xl sm:text-7xl",
            )}
            style={{ fontFamily: isJpQ ? "var(--font-jp)" : "var(--font-body)" }}
          >{display.main}</h2>

          {display.sub && (
            <p className="text-xs sm:text-sm font-bold dm-text-secondary mt-3 px-2">
              &ldquo;{display.sub}&rdquo;
            </p>
          )}

          {/* Floating score */}
          {showFloatingScore && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float-score">
              <span
                className="text-4xl sm:text-5xl font-black text-amber-500"
                style={{ textShadow: "0 2px 8px rgba(255,200,0,0.6)" }}
              >+{floatingScoreValue}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── GRID JAWABAN ── */}
      <section
        aria-label="Pilihan jawaban"
        className="flex-none grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2.5 pb-3 z-20"
      >
        {allOptions.map((opt, idx) => {
          const optionText   = getOptionText(opt);
          const isSelected   = selectedIndex === idx;
          const isCorrectOpt = idx === question.correctIndex;
          const revealed     = answerState !== "idle";

          let stateClass = "";
          if (revealed && isCorrectOpt)    stateClass = "rpg-answer-correct";
          else if (revealed && isSelected) stateClass = "rpg-answer-wrong";

          return (
            <button
              key={idx}
              onClick={() => handleAnswerClick(idx)}
              disabled={answerState !== "idle"}
              aria-label={`Pilihan ${idx + 1}: ${optionText}${revealed ? (isCorrectOpt ? " — Jawaban benar" : isSelected ? " — Jawaban salah" : "") : ""}`}
              aria-pressed={isSelected || undefined}
              className={clsx(
                "rpg-btn relative w-full p-3 sm:p-4 flex flex-col items-center justify-center",
                "min-h-[52px] sm:min-h-[64px] text-center transition-all duration-150",
                "outline-none touch-manipulation overflow-hidden",
                stateClass,
                !revealed && "hover:-translate-y-0.5 active:translate-y-0",
              )}
            >
              {/* Glow burst overlay */}
              {glowIdx === idx && (
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "inherit",
                    background: "radial-gradient(circle, rgba(88,204,2,0.3) 0%, transparent 70%)",
                    animation: "glowBurst 0.5s ease-out forwards",
                  }}
                  aria-hidden="true"
                />
              )}

              <span
                className={clsx(
                  "block font-black leading-tight relative z-10 dm-text-primary",
                  isJpOpt ? "text-lg sm:text-2xl" : "text-sm sm:text-base",
                )}
                style={{ fontFamily: isJpOpt ? "var(--font-jp)" : "var(--font-body)" }}
              >{optionText}</span>

              {revealed && isCorrectOpt && (
                <span className="text-xs mt-1 font-black text-green-600 relative z-10">✓ BENAR</span>
              )}
              {revealed && isSelected && !isCorrectOpt && (
                <span className="text-xs mt-1 font-black text-red-500 relative z-10">✗ SALAH</span>
              )}
            </button>
          );
        })}
      </section>
    </main>
  );
}
