import { KanaEntry } from "@/types";

export const kanaData: KanaEntry[] = [
  { id: "a1", romaji: "a", hiragana: "あ", katakana: "ア" },
  { id: "a2", romaji: "i", hiragana: "い", katakana: "イ" },
  { id: "a3", romaji: "u", hiragana: "う", katakana: "ウ" },
  { id: "a4", romaji: "e", hiragana: "え", katakana: "エ" },
  { id: "a5", romaji: "o", hiragana: "お", katakana: "オ" },
  { id: "ka1", romaji: "ka", hiragana: "か", katakana: "カ" },
  { id: "ka2", romaji: "ki", hiragana: "き", katakana: "キ" },
  { id: "ka3", romaji: "ku", hiragana: "く", katakana: "ク" },
  { id: "ka4", romaji: "ke", hiragana: "け", katakana: "ケ" },
  { id: "ka5", romaji: "ko", hiragana: "こ", katakana: "コ" },
  { id: "sa1", romaji: "sa", hiragana: "さ", katakana: "サ" },
  { id: "sa2", romaji: "shi", hiragana: "し", katakana: "シ" },
  { id: "sa3", romaji: "su", hiragana: "す", katakana: "ス" },
  { id: "sa4", romaji: "se", hiragana: "せ", katakana: "セ" },
  { id: "sa5", romaji: "so", hiragana: "そ", katakana: "ソ" },
  { id: "ta1", romaji: "ta", hiragana: "た", katakana: "タ" },
  { id: "ta2", romaji: "chi", hiragana: "ち", katakana: "チ" },
  { id: "ta3", romaji: "tsu", hiragana: "つ", katakana: "ツ" },
  { id: "ta4", romaji: "te", hiragana: "て", katakana: "テ" },
  { id: "ta5", romaji: "to", hiragana: "と", katakana: "ト" },
  { id: "na1", romaji: "na", hiragana: "な", katakana: "ナ" },
  { id: "na2", romaji: "ni", hiragana: "に", katakana: "ニ" },
  { id: "na3", romaji: "nu", hiragana: "ぬ", katakana: "ヌ" },
  { id: "na4", romaji: "ne", hiragana: "ね", katakana: "ネ" },
  { id: "na5", romaji: "no", hiragana: "の", katakana: "ノ" },
  { id: "ha1", romaji: "ha", hiragana: "は", katakana: "ハ" },
  { id: "ha2", romaji: "hi", hiragana: "ひ", katakana: "ヒ" },
  { id: "ha3", romaji: "fu", hiragana: "ふ", katakana: "フ" },
  { id: "ha4", romaji: "he", hiragana: "へ", katakana: "ヘ" },
  { id: "ha5", romaji: "ho", hiragana: "ほ", katakana: "ホ" },
  { id: "ma1", romaji: "ma", hiragana: "ま", katakana: "マ" },
  { id: "ma2", romaji: "mi", hiragana: "み", katakana: "ミ" },
  { id: "ma3", romaji: "mu", hiragana: "む", katakana: "ム" },
  { id: "ma4", romaji: "me", hiragana: "め", katakana: "メ" },
  { id: "ma5", romaji: "mo", hiragana: "も", katakana: "モ" },
  { id: "ya1", romaji: "ya", hiragana: "や", katakana: "ヤ" },
  { id: "ya2", romaji: "yu", hiragana: "ゆ", katakana: "ユ" },
  { id: "ya3", romaji: "yo", hiragana: "よ", katakana: "ヨ" },
  { id: "ra1", romaji: "ra", hiragana: "ら", katakana: "ラ" },
  { id: "ra2", romaji: "ri", hiragana: "り", katakana: "リ" },
  { id: "ra3", romaji: "ru", hiragana: "る", katakana: "ル" },
  { id: "ra4", romaji: "re", hiragana: "れ", katakana: "レ" },
  { id: "ra5", romaji: "ro", hiragana: "ろ", katakana: "ロ" },
  { id: "wa1", romaji: "wa", hiragana: "わ", katakana: "ワ" },
  { id: "wo1", romaji: "wo", hiragana: "を", katakana: "ヲ" },
  { id: "n1", romaji: "n", hiragana: "ん", katakana: "ン" },
];

export function getRandomKanaOptions(correct: KanaEntry, all: KanaEntry[], count: number = 4): KanaEntry[] {
  const pool = all.filter((item) => item.id !== correct.id);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const wrong = shuffled.slice(0, count - 1);
  return [...wrong, correct].sort(() => Math.random() - 0.5);
}
