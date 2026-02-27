"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { KanjiEntry, GameMode, GameState, AnswerState, GameStats, QuizQuestion, Difficulty, AppTheme } from "@/types";
import { kanjiData, getRandomOptions, shuffleArray } from "@/data/kanji";

const QUESTION_TIME = { easy: 20, medium: 12, hard: 7 };
const QUESTIONS_PER_GAME = 20;

export function useGame() {
  // State untuk menyimpan tema (Default bisa diset ke kids)
  const [theme, setTheme] = useState<AppTheme>("kids");
  
  const [gameState, setGameState] = useState<GameState>("home");
  const [gameMode, setGameMode] = useState<GameMode>("kanji-to-arti");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [stats, setStats] = useState<GameStats>({
    score: 0, streak: 0, maxStreak: 0, correct: 0, wrong: 0, total: 0, timeSpent: 0, accuracy: 0
  });
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME["medium"]);
  const [questionPool, setQuestionPool] = useState<KanjiEntry[]>([]);
  const [showFloatingScore, setShowFloatingScore] = useState(false);
  const [floatingScoreValue, setFloatingScoreValue] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const generateQuestion = useCallback((pool: KanjiEntry[], index: number): QuizQuestion => {
    const question = pool[index];
    const options = getRandomOptions(question, kanjiData, 4);
    const correctIndex = options.findIndex((o) => o.id === question.id);
    return { question, options, correctIndex };
  }, []);

  const startGame = useCallback((mode: GameMode, diff: Difficulty) => {
    const pool = shuffleArray(kanjiData).slice(0, QUESTIONS_PER_GAME);
    setQuestionPool(pool);
    setGameMode(mode);
    setDifficulty(diff);
    setQuestionIndex(0);
    setAnswerState("idle");
    setSelectedIndex(null);
    setStats({ score: 0, streak: 0, maxStreak: 0, correct: 0, wrong: 0, total: 0, timeSpent: 0, accuracy: 0 });
    setTimeLeft(QUESTION_TIME[diff]);
    setCurrentQuestion(generateQuestion(pool, 0));
    setGameState("playing");
    startTimeRef.current = Date.now();
  }, [generateQuestion]);

  const nextQuestion = useCallback(() => {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= QUESTIONS_PER_GAME) {
      setGameState("result");
      return;
    }
    setQuestionIndex(nextIndex);
    setAnswerState("idle");
    setSelectedIndex(null);
    setTimeLeft(QUESTION_TIME[difficulty]);
    setCurrentQuestion(generateQuestion(questionPool, nextIndex));
  }, [questionIndex, questionPool, difficulty, generateQuestion]);

  const handleAnswer = useCallback((selectedIdx: number) => {
    if (answerState !== "idle" || !currentQuestion) return;

    clearTimer();
    const isCorrect = selectedIdx === currentQuestion.correctIndex;
    setSelectedIndex(selectedIdx);
    setAnswerState(isCorrect ? "correct" : "wrong");

    setStats((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const maxStreak = Math.max(prev.maxStreak, newStreak);
      const baseScore = isCorrect ? 100 : 0;
      const streakBonus = isCorrect ? Math.min(newStreak * 10, 100) : 0;
      const timeBonus = isCorrect ? Math.floor(timeLeft * 5) : 0;
      const earned = baseScore + streakBonus + timeBonus;
      
      if (isCorrect) {
        setFloatingScoreValue(earned);
        setShowFloatingScore(true);
        setTimeout(() => setShowFloatingScore(false), 1000);
      }

      const newTotal = prev.total + 1;
      const newCorrect = prev.correct + (isCorrect ? 1 : 0);
      return {
        score: prev.score + earned,
        streak: newStreak,
        maxStreak,
        correct: newCorrect,
        wrong: prev.wrong + (isCorrect ? 0 : 1),
        total: newTotal,
        timeSpent: Math.floor((Date.now() - startTimeRef.current) / 1000),
        accuracy: Math.round((newCorrect / newTotal) * 100),
      };
    });

    setTimeout(() => {
      nextQuestion();
    }, 1500); // Waktu jeda agar anak bisa melihat maskot bereaksi
  }, [answerState, currentQuestion, timeLeft, clearTimer, nextQuestion]);

  // Timer
  useEffect(() => {
    if (gameState !== "playing" || answerState !== "idle") return;
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleAnswer(-1); // Time out = wrong
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimer();
  }, [gameState, answerState, currentQuestion, handleAnswer, clearTimer]);

  const goHome = useCallback(() => {
    clearTimer();
    setGameState("home");
  }, [clearTimer]);

  const totalQuestions = QUESTIONS_PER_GAME;
  const timeRatio = timeLeft / QUESTION_TIME[difficulty];

  return {
    theme,           // Export state theme
    setTheme,        // Export setter theme
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
  };
}