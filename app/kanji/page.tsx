import type { Metadata } from "next";
import { KanjiDictionaryPage } from "../../components/kanji/KanjiPageClient";

export const metadata: Metadata = {
  title: "Ensiklopedia Kanji",
  description:
    "Kamus kanji lengkap JLPT N5 dan N4 — termasuk kanji 1 karakter & majemuk (2+ karakter). Dilengkapi bacaan, arti, onyomi, kunyomi, dan contoh kalimat.",
  alternates: { canonical: "/kanji" },
  openGraph: {
    title: "Ensiklopedia Kanji — KanjiMocha",
    description:
      "Kamus kanji lengkap JLPT N5 dan N4 dengan bacaan, arti, dan contoh kalimat.",
    url: "/kanji",
  },
};

export default function Page() {
  return <KanjiDictionaryPage />;
}
