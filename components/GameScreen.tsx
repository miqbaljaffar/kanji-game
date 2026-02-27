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

const OPTION_LABELS = ["A", "B", "C", "D"];

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  const { question: entry } = question;
  if (gameMode === "kanji-to-arti") return { main: entry.kanji, sub: entry.hiragana, prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti") return { main: entry.hiragana, sub: entry.romaji, prompt: "Apa arti dari kosakata ini?" };
  return { main: entry.arti, sub: entry.romaji, prompt: "Pilih kanji yang tepat!" };
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState, selectedIndex,
  stats, timeLeft, timeRatio, gameMode,
  showFloatingScore, floatingScoreValue, onAnswer, onHome,
}: GameScreenProps) {
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  return (
    <div className="relative z-10 min-h-screen flex flex-col px-4 py-6 max-w-2xl mx-auto">
      
      {/* HUD Header */}
      <div className="flex items-center justify-between mb-6 animate-slide-up">
        <button
          onClick={onHome}
          className="glass-button px-4 py-2 rounded-xl text-sm font-bold text-gray-300 flex items-center gap-2 hover:text-white"
        >
          <span>←</span> Keluar
        </button>

        <div className="flex flex-col items-end">
          <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Skor Saat Ini</div>
          <div className="text-2xl font-black text-white text-glow-yellow leading-none font-display">
            {stats.score.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Progress & Timer Area */}
      <div className="glass-panel rounded-2xl p-4 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex justify-between items-end mb-2">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Pertanyaan</div>
            <div className="text-sm font-bold text-white">{questionIndex + 1} <span className="text-gray-500">/ {totalQuestions}</span></div>
          </div>
          <div className="text-right">
             <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Waktu</div>
             <div className={clsx("text-xl font-black leading-none", timeRatio <= 0.3 ? "text-red-400 animate-pulse" : "text-cyan-400")}>
               {timeLeft}s
             </div>
          </div>
        </div>
        
        {/* Timer Bar */}
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mt-3">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-1000 ease-linear",
              timeRatio > 0.5 ? "bg-gradient-to-r from-cyan-400 to-blue-500" : timeRatio > 0.25 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-500 to-rose-600"
            )}
            style={{ width: `${timeRatio * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
          {/* Subtle glow behind text */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/20 blur-[50px] rounded-full pointer-events-none" />

          <p className="text-sm text-pink-300 font-bold tracking-widest uppercase mb-4 relative z-10">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-white relative z-10 drop-shadow-xl",
              gameMode === "arti-to-kanji" ? "text-3xl md:text-4xl" : "text-6xl md:text-8xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>

          {display.sub && (
            <p className="text-gray-400 mt-4 font-medium relative z-10" style={{ fontFamily: "var(--font-jp)" }}>
              {display.sub}
            </p>
          )}
        </div>

        {/* Floating Score Animation */}
        {showFloatingScore && (
          <div className="absolute -top-6 right-4 float-score z-20">
            <span className="text-3xl font-black text-yellow-400 drop-shadow-[0_0_15px_rgba(255,238,0,0.5)]">
              +{floatingScoreValue}
            </span>
          </div>
        )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        {question.options.map((option, idx) => {
          let state = "idle";
          if (answerState !== "idle") {
            if (idx === question.correctIndex) state = "correct";
            else if (idx === selectedIndex) state = "wrong";
            else state = "disabled";
          }

          const optionText = gameMode === "arti-to-kanji" ? option.kanji : option.arti;

          return (
            <button
              key={option.id}
              onClick={() => onAnswer(idx)}
              disabled={answerState !== "idle"}
              className={clsx(
                "relative w-full p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden flex items-center gap-4",
                state === "idle" ? "glass-button hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] hover:-translate-y-1" : "",
                state === "correct" ? "bg-green-500/20 border border-green-400 neon-border-green scale-[1.02]" : "",
                state === "wrong" ? "bg-red-500/20 border border-red-500 neon-border-red" : "",
                state === "disabled" ? "opacity-30 border border-white/5 cursor-not-allowed bg-black/20" : ""
              )}
            >
              {/* Option Letter Indicator */}
              <div className={clsx(
                "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors",
                state === "correct" ? "bg-green-500 text-white" :
                state === "wrong" ? "bg-red-500 text-white" :
                "bg-white/10 text-gray-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300"
              )}>
                {state === "correct" ? "✓" : state === "wrong" ? "✗" : OPTION_LABELS[idx]}
              </div>

              {/* Option Text */}
              <div className="flex-1">
                <span 
                  className={clsx(
                    "block font-bold text-lg",
                    state === "correct" ? "text-green-300" : state === "wrong" ? "text-red-300" : "text-white"
                  )}
                  style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
                >
                  {optionText}
                </span>
                
                {/* Reveal Subtext on Answer */}
                {gameMode === "arti-to-kanji" && state !== "idle" && (
                  <span className="block text-xs text-gray-400 mt-1">{option.hiragana}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}