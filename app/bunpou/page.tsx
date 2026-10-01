import type { Metadata } from "next";
import { BunpouDictionaryPage } from "../../components/bunpou/BunpouPageClient";

export const metadata: Metadata = {
  title: "Ensiklopedia Bunpou",
  description:
    "Kamus tata bahasa Jepang lengkap JLPT N5, N4 & JFT Basic A2 — rumus, pola, dan contoh kalimat untuk setiap pola gramatikal.",
  alternates: { canonical: "/bunpou" },
  openGraph: {
    title: "Ensiklopedia Bunpou — KanjiMocha",
    description:
      "Kamus tata bahasa Jepang JLPT N5, N4 & JFT Basic A2 dengan rumus dan contoh kalimat.",
    url: "/bunpou",
  },
};

export default function Page() {
  return <BunpouDictionaryPage />;
}
