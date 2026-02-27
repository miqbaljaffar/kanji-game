"use client";
import { useMemo } from "react";
import { QuizQuestion, AnswerState, GameStats, GameMode, Difficulty } from "@/types";
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
  onHome: () => void;
}

const OPTION_COLORS = [
  { idle: "border-pink-500/40 hover:border-pink-400", bg: "hover:bg-pink-500/10", label: "A", labelBg: "bg-pink-500" },
  { idle: "border-cyan-500/40 hover:border-cyan-400", bg: "hover:bg-cyan-500/10", label: "B", labelBg: "bg-cyan-500" },
  { idle: "border-violet-500/40 hover:border-violet-400", bg: "hover:bg-violet-500/10", label: "C", labelBg: "bg-violet-500" },
  { idle: "border-amber-500/40 hover:border-amber-400", bg: "hover:bg-amber-500/10", label: "D", labelBg: "bg-amber-500" },
];

const DIFFICULTY_COLORS = { easy: "text-green-400", medium: "text-yellow-400", hard: "text-red-400" };
const TIMER_COLORS = { high: "bg-green-400", mid: "bg-yellow-400", low: "bg-red-400" };

const MODE_LABELS: Record<GameMode, string> = {
  "kanji-to-arti": "漢字 → Arti",
  "arti-to-kanji": "Arti → 漢字",
  "hiragana-to-arti": "ひら → Arti",
};

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  const { question: entry } = question;
  if (gameMode === "kanji-to-arti") {
    return { main: entry.kanji, sub: entry.hiragana, prompt: "Apa artinya?" };
  } else if (gameMode === "hiragana-to-arti") {
    return { main: entry.hiragana, sub: entry.romaji, prompt: "Apa artinya?" };
  } else {
    return { main: entry.arti, sub: entry.romaji, prompt: "Pilih kanjinya!" };
  }
}

