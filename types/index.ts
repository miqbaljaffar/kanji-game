export interface KanjiEntry {
  id: string;
  romaji: string;
  kanji: string;
  hiragana: string;
  arti: string;
  category: string;
}

export type GameMode = "kanji-to-arti" | "arti-to-kanji" | "hiragana-to-arti";
export type GameState = "home" | "playing" | "result";
export type AnswerState = "idle" | "correct" | "wrong";
export type Difficulty = "easy" | "medium" | "hard";

// Menambahkan tipe Theme untuk mengakomodasi opsi anak-anak dan dewasa
export type AppTheme = "pro" | "kids";

export interface QuizQuestion {
  question: KanjiEntry;
  options: KanjiEntry[];
  correctIndex: number;
}

export interface GameStats {
  score: number;
  streak: number;
  maxStreak: number;
  correct: number;
  wrong: number;
  total: number;
  timeSpent: number;
  accuracy: number;
}