"use client";
import { useMemo } from "react";
import { QuizQuestion, AnswerState, GameStats, GameMode, Difficulty, AppTheme } from "@/types";
import { Mascot } from "./Mascot";
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
  theme: AppTheme; // Menerima properties tema
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
  stats, timeLeft, timeRatio, gameMode, theme,
  showFloatingScore, floatingScoreValue, onAnswer, onHome,
}: GameScreenProps) {
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  return (
    <div className="relative z-10 min-h-screen flex flex-col px-4 py-6 max-w-2xl mx-auto">
      
      {/* HUD Header */}
      <div className="flex items-center justify-between mb-2 animate-slide-up">
        <button
          onClick={onHome}
          className="glass-button px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-80"
        >
          <span>←</span> Keluar
        </button>

        <div className="flex flex-col items-end">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Skor Saat Ini</div>
          <div className={clsx("text-3xl font-black leading-none font-display", theme === "kids" ? "text-blue-600 drop-shadow-md" : "text-white text-glow-yellow")}>
            {stats.score.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Maskot Animasi Lucu Khusus Tema Anak-Anak */}
      {theme === "kids" && (
        <div className="mt-2 animate-slide-up">
          <Mascot state={answerState} />
        </div>
      )}

      {/* Progress & Timer Area */}
      <div className={clsx("glass-panel rounded-2xl p-4 mb-4 animate-slide-up", theme === "kids" ? "mt-0" : "mt-6")} style={{ animationDelay: "0.1s" }}>
        <div className="flex justify-between items-end mb-2">
          <div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Pertanyaan</div>
            <div className={clsx("text-sm font-bold", theme === "kids" ? "text-slate-800" : "text-white")}>
               {questionIndex + 1} <span className="text-gray-400">/ {totalQuestions}</span>
            </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Waktu</div>
             <div className={clsx("text-2xl font-black leading-none", timeRatio <= 0.3 ? "text-red-500 animate-pulse" : (theme === "kids" ? "text-blue-500" : "text-cyan-400"))}>
               {timeLeft}s
             </div>
          </div>
        </div>
        
        {/* Timer Bar */}
        <div className="h-3 w-full bg-black/10 rounded-full overflow-hidden mt-2">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-1000 ease-linear",
              timeRatio > 0.5 ? "bg-gradient-to-r from-blue-400 to-indigo-500" : timeRatio > 0.25 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-500 to-rose-600"
            )}
            style={{ width: `${timeRatio * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="glass-panel rounded-3xl p-8 md:p-10 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[180px]">
          <p className={clsx("text-sm font-bold tracking-widest uppercase mb-4 relative z-10", theme === "kids" ? "text-blue-600" : "text-pink-300")}>
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight relative z-10 drop-shadow-xl",
              theme === "kids" ? "text-slate-800" : "text-white",
              gameMode === "arti-to-kanji" ? "text-3xl md:text-4xl" : "text-6xl md:text-8xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>

          {display.sub && (
            <p className="text-gray-500 mt-4 font-bold text-lg relative z-10" style={{ fontFamily: "var(--font-jp)" }}>
              {display.sub}
            </p>
          )}
        </div>

        {/* Floating Score Animation */}
        {showFloatingScore && (
          <div className="absolute -top-6 right-4 float-score z-20">
            <span className="text-4xl font-black text-yellow-400 drop-shadow-[0_0_15px_rgba(255,238,0,0.8)] stroke-black" style={{ WebkitTextStroke: "2px black"}}>
              +{floatingScoreValue}
            </span>
          </div>
        )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 animate-slide-up pb-6" style={{ animationDelay: "0.3s" }}>
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
                "relative w-full p-4 md:p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden flex items-center gap-4",
                state === "idle" ? "glass-button" : "",
                state === "correct" ? "neon-border-green scale-[1.02]" : "",
                state === "wrong" ? "neon-border-red" : "",
                state === "disabled" ? "opacity-40 grayscale cursor-not-allowed" : ""
              )}
            >
              {/* Option Letter Indicator */}
              <div className={clsx(
                "w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black transition-colors shrink-0 shadow-sm",
                state === "correct" ? "bg-green-500 text-white" :
                state === "wrong" ? "bg-red-500 text-white" :
                (theme === "kids" ? "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600" : "bg-white/10 text-gray-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300")
              )}>
                {state === "correct" ? "✓" : state === "wrong" ? "✗" : OPTION_LABELS[idx]}
              </div>

              {/* Option Text */}
              <div className="flex-1">
                <span 
                  className={clsx(
                    "block font-bold text-lg",
                    state === "correct" ? "text-green-600" : state === "wrong" ? "text-red-500" : (theme === "kids" ? "text-slate-800" : "text-white")
                  )}
                  style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
                >
                  {optionText}
                </span>
                
                {/* Reveal Subtext on Answer */}
                {gameMode === "arti-to-kanji" && state !== "idle" && (
                  <span className="block text-sm text-gray-500 font-bold mt-1">{option.hiragana}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}