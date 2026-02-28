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

// LOGIKA BARU: Murni hanya menampilkan apa yang diminta, tanpa furigana/sub-teks
function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  const { question: entry } = question;
  if (gameMode === "kanji-to-arti") return { main: entry.kanji, prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti") return { main: entry.hiragana, prompt: "Apa arti dari kosakata ini?" };
  // arti-to-kanji
  return { main: entry.arti, prompt: "Pilih kanji yang tepat!" };
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState, selectedIndex,
  stats, timeLeft, timeRatio, gameMode,
  showFloatingScore, floatingScoreValue, onAnswer, onHome,
}: GameScreenProps) {
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  return (
    // Menggunakan h-[100dvh] dan flex-col agar pas layar HP tanpa scroll
    <div className="relative z-10 h-[100dvh] flex flex-col px-4 py-4 max-w-xl mx-auto overflow-hidden">
      
      {/* Header Bar Terpadu (Semua di dalam pill box putih transparan) */}
      <div className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/50 p-2 md:p-3 rounded-2xl shadow-sm mb-2 shrink-0 animate-slide-up">
        
        {/* Tombol Keluar */}
        <button
          onClick={onHome}
          className="text-slate-500 hover:text-slate-700 font-black text-xl px-2"
        >
          ✖
        </button>

        {/* Progress Bar Soal */}
        <div className="flex-1 mx-3">
           <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
             <div 
               className="h-full bg-green-400 transition-all duration-300 rounded-full"
               style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
             >
                <div className="h-1.5 w-full bg-white/30 mt-0.5 rounded-full mx-1"></div>
             </div>
           </div>
        </div>

        {/* Indikator Timer - Posisi kini aman dan menempel di header */}
        <div className="flex items-center bg-white px-2 py-1 rounded-xl shadow-sm border border-slate-100 mr-2">
           <span className="text-lg mr-1">⏱</span>
           <span className={clsx("font-black text-sm md:text-base w-5 text-center", timeRatio <= 0.3 ? "text-red-500 animate-pulse" : "text-blue-500")}>
             {timeLeft}
           </span>
        </div>

        {/* Indikator Skor - Jelas terlihat karena background putih */}
        <div className="flex items-center bg-white px-2 py-1 rounded-xl shadow-sm border border-slate-100">
           <span className="text-lg mr-1 drop-shadow-sm">⭐</span>
           <span className="font-black text-yellow-500 text-sm md:text-base">
             {stats.score}
           </span>
        </div>

      </div>

      {/* Maskot Karakter Kucing */}
      <div className="my-1 shrink-0 animate-slide-up" style={{ animationDelay: "0.05s" }}>
        <Mascot state={answerState} />
      </div>

      {/* Kartu Pertanyaan Utama - flex-1 agar tinggi dinamis mengisi sisa layar */}
      <div className="relative flex-1 flex flex-col mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        
        <div className="duo-card flex-1 flex flex-col items-center justify-center p-6 text-center w-full">
          <p className="text-xs md:text-sm font-black text-slate-400 uppercase mb-3 tracking-widest">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-slate-800",
              gameMode === "arti-to-kanji" ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>
        </div>

        {/* Skor Melayang */}
        {showFloatingScore && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 float-score z-30 pointer-events-none">
            <span className="text-5xl font-black text-green-500 drop-shadow-lg" style={{ WebkitTextStroke: "2px white" }}>
              +{floatingScoreValue}
            </span>
          </div>
        )}
      </div>

      {/* Grid Pilihan Jawaban - shrink-0 agar ukurannya tetap dan menempel di bawah */}
      <div className="grid grid-cols-1 gap-2 md:gap-3 shrink-0 pb-2 animate-slide-up" style={{ animationDelay: "0.15s" }}>
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
                "w-full p-3 md:p-4 rounded-2xl text-left flex items-center gap-3 md:gap-4 transition-transform",
                state === "idle" ? "duo-btn" : "",
                state === "correct" ? "duo-btn duo-btn-correct border-b-0 translate-y-1 mt-1" : "",
                state === "wrong" ? "duo-btn duo-btn-wrong border-b-0 translate-y-1 mt-1" : "",
                state === "disabled" ? "bg-slate-50 border-2 border-slate-200 border-b-4 rounded-2xl text-slate-400 cursor-not-allowed opacity-50" : ""
              )}
            >
              {/* Lingkaran Nomer Pilihan */}
              <div className={clsx(
                "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg font-black shrink-0",
                state === "correct" ? "bg-green-500 text-white" :
                state === "wrong" ? "bg-red-500 text-white" :
                "bg-slate-100 text-slate-400 border-2 border-slate-200"
              )}>
                {idx + 1}
              </div>

              {/* Teks Jawaban Murni (Tanpa Hiragana) */}
              <div className="flex-1">
                <span 
                  className="block font-black text-base md:text-lg leading-tight"
                  style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-jp)" : "var(--font-body)" }}
                >
                  {optionText}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}