"use client";
import { useMemo, useState } from "react";
import { QuizQuestion, AnswerState, GameStats, GameMode, Difficulty, KanjiEntry, KanaEntry } from "@/types";
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

function getQuestionDisplay(question: QuizQuestion, gameMode: GameMode) {
  if (question.mode === "bunpou" && question.bunpouQuestion) {
    return { 
      main: question.bunpouQuestion.sentence, 
      prompt: "Lengkapi kalimat berikut!",
      sub: question.bunpouQuestion.translation
    };
  }

  if (question.mode === "kana" && question.kanaQuestion) {
    return {
      main: question.kanaQuestion.romaji,
      prompt: gameMode === "hiragana-to-romaji"
        ? "Pilih huruf Hiragana yang tepat!"
        : gameMode === "katakana-to-romaji"
          ? "Pilih huruf Katakana yang tepat!"
          : "Pilih huruf Kana yang tepat!",
    };
  }

  const entry = question.kanjiQuestion!;
  if (gameMode === "kanji-to-arti") return { main: entry.kanji, prompt: "Apa arti dari kanji ini?" };
  if (gameMode === "hiragana-to-arti") return { main: entry.hiragana, prompt: "Apa arti kosakata ini?" };
  if (gameMode === "kanji-to-hiragana") return { main: entry.kanji, prompt: "Bagaimana cara bacanya?" };
  
  return { main: entry.arti, prompt: "Pilih kanji yang tepat!" };
}

export function GameScreen({
  question, questionIndex, totalQuestions, answerState,
  stats, timeLeft, timeRatio, gameMode,
  showFloatingScore, floatingScoreValue, onAnswer, onExit,
}: GameScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);

  // Fungsi pengecekan font agar bahasa jepang menggunakan font jepang
  const isJpFontForQuestion = gameMode === "kanji-to-arti" || gameMode === "kanji-to-hiragana" || gameMode === "hiragana-to-arti" || gameMode === "bunpou";
  const isJpFontForOptions = [
    "arti-to-kanji",
    "kanji-to-hiragana",
    "bunpou",
    "hiragana-to-romaji",
    "katakana-to-romaji",
    "mixed-kana",
  ].includes(gameMode);

  return (
    <div className="relative z-10 flex flex-col min-h-dvh p-4 sm:p-6 max-w-lg mx-auto overflow-x-hidden">
      {isExitConfirmOpen && (
        <ConfirmModal
          title="Keluar permainan?"
          message="Jika kamu keluar sekarang, permainan akan selesai dan hasil akan ditampilkan."
          confirmText="Ya, selesai"
          cancelText="Lanjutkan"
          onConfirm={() => {
            setIsExitConfirmOpen(false);
            onExit();
          }}
          onCancel={() => setIsExitConfirmOpen(false)}
        />
      )}
      
      {/* HEADER: Compact & Glassmorphism */}
      <div className="flex-none flex items-center justify-between bg-white/70 backdrop-blur-xl p-3 sm:p-4 rounded-3xl shadow-sm border border-white/50 mb-2">
        
        {/* Tombol Keluar */}
        <button
          onClick={() => setIsExitConfirmOpen(true)}
          className="w-10 h-10 flex items-center justify-center bg-white shadow-sm hover:bg-slate-50 text-slate-400 hover:text-red-500 rounded-full font-black text-xl transition-all"
        >
          ✕
        </button>

        {/* Progress Bar Soal */}
        <div className="flex-1 mx-3 sm:mx-5">
          <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="h-full bg-linear-to-r from-blue-400 to-indigo-500 transition-all duration-500 rounded-full"
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
        <div className="w-full h-full min-h-45 bg-white/95 backdrop-blur-xl border-4 border-white rounded-4xl shadow-xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden transition-all duration-300">
          
          <p className="text-xs sm:text-sm font-black text-blue-400/80 uppercase tracking-widest mb-3 mt-4">
            {display.prompt}
          </p>

          <h2 
            className={clsx(
              "font-black leading-tight text-slate-800 wrap-break-word w-full",
              gameMode === "arti-to-kanji" ? "text-4xl sm:text-5xl" : 
              gameMode === "bunpou" ? "text-2xl sm:text-3xl" : "text-6xl sm:text-8xl"
            )}
            style={{ fontFamily: isJpFontForQuestion ? "var(--font-jp)" : "var(--font-body)" }}
          >
            {display.main}
          </h2>

          {/* Terjemahan Khusus Bunpou */}
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
        {(
          question.mode === "bunpou"
            ? question.stringOptions!
            : question.mode === "kana"
              ? question.kanaOptions!
              : question.kanjiOptions!
        ).map((opt, idx) => {
          const state: string = "idle";

          let optionText = "";
          if (question.mode === "bunpou") {
            optionText = opt as string;
          } else if (question.mode === "kana") {
            const option = opt as KanaEntry;
            const script = question.kanaScript ?? (gameMode === "hiragana-to-romaji" ? "hiragana" : "katakana");
            optionText = option[script];
          } else {
            const option = opt as KanjiEntry;
            if (gameMode === "arti-to-kanji") {
              optionText = option.kanji;
            } else if (gameMode === "kanji-to-hiragana") {
              optionText = option.hiragana;
            } else {
              optionText = option.arti;
            }
          }

          return (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              disabled={answerState !== "idle"}
              className={clsx(
                "relative w-full p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-200 outline-none rounded-2xl sm:rounded-3xl border-2",
                state === "idle" && "bg-white border-slate-200 border-b-[6px] text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:border-b-8 active:border-b-2 active:translate-y-1",
                state === "correct" && "bg-green-100 border-green-500 border-b-[6px] text-green-700 z-10 scale-105 shadow-xl",
                state === "wrong" && "bg-red-50 border-red-500 border-b-2 text-red-700 translate-y-1",
                state === "disabled" && "bg-slate-50 border-slate-200 border-b-2 text-slate-400 opacity-60 translate-y-1"
              )}
            >
              <span 
                className={clsx(
                  "block font-black leading-tight",
                  isJpFontForOptions ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                )}
                style={{ fontFamily: isJpFontForOptions ? "var(--font-jp)" : "var(--font-body)" }}
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