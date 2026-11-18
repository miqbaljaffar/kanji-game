"use client";

import { useState, useCallback, useEffect } from "react";
import { GameMode, Difficulty, JlptLevel } from "@/types";

export interface GameSession {
  date: string;        // ISO string
  level: JlptLevel;
  mode: GameMode;
  difficulty: Difficulty;
  score: number;
  accuracy: number;
  correct: number;
  total: number;
  maxStreak: number;
  rank: "S" | "A" | "B" | "C";
}

export interface StoredStats {
  highScore: number;
  bestStreak: number;
  totalGamesPlayed: number;
  totalCorrect: number;
  totalQuestions: number;
  recentSessions: GameSession[]; // max 10 entries
  lastPlayedLevel: JlptLevel | null;
  lastPlayedMode: GameMode | null;
  lastPlayedDifficulty: Difficulty | null;
}

const STORAGE_KEY = "kanjimocha_stats_v2";
const MAX_SESSIONS = 10;

function getRank(accuracy: number): "S" | "A" | "B" | "C" {
  if (accuracy >= 90) return "S";
  if (accuracy >= 70) return "A";
  if (accuracy >= 50) return "B";
  return "C";
}

const defaultStats: StoredStats = {
  highScore: 0,
  bestStreak: 0,
  totalGamesPlayed: 0,
  totalCorrect: 0,
  totalQuestions: 0,
  recentSessions: [],
  lastPlayedLevel: null,
  lastPlayedMode: null,
  lastPlayedDifficulty: null,
};

function loadFromStorage(): StoredStats {
  if (typeof window === "undefined") return defaultStats;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStats;
    const parsed = JSON.parse(raw) as Partial<StoredStats>;
    return { ...defaultStats, ...parsed };
  } catch {
    return defaultStats;
  }
}

function saveToStorage(stats: StoredStats): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // quota exceeded or private mode — silently ignore
  }
}

export function useGameStats() {
  const [storedStats, setStoredStats] = useState<StoredStats>(defaultStats);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setStoredStats(loadFromStorage());
  }, []);

  /**
   * Call this when a game session ends to persist results.
   */
  const saveSession = useCallback((
    level: JlptLevel,
    mode: GameMode,
    difficulty: Difficulty,
    score: number,
    accuracy: number,
    correct: number,
    total: number,
    maxStreak: number,
  ) => {
    setStoredStats((prev) => {
      const session: GameSession = {
        date: new Date().toISOString(),
        level,
        mode,
        difficulty,
        score,
        accuracy,
        correct,
        total,
        maxStreak,
        rank: getRank(accuracy),
      };

      const updated: StoredStats = {
        highScore: Math.max(prev.highScore, score),
        bestStreak: Math.max(prev.bestStreak, maxStreak),
        totalGamesPlayed: prev.totalGamesPlayed + 1,
        totalCorrect: prev.totalCorrect + correct,
        totalQuestions: prev.totalQuestions + total,
        // newest first, cap at MAX_SESSIONS
        recentSessions: [session, ...prev.recentSessions].slice(0, MAX_SESSIONS),
        lastPlayedLevel: level,
        lastPlayedMode: mode,
        lastPlayedDifficulty: difficulty,
      };

      saveToStorage(updated);
      return updated;
    });
  }, []);

  /** True if current score beats the stored high score. */
  const isNewHighScore = useCallback(
    (score: number) => score > storedStats.highScore,
    [storedStats.highScore],
  );

  return { storedStats, saveSession, isNewHighScore };
}
