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
    // Dihapus bg-gradient-to-br dari ungu ke hitam, sekarang menggunakan latar hitam pekat murni
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric backgrounds */}
      <GridOverlay />
      <SakuraBackground />
      <ShootingStars />

      {/* Ambient glow blobs - Dikonversi ke tema Hitam, Putih, Biru (menghilangkan pink & ungu) */}
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

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