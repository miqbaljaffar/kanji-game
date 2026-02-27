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
    <div className="relative z-10 min-h-screen flex flex-col px-4 py-6 max-w-xl mx-auto">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4 animate-slide-up">
        <button
          onClick={onHome}
          className="duo-btn-secondary px-4 py-2 text-sm flex items-center gap-2"
        >
          ✖ Keluar
        </button>

        {/* Progress Bar Soal */}
        <div className="flex-1 mx-4">
           <div className="h-4 w-full bg-white border-2 border-slate-200 rounded-full overflow-hidden relative">
             <div 
               className="h-full bg-green-400 transition-all duration-300 rounded-full"
               style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
             >
                {/* Highlight pantulan cahaya ala Duolingo */}
                <div className="h-1 w-full bg-white/30 mt-0.5 rounded-full mx-1"></div>
             </div>
           </div>
        </div>

        <div className="flex items-center gap-1 font-black text-yellow-500 text-xl drop-shadow-sm">
           ⭐ {stats.score}
        </div>
      </div>

      {/* Maskot Karakter Kucing */}
      <div className="mt-2 animate-slide-up shrink-0">
        <Mascot state={answerState} />
      </div>

      {/* Kartu Pertanyaan Utama */}
      <div className="relative mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        
        {/* Timer Bar menempel di atas Card */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-200 rounded-full px-4 py-1 z-20 font-black text-lg shadow-sm flex items-center gap-2">
           ⏱ <span className={clsx(timeRatio <= 0.3 ? "text-red-500 animate-pulse" : "text-blue-500")}>{timeLeft}s</span>
        </div>

        <div className="duo-card p-8 md:p-10 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[160px] pt-10">
          <p className="text-sm font-black text-slate-400 uppercase mb-2">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-slate-800",
              gameMode === "arti-to-kanji" ? "text-3xl md:text-4xl" : "text-5xl md:text-7xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>

          {display.sub && (
            <p className="text-slate-500 mt-2 font-bold text-lg" style={{ fontFamily: "var(--font-jp)" }}>
              {display.sub}
            </p>
          )}
        </div>

        {/* Skor Melayang */}
        {showFloatingScore && (
          <div className="absolute -top-2 right-4 float-score z-30">
            <span className="text-4xl font-black text-green-500 drop-shadow-md">
              +{floatingScoreValue}
            </span>
          </div>
        )}
      </div>

      {/* Grid Pilihan Jawaban */}
      <div className="grid grid-cols-1 gap-3 flex-1 animate-slide-up pb-6" style={{ animationDelay: "0.2s" }}>
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
                "w-full p-4 rounded-2xl text-left flex items-center gap-4",
                state === "idle" ? "duo-btn" : "",
                state === "correct" ? "duo-btn duo-btn-correct border-b-0 translate-y-1 mt-1" : "",
                state === "wrong" ? "duo-btn duo-btn-wrong border-b-0 translate-y-1 mt-1" : "",
                state === "disabled" ? "bg-slate-50 border-2 border-slate-200 border-b-4 rounded-2xl text-slate-400 cursor-not-allowed opacity-60" : ""
              )}
            >
              {/* Lingkaran Nomer Pilihan */}
              <div className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center text-lg font-black shrink-0",
                state === "correct" ? "bg-green-500 text-white" :
                state === "wrong" ? "bg-red-500 text-white" :
                "bg-slate-100 text-slate-400 border-2 border-slate-200"
              )}>
                {idx + 1}
              </div>

              {/* Teks Jawaban */}
              <div className="flex-1">
                <span 
                  className="block font-black text-lg"
                  style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
                >
                  {optionText}
                </span>
                
                {/* Membuka kunci cara baca (hiragana) kalau sudah dijawab */}
                {gameMode === "arti-to-kanji" && state !== "idle" && (
                  <span className="block text-sm font-bold opacity-80 mt-1">{option.hiragana}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}