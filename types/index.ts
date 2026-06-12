export interface KanjiEntry {
  id: string;
  romaji: string;
  kanji: string;
  hiragana: string;
  arti: string;
  category: string; // ✅ FIX: Diubah dari number menjadi string
  onyomi?: string;
  kunyomi?: string;
  mnemonic?: string;
}

export interface KanaEntry {
  id: string;
  romaji: string;
  hiragana: string;
  katakana: string;
}

export interface BunpouEntry {
  id: string;
  sentence: string;
  translation: string;
  options: string[];
  correctOption: string;
}

/* ======================
   GAME TYPES
====================== */
export type GameMode =
  | "kanji-to-arti"
  | "arti-to-kanji"
  | "hiragana-to-arti"
  | "kanji-to-hiragana"
  | "bunpou"
  | "hiragana-to-romaji"
  | "katakana-to-romaji"
  | "mixed-kana";

export type GameState = "home" | "playing" | "answer" | "result";
export type AnswerState = "idle" | "correct" | "wrong";
export type Difficulty = "easy" | "medium" | "hard";

/* ======================
   QUIZ STRUCTURE
====================== */
export interface QuizQuestion {
  mode: "kanji" | "bunpou" | "kana";

  kanjiQuestion?: KanjiEntry;
  kanjiOptions?: KanjiEntry[];

  kanaQuestion?: KanaEntry;
  kanaOptions?: KanaEntry[];
  kanaScript?: "hiragana" | "katakana";

  bunpouQuestion?: BunpouEntry;
  stringOptions?: string[];

  correctIndex: number;
}

/* ======================
   STATS
====================== */
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