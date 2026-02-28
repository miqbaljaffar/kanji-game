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
  title: "漢字マスター | Kanji Master JFT Basic A2",
  description: "Game tebak kanji JFT Basic A2 yang seru dan interaktif!",
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