function getOptionText(option: { kanji: string; arti: string; hiragana: string }, gameMode: GameMode): string {
  if (gameMode === "arti-to-kanji") return option.kanji;
  return option.arti;
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState,
  selectedIndex, stats, timeLeft, timeRatio, gameMode, difficulty,
  showFloatingScore, floatingScoreValue, onAnswer, onHome,
}: GameScreenProps) {
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  const timerColor = timeRatio > 0.6 ? TIMER_COLORS.high : timeRatio > 0.3 ? TIMER_COLORS.mid : TIMER_COLORS.low;

  const getOptionState = (idx: number) => {
    if (answerState === "idle") return "idle";
    if (idx === question.correctIndex) return "correct";
    if (idx === selectedIndex && idx !== question.correctIndex) return "wrong";
    return "disabled";
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col px-4 py-4 max-w-lg mx-auto">
      {/* Top HUD */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onHome}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/10 border border-white/10"
        >
          ← Menu
        </button>

        {/* Score & Streak */}
        <div className="flex items-center gap-3">
          {stats.streak >= 2 && (
            <div className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/50 rounded-full px-3 py-1 animate-bounce-in">
              <span className="text-xs">🔥</span>
              <span className="text-xs font-black text-orange-400">×{stats.streak}</span>
            </div>
          )}
          <div className="text-right">
            <div className="text-xs text-gray-500">SKOR</div>
            <div className="text-lg font-black text-white neon-text-yellow leading-none">
              {stats.score.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>Soal {questionIndex + 1} / {totalQuestions}</span>
          <span className={DIFFICULTY_COLORS[difficulty]}>{MODE_LABELS[gameMode]}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-500"
            style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        {/* Progress dots */}
        <div className="flex gap-1 mt-2 flex-wrap">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={clsx("progress-dot", {
                "bg-pink-500": i < questionIndex,
                "bg-pink-400 ring-2 ring-pink-300": i === questionIndex,
                "bg-white/15": i > questionIndex,
              })}
            />
          ))}
        </div>
      </div>

      {/* Timer */}
      <div className="mb-5 relative">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">⏱ Waktu</span>
          <span className={clsx("font-black", {
            "text-green-400": timeRatio > 0.6,
            "text-yellow-400": timeRatio > 0.3 && timeRatio <= 0.6,
            "text-red-400 animate-pulse": timeRatio <= 0.3,
          })}>{timeLeft}s</span>
        </div>
        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={clsx("h-full rounded-full transition-all duration-1000 ease-linear", timerColor)}
            style={{ width: `${timeRatio * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative mb-6">
        <div className="relative rounded-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-sm p-6 md:p-8 text-center overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-2 left-3 text-pink-500/30 text-2xl font-black">「</div>
          <div className="absolute bottom-2 right-3 text-pink-500/30 text-2xl font-black">」</div>

          <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">{display.prompt}</div>

          <div
            className={clsx(
              "font-black leading-none mb-3 transition-all",
              gameMode === "kanji-to-arti"
                ? "text-6xl md:text-8xl neon-text-pink text-pink-300"
                : gameMode === "hiragana-to-arti"
                ? "text-4xl md:text-5xl neon-text-cyan text-cyan-300"
                : "text-2xl md:text-3xl text-white"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </div>

          <div className="text-sm text-gray-500" style={{ fontFamily: "var(--font-jp)" }}>
            {display.sub}
          </div>
        </div>

        {/* Floating score */}
        {showFloatingScore && (
          <div className="absolute top-0 right-4 float-score pointer-events-none">
            <span className="text-2xl font-black text-yellow-400 neon-text-yellow">+{floatingScoreValue}</span>
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {question.options.map((option, idx) => {
          const state = getOptionState(idx);
          const colorSet = OPTION_COLORS[idx];

          return (
            <button
              key={option.id}
              onClick={() => onAnswer(idx)}
              disabled={answerState !== "idle"}
              className={clsx(
                "answer-btn rounded-xl p-3 md:p-4 text-left border-2 transition-all duration-200 relative overflow-hidden",
                "bg-white/5 backdrop-blur-sm min-h-[80px] md:min-h-[90px]",
                {
                  [`border-white/15 ${colorSet.bg}`]: state === "idle",
                  "neon-border-green !bg-green-500/20 scale-[1.02]": state === "correct",
                  "neon-border-red !bg-red-500/20": state === "wrong",
                  "border-white/5 opacity-40": state === "disabled",
                }
              )}
            >
              {/* Option label */}
              <div className={clsx(
                "absolute top-2 right-2 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center text-white",
                state === "correct" ? "bg-green-500" : state === "wrong" ? "bg-red-500" : colorSet.labelBg
              )}>
                {state === "correct" ? "✓" : state === "wrong" ? "✗" : colorSet.label}
              </div>

              <span
                className={clsx(
                  "block text-sm md:text-base font-bold leading-snug pr-6",
                  { "text-green-300": state === "correct", "text-red-300": state === "wrong", "text-white": state === "idle" || state === "disabled" }
                )}
                style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
              >
                {getOptionText(option, gameMode)}
              </span>

              {/* Show romaji hint for kanji mode after answer */}
              {gameMode === "arti-to-kanji" && state !== "idle" && (
                <span className="block text-xs text-gray-400 mt-1" style={{ fontFamily: "var(--font-jp)" }}>
                  {option.hiragana}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Stats bar bottom */}
      <div className="mt-4 flex justify-center gap-6 text-center">
        <div>
          <div className="text-xs text-gray-600">✅ Benar</div>
          <div className="text-sm font-black text-green-400">{stats.correct}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600">❌ Salah</div>
          <div className="text-sm font-black text-red-400">{stats.wrong}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600">🎯 Akurasi</div>
          <div className="text-sm font-black text-cyan-400">{stats.accuracy || 0}%</div>
        </div>
      </div>
    </div>
  );
}
