"use client";

import { useGame } from "@/hooks/useGame";
import { HomeScreen } from "@/components/HomeScreen";
import { GameScreen } from "@/components/GameScreen";
import { AnswerScreen } from "@/components/AnswerScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { GameBackground } from "@/components/Background";
import Link from "next/link"; // ✅ Tambahan import Link

export default function Home() {
  const {
    gameState,
    gameMode,
    difficulty,
    currentQuestion,
    questionIndex,
    answerState,
    selectedIndex,
    stats,
    timeLeft,
    timeRatio,
    totalQuestions,
    showFloatingScore,
    floatingScoreValue,
    startGame,
    handleAnswer,
    nextQuestionFromAnswer,
    goHome,
    finishGame,
  } = useGame();

  return (
    <div className="relative h-dvh w-full overflow-y-auto overflow-x-hidden bg-[#87CEEB] text-slate-800 font-body">
      {/* Background awan ceria */}
      <GameBackground />

      {/* Game States */}
      {gameState === "home" && (
        <>
          {/* ✅ Tombol Navigasi Header Top-Right */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
            <Link 
              href="/kanji" 
              className="bg-white/90 hover:bg-white text-indigo-600 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-black shadow-[0_4px_0_rgb(79,70,229)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-1.5 border-2 border-indigo-600 text-xs sm:text-sm cursor-pointer active:scale-95 touch-manipulation"
            >
              📚 Kanji
            </Link>

            <Link 
              href="/bunpou" 
              className="bg-white/90 hover:bg-white text-emerald-600 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-black shadow-[0_4px_0_rgb(16,185,129)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-1.5 border-2 border-emerald-600 text-xs sm:text-sm cursor-pointer active:scale-95 touch-manipulation"
            >
              📝 Bunpou
            </Link>
          </div>

          <HomeScreen 
            onStart={startGame} 
          />
        </>
      )}

      {gameState === "playing" && currentQuestion && (
        <GameScreen
          question={currentQuestion}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          answerState={answerState}
          selectedIndex={selectedIndex}
          stats={stats}
          timeLeft={timeLeft}
          timeRatio={timeRatio}
          gameMode={gameMode}
          difficulty={difficulty}
          showFloatingScore={showFloatingScore}
          floatingScoreValue={floatingScoreValue}
          onAnswer={handleAnswer}
          onExit={finishGame}
        />
      )}

      {gameState === "answer" && currentQuestion && selectedIndex !== null && (
        <AnswerScreen
          question={currentQuestion}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          selectedIndex={selectedIndex}
          stats={stats}
          gameMode={gameMode}
          onNext={nextQuestionFromAnswer}
          onExit={finishGame}
        />
      )}

      {gameState === "result" && (
        <ResultScreen
          stats={stats}
          gameMode={gameMode}
          difficulty={difficulty}
          onPlayAgain={() => startGame(gameMode, difficulty)}
          onHome={goHome}
        />
      )}
    </div>
  );
}
