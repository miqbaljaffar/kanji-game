"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { KanjiEntry, BunpouEntry, GameMode, GameState, AnswerState, GameStats, QuizQuestion, Difficulty } from "@/types";
import { kanjiData, getRandomOptions, shuffleArray } from "@/data/kanji";
import { bunpouData } from "@/data/bunpou";

const QUESTION_TIME = { easy: 20, medium: 12, hard: 7 };
const QUESTIONS_PER_GAME = 20;

export function useGame() {
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
  const [questionPool, setQuestionPool] = useState<(KanjiEntry | BunpouEntry)[]>([]);
  const [showFloatingScore, setShowFloatingScore] = useState(false);
  const [floatingScoreValue, setFloatingScoreValue] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const generateQuestion = useCallback((pool: (KanjiEntry | BunpouEntry)[], index: number, currentMode: GameMode): QuizQuestion => {
    if (currentMode === "bunpou") {
      const question = pool[index] as BunpouEntry;
      const options = shuffleArray([...question.options]);
      const correctIndex = options.indexOf(question.correctOption);
      return { mode: "bunpou", bunpouQuestion: question, stringOptions: options, correctIndex };
    } else {
      const question = pool[index] as KanjiEntry;
      const options = getRandomOptions(question, kanjiData, 4);
      const correctIndex = options.findIndex((o) => o.id === question.id);
      return { mode: "kanji", kanjiQuestion: question, kanjiOptions: options, correctIndex };
    }
  }, []);

  const startGame = useCallback((mode: GameMode, diff: Difficulty) => {
    // FIX: Kita deklarasikan tipe dataSource sebagai array campuran secara eksplisit di sini
    const dataSource: (KanjiEntry | BunpouEntry)[] = mode === "bunpou" ? bunpouData : kanjiData;
    
    const pool = shuffleArray(dataSource).slice(0, QUESTIONS_PER_GAME);
    setQuestionPool(pool);
    setGameMode(mode);
    setDifficulty(diff);
    setQuestionIndex(0);
    setAnswerState("idle");
    setSelectedIndex(null);
    setStats({ score: 0, streak: 0, maxStreak: 0, correct: 0, wrong: 0, total: 0, timeSpent: 0, accuracy: 0 });
    setTimeLeft(QUESTION_TIME[diff]);
    setCurrentQuestion(generateQuestion(pool, 0, mode));
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
    setCurrentQuestion(generateQuestion(questionPool, nextIndex, gameMode));
  }, [questionIndex, questionPool, difficulty, gameMode, generateQuestion]);

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
    }, 1500);
  }, [answerState, currentQuestion, timeLeft, clearTimer, nextQuestion]);

  useEffect(() => {
    if (gameState !== "playing" || answerState !== "idle") return;
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleAnswer(-1);
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

  const totalQuestions = Math.min(QUESTIONS_PER_GAME, questionPool.length);
  const timeRatio = timeLeft / QUESTION_TIME[difficulty];

  return {
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