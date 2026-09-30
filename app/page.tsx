"use client";

import { useGame } from "@/hooks/useGame";
import { HomeScreen } from "@/components/HomeScreen";
import { GameScreen } from "@/components/GameScreen";
import { AnswerScreen } from "@/components/AnswerScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { GameBackground } from "@/components/Background";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GameState } from "@/types";

/**
 * Komponen wrapper dengan animasi transisi antar screen.
 * Setiap perpindahan gameState memicu exit → enter transition.
 */
function AnimatedScreen({
  stateKey,
  children,
}: {
  stateKey: string;
  children: React.ReactNode;
}) {
  const [displayKey, setDisplayKey]       = useState(stateKey);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase]                 = useState<"enter" | "exit" | "idle">("enter");
  const pendingRef                        = useRef<{ key: string; children: React.ReactNode } | null>(null);
  const timerRef                          = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stateKey === displayKey) return;

    // Batalkan timer lama jika ada
    if (timerRef.current) clearTimeout(timerRef.current);

    pendingRef.current = { key: stateKey, children };
    setPhase("exit");

    timerRef.current = setTimeout(() => {
      if (pendingRef.current) {
        setDisplayKey(pendingRef.current.key);
        setDisplayChildren(pendingRef.current.children);
        pendingRef.current = null;
      }
      setPhase("enter");
      timerRef.current = setTimeout(() => setPhase("idle"), 380);
    }, 220);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateKey]);

  // Saat children berganti tapi key sama (misal soal baru), update langsung
  useEffect(() => {
    if (stateKey === displayKey && phase === "idle") {
      setDisplayChildren(children);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  const cls =
    phase === "enter"
      ? "screen-enter"
      : phase === "exit"
      ? "screen-exit pointer-events-none"
      : "";

  return (
    <div key={displayKey} className={`w-full ${cls}`}>
      {displayChildren}
    </div>
  );
}

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
    <div className="relative h-dvh w-full overflow-y-auto overflow-x-hidden text-slate-800 font-body"
      style={{ background: "#0f0a1e" }}>

      {/* Background JRPG malam */}
      <GameBackground />

      {/* Navigasi header (hanya di home) */}
      {gameState === "home" && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-50 flex items-center gap-2 screen-enter">
          <Link
            href="/kanji"
            className="rpg-btn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-[9px] sm:text-[10px] touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            📚 Kanji
          </Link>
          <Link
            href="/bunpou"
            className="rpg-btn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-[9px] sm:text-[10px] touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            📝 Bunpou
          </Link>
        </div>
      )}

      {/* ── Game States dengan Animated Transition ── */}
      <AnimatedScreen stateKey={gameState}>
        <>
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
        </>
      </AnimatedScreen>
    </div>
  );
}
