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
  } = useGame();

  return (
    <div className="relative h-dvh w-full overflow-y-auto overflow-x-hidden bg-[#87CEEB] text-slate-800 font-body">
      {/* Background awan ceria */}
      <GameBackground />

      {/* Game States */}
      {gameState === "home" && (
        <>
          {/* ✅ Tambahan tombol menuju Dashboard */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
            <Link 
              href="/dashboard" 
              className="bg-white/90 text-blue-600 hover:bg-white px-5 py-3 rounded-2xl font-black shadow-[0_4px_0_rgb(37,99,235)] active:shadow-[0_0px_0_rgb(37,99,235)] active:translate-y-1 transition-all flex items-center gap-2 border-2 border-blue-600"
            >
              Dashboard Admin
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
          onHome={goHome}
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
          onHome={goHome}
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
