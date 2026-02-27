"use client";

import { useGame } from "@/hooks/useGame";
import { HomeScreen } from "@/components/HomeScreen";
import { GameScreen } from "@/components/GameScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { SakuraBackground, ShootingStars, GridOverlay } from "@/components/Background";

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0010] via-[#100020] to-[#0a0015] overflow-hidden">
      {/* Atmospheric backgrounds */}
      <GridOverlay />
      <SakuraBackground />
      <ShootingStars />

      {/* Ambient glow blobs */}
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-pink-600/10 blur-[80px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      {/* Game States */}
      {gameState === "home" && <HomeScreen onStart={startGame} />}

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
