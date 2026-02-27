import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "漢字マスター | Kanji Master JFT Basic A2",
  description: "Game tebak kanji JFT Basic A2 yang seru dan interaktif!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
