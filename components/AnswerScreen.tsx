"use client";
import { useMemo, useState, useEffect } from "react";
import { QuizQuestion, GameMode, GameStats, KanjiEntry, KanaEntry } from "@/types";
import { ConfirmModal } from "./ui/ConfirmModal";
import clsx from "clsx";
import { ChevronRight, CheckCircle, XCircle } from "lucide-react";
import { kanjiDetails } from "@/data/kanjiDetails";

interface AnswerScreenProps {
  onStart?: (mode: GameMode, difficulty: Difficulty) => void; // standard props just in case
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedIndex: number;
  stats: GameStats;
  gameMode: GameMode;
  onNext: () => void;
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

function getAnswerText(answer: string | KanjiEntry | KanaEntry | null, gameMode: GameMode, kanaScript?: "hiragana" | "katakana"): string {
  if (answer === null) {
    return "Waktu habis";
  }

  if (typeof answer === "string") {
    return answer;
  }

  if (gameMode === "arti-to-kanji") {
    return (answer as KanjiEntry).kanji;
  }

  if (gameMode === "kanji-to-hiragana") {
    return (answer as KanjiEntry).hiragana;
  }

  if (gameMode === "hiragana-to-arti" || gameMode === "kanji-to-arti") {
    return (answer as KanjiEntry).arti;
  }

  if (gameMode === "hiragana-to-romaji") {
    return (answer as KanaEntry).hiragana;
  }

  if (gameMode === "katakana-to-romaji") {
    return (answer as KanaEntry).katakana;
  }

  if (gameMode === "mixed-kana") {
    return (answer as KanaEntry)[kanaScript ?? "hiragana"];
  }

  return (answer as KanjiEntry).arti;
}

type Difficulty = "easy" | "medium" | "hard";

export function AnswerScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedIndex,
  stats,
  gameMode,
  onNext,
  onExit,
}: AnswerScreenProps) {
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const [fetchedDetails, setFetchedDetails] = useState<Record<string, { onyomi: string; kunyomi: string; mnemonic: string }>>({});

  const display = useMemo(() => getQuestionDisplay(question, gameMode), [question, gameMode]);
  const isJpFontForQuestion = gameMode === "kanji-to-arti" || gameMode === "kanji-to-hiragana" || gameMode === "hiragana-to-arti" || gameMode === "bunpou";
  const isJpFontForOptions = [
    "arti-to-kanji",
    "kanji-to-hiragana",
    "bunpou",
    "hiragana-to-romaji",
    "katakana-to-romaji",
    "mixed-kana",
  ].includes(gameMode);
  
  const isTimeout = selectedIndex < 0;
  const isCorrect = !isTimeout && selectedIndex === question.correctIndex;
  const allOptions = question.mode === "bunpou" ? question.stringOptions! : question.mode === "kana" ? question.kanaOptions! : question.kanjiOptions!;
  const selectedAnswer = isTimeout ? null : allOptions[selectedIndex];
  const correctAnswer = allOptions[question.correctIndex];

  const selectedAnswerText = getAnswerText(selectedAnswer, gameMode, question.kanaScript);
  const correctAnswerText = getAnswerText(correctAnswer, gameMode, question.kanaScript);

  // Ekstrak karakter Kanji dari kata soal
  const kanjiChars = useMemo(() => {
    if (question.mode !== "kanji" || !question.kanjiQuestion) return [];
    const matches = question.kanjiQuestion.kanji.match(/[\u4e00-\u9faf]/g) || [];
    return Array.from(new Set(matches));
  }, [question]);

  // Fetch detail Kanji secara dinamis jika tidak ada di database lokal
  useEffect(() => {
    kanjiChars.forEach(async (char) => {
      if (kanjiDetails[char] || fetchedDetails[char]) return;

      try {
        const res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(char)}`);
        if (res.ok) {
          const data = await res.json();
          const onyomi = data.on_readings.join(", ") || "-";
          const kunyomi = data.kun_readings.join(", ") || "-";
          const meanings = data.meanings.slice(0, 3).join(", "); // Ambil maksimal 3 arti utama
          const mnemonic = `Arti: ${meanings}. Jumlah coretan: ${data.stroke_count}.`;
          
          setFetchedDetails(prev => {
            if (prev[char]) return prev;
            return {
              ...prev,
              [char]: { onyomi, kunyomi, mnemonic }
            };
          });
        }
      } catch (err) {
        console.error("Gagal mengambil detail kanji dari kanjiapi.dev:", err);
      }
    });
  }, [kanjiChars]);

  const matchedKanjiDetails = useMemo(() => {
    return kanjiChars.map(char => {
      const localDetail = kanjiDetails[char];
      const remoteDetail = fetchedDetails[char];
      return {
        char,
        detail: localDetail || remoteDetail || null
      };
    });
  }, [kanjiChars, fetchedDetails]);

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
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            >
              <div className="h-1 w-full bg-white/30 mt-0.5 rounded-full mx-1"></div>
            </div>
          </div>
        </div>

        {/* Indikator Skor */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center bg-yellow-100/80 px-2.5 py-1.5 rounded-2xl border border-yellow-200/50">
            <span className="text-sm sm:text-base mr-1">⭐</span>
            <span className="font-black text-yellow-600 text-sm sm:text-base">
              {stats.score}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col justify-between mt-6 mb-6 sm:mb-8 z-10">
        
        {/* SOAL SECTION */}
        <div>
          {/* Maskot dengan hasil */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border-4 border-white">
              <div className="text-6xl">
                {isCorrect ? "😄" : "😅"}
              </div>
            </div>
          </div>

          {/* Hasil Status */}
          <div className="text-center mb-6">
            {isCorrect ? (
              <div className="flex items-center justify-center gap-2 text-green-600 font-black text-lg mb-2">
                <CheckCircle size={24} />
                Benar!
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-red-600 font-black text-lg mb-2">
                <XCircle size={24} />
                Salah!
              </div>
            )}
          </div>

          {/* Card: Soal (Read-only) */}
          <div className="w-full bg-white/95 backdrop-blur-xl border-4 border-slate-200 rounded-3xl shadow-lg p-6 text-center mb-6">
            <p className="text-xs sm:text-sm font-black text-slate-400/80 uppercase tracking-widest mb-3">
              Soal yang ditanyakan
            </p>
            <h2 
              className={clsx(
                "font-black leading-tight text-slate-800 wrap-break-word",
                gameMode === "arti-to-kanji" ? "text-3xl sm:text-4xl" : 
                gameMode === "bunpou" ? "text-xl sm:text-2xl" : "text-5xl sm:text-6xl"
              )}
              style={{ fontFamily: isJpFontForQuestion ? "var(--font-jp)" : "var(--font-body)" }}
            >
              {display.main}
            </h2>
            {display.sub && (
              <p className="text-sm sm:text-base font-bold text-slate-500 mt-4 px-2">
                {`"${display.sub}"`}
              </p>
            )}
          </div>

          {/* Card: Jawaban User vs Benar */}
          <div className="space-y-4 mb-6">
            {/* Jawaban User */}
            <div>
              <p className="text-xs font-black text-slate-500 uppercase mb-2 pl-2">Jawaban Kamu:</p>
              <div className={clsx(
                "w-full p-5 rounded-2xl border-2 text-center transition-all",
                isCorrect 
                  ? "bg-green-100/50 border-green-300" 
                  : "bg-red-100/50 border-red-300"
              )}>
                <span 
                  className={clsx(
                    "block font-black text-2xl sm:text-3xl",
                    isCorrect ? "text-green-700" : "text-red-700"
                  )}
                  style={{ fontFamily: isJpFontForOptions ? "var(--font-jp)" : "var(--font-body)" }}
                >
                  {selectedAnswerText}
                </span>
              </div>
            </div>

            {/* Jawaban Benar (hanya tampil jika salah) */}
            {!isCorrect && (
              <div>
                <p className="text-xs font-black text-slate-500 uppercase mb-2 pl-2">Jawaban yang Benar:</p>
                <div className="w-full p-5 rounded-2xl border-2 bg-green-100/50 border-green-300 text-center">
                  <span 
                    className="block font-black text-2xl sm:text-3xl text-green-700"
                    style={{ fontFamily: isJpFontForOptions ? "var(--font-jp)" : "var(--font-body)" }}
                  >
                    {correctAnswerText}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Penjelasan Tambahan */}
          <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 mb-6">
            <p className="text-xs font-black text-blue-600 uppercase mb-2">Penjelasan:</p>
            <p className="text-sm text-slate-700 font-semibold leading-relaxed">
              {question.mode === "bunpou" 
                ? `Kalimat: "${question.bunpouQuestion?.translation}"\nJawaban yang benar adalah: "${correctAnswerText}"`
                : `${isCorrect 
                    ? `Benar! "${correctAnswerText}" adalah jawaban yang tepat.` 
                    : `"${correctAnswerText}" adalah jawaban yang benar. Coba perhatikan lebih detail untuk soal selanjutnya!`}`
              }
            </p>
          </div>

          {/* Detail Kanji (Mnemonic & Detail) */}
          {matchedKanjiDetails.length > 0 && (
            <div className="space-y-4 mb-6 animate-fade-up">
              <p className="text-xs font-black text-slate-500 uppercase pl-2 tracking-widest">
                Detail Kanji ({matchedKanjiDetails.length}):
              </p>
              
              <div className="space-y-4">
                {matchedKanjiDetails.map(({ char, detail }) => (
                  <div 
                    key={char} 
                    className="bg-white/95 backdrop-blur-xl border-2 border-slate-200 rounded-3xl p-5 shadow-lg relative overflow-hidden"
                  >
                    {/* Header: Huruf Kanji Gede & Onyomi/Kunyomi */}
                    <div className="flex items-center gap-5 border-b border-slate-100 pb-4 mb-4">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-50 to-indigo-100 border border-blue-100 rounded-2xl flex items-center justify-center text-4xl font-black text-blue-600 font-jp shadow-inner shrink-0">
                        {char}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-lg">
                          {detail ? detail.kunyomi.split(" (")[0].split("・")[0].replace(/[a-zA-Z]/g, '') : "Kanji"}
                        </h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Karakter Kanji</p>
                      </div>
                    </div>

                    {/* Bacaan: Onyomi & Kunyomi */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
                        <span className="font-black text-purple-600 block mb-1">音読み (Onyomi)</span>
                        <span className="font-bold text-slate-700 text-sm">
                          {detail ? detail.onyomi : "-"}
                        </span>
                      </div>
                      <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
                        <span className="font-black text-emerald-600 block mb-1">訓読み (Kunyomi)</span>
                        <span className="font-bold text-slate-700 text-sm text-wrap break-all">
                          {detail ? detail.kunyomi : "-"}
                        </span>
                      </div>
                    </div>

                    {/* Mnemonic / Jembatan Keledai */}
                    <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 text-xs">
                      <span className="font-black text-blue-600 block mb-1">💡 Tips Mengingat (Mnemonic):</span>
                      <p className="text-slate-600 font-semibold leading-relaxed">
                        {detail ? detail.mnemonic : "Gunakan imajinasi Anda untuk membayangkan visual kanji ini agar mudah diingat."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER: Tombol Lanjut */}
        <div className="flex-none">
          <button
            onClick={onNext}
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black px-6 py-5 rounded-3xl shadow-xl shadow-blue-500/30 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            {questionIndex + 1 >= totalQuestions ? "Lihat Hasil" : "Soal Berikutnya"}
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
