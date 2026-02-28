"use client";
import { useMemo } from "react";
import { QuizQuestion, AnswerState, GameStats, GameMode, Difficulty } from "@/types";
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
  showFloatingScore: boolean;
  floatingScoreValue: number;
  onAnswer: (idx: number) => void;
  onHome: () => void;
}

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  const { question: entry } = question;
  if (gameMode === "kanji-to-arti") return { main: entry.kanji, prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti") return { main: entry.hiragana, prompt: "Apa arti kosakata ini?" };
  return { main: entry.arti, prompt: "Pilih kanji yang tepat!" };
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState, selectedIndex,
  stats, timeLeft, timeRatio, gameMode,
  showFloatingScore, floatingScoreValue, onAnswer, onHome,
}: GameScreenProps) {
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  return (
    <div className="relative z-10 h-[100dvh] flex flex-col p-4 sm:p-6 max-w-2xl mx-auto overflow-hidden">
      
      {/* Header Bar Modern dengan efek glassmorphism */}
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl p-3 md:p-4 rounded-3xl shadow-lg border border-white mb-4 shrink-0 animate-slide-down">
        
        {/* Tombol Keluar dengan desain circular */}
        <button
          onClick={onHome}
          className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full font-black text-xl transition-colors"
        >
          ✕
        </button>

        {/* Progress Bar Soal dengan gradient */}
        <div className="flex-1 mx-4">
          <div className="h-3 md:h-4 w-full bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-500 rounded-full"
              style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            >
              <div className="h-1.5 w-full bg-white/30 mt-0.5 rounded-full mx-1"></div>
            </div>
          </div>
        </div>

        {/* Indikator Skor dan Timer dalam satu grup */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-2xl border border-yellow-200">
            <span className="text-lg mr-1 drop-shadow-sm">⭐</span>
            <span className="font-black text-yellow-500 text-sm md:text-base">
              {stats.score}
            </span>
          </div>
          <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-2xl border border-slate-200">
            <span className="text-lg mr-1">⏱</span>
            <span className={clsx("font-black text-sm md:text-base w-5 text-center", timeRatio <= 0.3 ? "text-red-500 animate-pulse" : "text-blue-500")}>
              {timeLeft}
            </span>
          </div>
        </div>

      </div>

      {/* Maskot Karakter Kucing dengan animasi fade-up */}
      <div className="my-2 shrink-0 animate-fade-up z-20">
        <Mascot state={answerState} />
      </div>

      {/* Kartu Pertanyaan Utama dengan desain modern */}
      <div className="relative flex-1 flex flex-col mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        
        <div className="w-full h-full bg-white/90 backdrop-blur-lg border-2 border-slate-100 shadow-xl rounded-[2.5rem] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
          
          <p className="text-sm md:text-base font-black text-blue-400 uppercase tracking-widest mb-4">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-slate-800 break-words w-full",
              gameMode === "arti-to-kanji" ? "text-4xl md:text-5xl" : "text-6xl md:text-8xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>

          {/* Skor Melayang di dalam kartu */}
          {showFloatingScore && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 float-score pointer-events-none">
              <span className="text-5xl md:text-7xl font-black text-green-400 drop-shadow-2xl" style={{ WebkitTextStroke: "2px white" }}>
                +{floatingScoreValue}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Grid Pilihan Jawaban 2x2 dengan desain modern */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 shrink-0 pb-2 md:pb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
                "relative w-full p-4 md:p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 border-2",
                state === "idle" ? "bg-white border-slate-200 text-slate-600 shadow-[0_6px_0_#e2e8f0] hover:-translate-y-1 hover:shadow-[0_8px_0_#cbd5e1] active:translate-y-2 active:shadow-none" : "",
                state === "correct" ? "bg-green-100 border-green-500 text-green-700 shadow-none translate-y-2 ring-4 ring-green-200" : "",
                state === "wrong" ? "bg-red-100 border-red-500 text-red-700 shadow-none translate-y-2 ring-4 ring-red-200" : "",
                state === "disabled" ? "bg-slate-50 border-slate-200 text-slate-400 opacity-60 shadow-none translate-y-2" : ""
              )}
            >
              <span 
                className={clsx(
                  "block font-black leading-tight mt-1",
                  gameMode === "arti-to-kanji" ? "text-3xl md:text-4xl" : "text-lg md:text-xl"
                )}
                style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
              >
                {optionText}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}