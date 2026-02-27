"use client";
import clsx from "clsx";
import { useGame } from "@/hooks/useGame";
import { HomeScreen } from "@/components/HomeScreen";
import { GameScreen } from "@/components/GameScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { GameBackground } from "@/components/Background";

export default function Home() {
  const {
    theme,
    setTheme,
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
    // Class dinamis menyesuaikan tema terpilih
    <div className={clsx("relative min-h-screen overflow-hidden transition-colors duration-700", theme === "kids" ? "theme-kids bg-[#87CEEB]" : "bg-black")}>
      
      {/* Background yang dinamis bereaksi terhadap theme */}
      <GameBackground theme={theme} />

      {/* Game States */}
      {gameState === "home" && (
        <HomeScreen 
          theme={theme} 
          onThemeChange={setTheme} 
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
          theme={theme}
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