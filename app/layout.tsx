import type { Metadata, Viewport } from "next";
import { Nunito, Noto_Sans_JP, Press_Start_2P } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────
   FONTS — display:swap prevents FOIT
───────────────────────────────────────── */
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
  display: "swap",
  preload: false, // CJK font is large — lazy load, don't block initial paint
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
  display: "swap",
  preload: false,
});

/* ─────────────────────────────────────────
   METADATA
───────────────────────────────────────── */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kanjimocha.vercel.app";
const SITE_NAME = "KanjiMocha";
const TITLE = "KanjiMocha — Belajar Kanji & Bunpou Bahasa Jepang";
const DESCRIPTION =
  "Platform belajar Bahasa Jepang interaktif untuk JLPT N5 & N4. Game kuis, Ensiklopedia Kanji 1 & 2+ Karakter, dan Kamus Tata Bahasa Bunpou lengkap!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Kanji",
    "Bunpou",
    "Tata Bahasa Jepang",
    "JLPT N5",
    "JLPT N4",
    "Belajar Bahasa Jepang",
    "KanjiMocha",
    "Game Kanji",
    "Kuis Bahasa Jepang",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  /** Canonical URL */
  alternates: {
    canonical: "/",
  },

  /** Open Graph */
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KanjiMocha — Belajar Kanji & Bunpou Bahasa Jepang",
      },
    ],
  },

  /** Twitter / X Card */
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },

  /** Icons */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  /** PWA manifest */
  manifest: "/manifest.json",

  /** Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** Viewport — exported separately per Next.js 14+ recommendation */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#58cc02" },
    { media: "(prefers-color-scheme: dark)",  color: "#46a302" },
  ],
};

/* ─────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${nunito.variable} ${notoSansJP.variable} ${pressStart2P.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
