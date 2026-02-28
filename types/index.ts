export interface KanjiEntry {
  id: string;
  romaji: string;
  kanji: string;
  hiragana: string;
  arti: string;
  category: string;
}

export interface BunpouEntry {
  id: string;
  sentence: string;
  translation: string;
  options: string[];
  correctOption: string;
}

export type GameMode = "kanji-to-arti" | "arti-to-kanji" | "hiragana-to-arti" | "bunpou";
export type GameState = "home" | "playing" | "result";
export type AnswerState = "idle" | "correct" | "wrong";
export type Difficulty = "easy" | "medium" | "hard";

export interface QuizQuestion {
  mode: "kanji" | "bunpou";
  // Untuk mode Kanji/Kosakata
  kanjiQuestion?: KanjiEntry;
  kanjiOptions?: KanjiEntry[];
  // Untuk mode Bunpou
  bunpouQuestion?: BunpouEntry;
  stringOptions?: string[];
  
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