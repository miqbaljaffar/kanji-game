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
    <>
      {/* Global Styles untuk animasi dan optimasi mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          overscroll-behavior-y: none; /* Mencegah mental di HP */
          -webkit-tap-highlight-color: transparent;
        }
        
        @keyframes slideDown { 
          from { transform: translateY(-20px); opacity: 0; } 
          to { transform: translateY(0); opacity: 1; } 
        }
        
        @keyframes fadeUp { 
          from { transform: translateY(30px); opacity: 0; } 
          to { transform: translateY(0); opacity: 1; } 
        }
        
        @keyframes floatScore { 
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-80px) scale(1); opacity: 0; }
        }
        
        @keyframes bounceSoft { 
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bouncePop { 
          0% { transform: scale(0.8); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake { 
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px) rotate(-5deg); }
          75% { transform: translateX(8px) rotate(5deg); }
        }

        .animate-slide-down { animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up { animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-bounce-soft { animation: bounceSoft 3s ease-in-out infinite; }
        .animate-bounce-pop { animation: bouncePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .float-score { animation: floatScore 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />

      {/* Main Container */}
      <div className="relative min-h-screen overflow-hidden bg-[#87CEEB] text-slate-800 font-body selection:bg-blue-200">
        
        {/* Background awan ceria */}
        <GameBackground />

        {/* Game States dengan proper spreading untuk GameScreen */}
        {gameState === "home" && (
          <HomeScreen onStart={startGame} />
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
    </>
  );
}