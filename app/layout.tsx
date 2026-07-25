import type { Metadata } from "next";
import { Nunito, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-body",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
});

export const metadata: Metadata = {
  title: "漢字マスター — KanjiMocha | Belajar Kanji & Bunpou N5-N4 Interaktif",
  description: "Platform belajar Bahasa Jepang interaktif JLPT N5, N4 & JFT Basic A2. Dilengkapi Game Kuis, Ensiklopedia Kanji 1 & 2+ Karakter, serta Kamus Tata Bahasa Bunpou Lengkap!",
  keywords: ["Kanji", "Bunpou", "Tata Bahasa Jepang", "JLPT N5", "JLPT N4", "JFT Basic A2", "Belajar Bahasa Jepang", "KanjiMocha"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${nunito.variable} ${nunito.variable} ${notoSansJP.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}