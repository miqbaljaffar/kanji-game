"use client";

import { useGame } from "@/hooks/useGame";
import { HomeScreen } from "@/components/HomeScreen";
import { GameScreen } from "@/components/GameScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { GameBackground } from "@/components/Background";

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
    goHome,
  } = useGame();

  return (
    <div className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-[#87CEEB] text-slate-800 font-body">
      {/* Background awan ceria */}
      <GameBackground />

      {/* Game States */}
      {gameState === "home" && (
        <HomeScreen 
          onStart={startGame} 
        />
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