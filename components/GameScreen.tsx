"use client";
import { useMemo } from "react";
import { QuizQuestion, AnswerState, GameStats, GameMode, Difficulty, KanjiEntry } from "@/types";
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
  if (question.mode === "bunpou" && question.bunpouQuestion) {
    return { 
      main: question.bunpouQuestion.sentence, 
      prompt: "Lengkapi kalimat berikut!",
      sub: question.bunpouQuestion.translation
    };
  }

  const entry = question.kanjiQuestion!;
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
    <div className="relative z-10 flex flex-col min-h-[100dvh] p-4 sm:p-6 max-w-lg mx-auto overflow-x-hidden">
      
      {/* HEADER: Compact & Glassmorphism */}
      <div className="flex-none flex items-center justify-between bg-white/70 backdrop-blur-xl p-3 sm:p-4 rounded-3xl shadow-sm border border-white/50 mb-2">
        
        {/* Tombol Keluar */}
        <button
          onClick={onHome}
          className="w-10 h-10 flex items-center justify-center bg-white shadow-sm hover:bg-slate-50 text-slate-400 hover:text-red-500 rounded-full font-black text-xl transition-all"
        >
          ✕
        </button>

        {/* Progress Bar Soal */}
        <div className="flex-1 mx-3 sm:mx-5">
          <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500 rounded-full"
              style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            >
              <div className="h-1 w-full bg-white/30 mt-0.5 rounded-full mx-1"></div>
            </div>
          </div>
        </div>

        {/* Indikator Skor dan Timer */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center bg-yellow-100/80 px-2.5 py-1.5 rounded-2xl border border-yellow-200/50">
            <span className="text-sm sm:text-base mr-1">⭐</span>
            <span className="font-black text-yellow-600 text-sm sm:text-base">
              {stats.score}
            </span>
          </div>
          <div className="flex items-center bg-white/80 px-2.5 py-1.5 rounded-2xl border border-slate-200/50 shadow-sm">
            <span className="text-sm sm:text-base mr-1">⏱</span>
            <span className={clsx(
              "font-black text-sm sm:text-base w-5 text-center", 
              timeRatio <= 0.3 ? "text-red-500 animate-pulse" : "text-blue-500"
            )}>
              {timeLeft}
            </span>
          </div>
        </div>

      </div>

      {/* KARTU PERTANYAAN (Dynamic Flex) */}
      <div className="flex-1 flex flex-col justify-center relative mt-12 mb-6 sm:mb-8 z-10 min-h-0">
        
        {/* Maskot */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg border-4 border-white">
             <Mascot state={answerState} />
          </div>
        </div>

        {/* Card Utama */}
        <div className="w-full h-full min-h-[180px] bg-white/95 backdrop-blur-xl border-4 border-white rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden transition-all duration-300">
          
          <p className="text-xs sm:text-sm font-black text-blue-400/80 uppercase tracking-widest mb-3 mt-4">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-slate-800 break-words w-full",
              gameMode === "arti-to-kanji" ? "text-4xl sm:text-5xl" : 
              gameMode === "bunpou" ? "text-2xl sm:text-3xl" : "text-6xl sm:text-8xl"
            )}
            style={{ fontFamily: gameMode === "arti-to-kanji" ? "var(--font-body)" : "var(--font-jp)" }}
          >
            {display.main}
          </h2>

          {/* Terjemahan Khusus Bunpou - DIPERBAIKI */}
          {display.sub && (
             <p className="text-sm sm:text-base font-bold text-slate-500 mt-4 px-2">
               {`"${display.sub}"`}
             </p>
          )}

          {/* Skor Melayang saat benar */}
          {showFloatingScore && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-bounce">
              <span className="text-5xl sm:text-6xl font-black text-green-400 drop-shadow-lg" style={{ WebkitTextStroke: "2px white" }}>
                +{floatingScoreValue}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* GRID JAWABAN */}
      <div className="flex-none grid grid-cols-2 gap-3 sm:gap-4 pb-2 sm:pb-4 z-20">
        {(question.mode === "bunpou" ? question.stringOptions! : question.kanjiOptions!).map((opt, idx) => {
          let state = "idle";
          if (answerState !== "idle") {
            if (idx === question.correctIndex) state = "correct";
            else if (idx === selectedIndex) state = "wrong";
            else state = "disabled";
          }

          let optionText = "";
          if (question.mode === "bunpou") {
            optionText = opt as string;
          } else {
            const option = opt as KanjiEntry;
            optionText = gameMode === "arti-to-kanji" ? option.kanji : option.arti;
          }

          return (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              disabled={answerState !== "idle"}
              className={clsx(
                "relative w-full p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-200 outline-none rounded-2xl sm:rounded-3xl border-2",
                state === "idle" && "bg-white border-slate-200 border-b-[6px] text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:border-b-[8px] active:border-b-[2px] active:translate-y-[4px]",
                state === "correct" && "bg-green-100 border-green-500 border-b-[6px] text-green-700 z-10 scale-105 shadow-xl",
                state === "wrong" && "bg-red-50 border-red-500 border-b-[2px] text-red-700 translate-y-[4px]",
                state === "disabled" && "bg-slate-50 border-slate-200 border-b-[2px] text-slate-400 opacity-60 translate-y-[4px]"
              )}
            >
              <span 
                className={clsx(
                  "block font-black leading-tight",
                  (gameMode === "arti-to-kanji" || gameMode === "bunpou") ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                )}
                style={{ fontFamily: (gameMode === "arti-to-kanji" || gameMode === "bunpou") ? "var(--font-jp)" : "var(--font-body)" }}
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