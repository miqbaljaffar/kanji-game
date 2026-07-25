# 🀄 KanjiMocha — Game Belajar & Ensiklopedia Kanji & Bunpou N5-N4 (JFT Basic A2)

![KanjiMocha Banner](https://img.shields.io/badge/JLPT-N5%20%7C%20N4-blue?style=for-the-badge)
![JFT Basic A2](https://img.shields.io/badge/JFT-Basic%20A2-emerald?style=for-the-badge)
![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-cyan?style=for-the-badge)

Platform pembelajaran Bahasa Jepang interaktif modern berbasis web yang dirancang khusus untuk persiapan ujian **JLPT N5, JLPT N4, dan JFT Basic A2**. Menghadirkan kombinasi **Game Kuis Interaktif**, **Ensiklopedia & Kamus Kanji N5-N4 Lengkap**, serta **Ensiklopedia Tata Bahasa (Bunpou) N5-N4 Komprehensif**.

---

## 🌟 Fitur Utama Aplikasi

### 1. 📚 Ensiklopedia & Kamus Kanji N5-N4 (`/kanji`)
- **Bedah Kanji 1 Karakter (Tanka) & Kanji Majemuk (2+ Kanji / Jukugo)**: Penjelasan mendalam untuk ratusan karakter Kanji N5 dan N4.
- **Visual Mnemonic & Asal-Usul**: Cerita hafalan dan gambar konsep pembentukan huruf.
- **Detail Lengkap**: Jumlah goresan (*strokes*), Cara baca **Onyomi (音読み)** & **Kunyomi (訓読み)**, serta bedah elemen penyusun (*components*).
- **Contoh Kalimat Nyata & Audio TTS 🔊**: Contoh kalimat percakapan lengkap dengan Furigana/Hiragana, terjemahan Indonesia, dan tombol pelafalan suara otomatis.
- **Pencarian Real-Time & Paginasi Mobile**: Cari instan berdasarkan Kanji, Hiragana, Romaji, atau Arti dengan paginasi mulus per 12 item.

---

### 2. 📝 Ensiklopedia & Kamus Bunpou (Tata Bahasa N5-N4) (`/bunpou`)
- **Rumus Pembentukan (Formula)**: Penjelasan gabungan kelas kata (misal: `Kata Kerja [Bentuk て] + ください`, `Kata Kerja [Bentuk た] + ほうがいい`).
- **Fungsi Detail & Catatan (Notes & Pitfalls)**: Penjelasan fungsi kontekstual Bahasa Indonesia serta catatan membedakan tata bahasa serupa (misal `で` vs `に`, `～から` vs `～ので`).
- **Minimal 5 Contoh Kalimat Interaktif Per Entri**: Setiap poin tata bahasa (N5 maupun N4) dilengkapi minimal 5 contoh kalimat percakapan nyata.
- **Pelafalan Suara TTS 🔊**: Tombol speaker suara individual untuk setiap contoh kalimat tata bahasa.
- **Filter Chips**: Filter berdasarkan Level (*N5/N4*) dan Kategori (*Partikel*, *Bentuk Kata Kerja*, *Ungkapan & Keinginan*, *Syarat & Perbandingan*, *Sopan & Kehormatan*).

---

### 3. 🎮 Game Kuis Kanji & Kana Interaktif (`/`)
- **4 Mode Permainan**:
  - `漢字 → Arti`: Tebak arti Indonesia dari karakter Kanji.
  - `Arti → 漢字`: Pilih Kanji yang tepat berdasarkan arti Indonesia.
  - `ひら → Arti`: Latihan membaca Hiragana dan artinya.
  - `文法 (Bunpou)`: Kuis tata bahasa melengkapi kalimat berjarak.
- **3 Tingkat Kesulitan**:
  - 🌸 **Santai** (20 detik per soal)
  - ⚡ **Normal** (12 detik per soal)
  - 🔥 **Sulit** (7 detik per soal)
- **Sistem Poin & Combo Streak**: Bonus streak beruntun (+10 poin/streak) dan bonus sisa waktu (*time bonus*).
- **Layar Hasil & Ranking Evaluasi**: Penilaian rating bintang (⭐ 1-3) dan ranking kompetensi (*Master / Hebat / Bagus / Cukup / Belajar*).

---

## 🎨 UI/UX & Aesthetics

- **Mobile-First Responsive Design**: Tampilan dan gesture dioptimalkan 100% untuk layar smartphone maupun desktop.
- **Native Bottom Sheet Modal**: Modal detail yang meluncur mulus dari bawah layar di smartphone.
- **Design System Modern**: Efek glassmorphism, warna tajam Tailwind v4, animasi sakura falling, dan typo Jepang `Noto Sans JP`.
- **Audio Web Speech API**: Pelafalan TTS bawaan browser tanpa perlu dependensi eksternal yang berat.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Logic**: React 19 Hooks (`useState`, `useMemo`, `useEffect`, `useRef`)
- **Fonts**: `Noto Sans JP` (Japanese), `Fredoka` (Display), `Nunito` (Body)
- **Audio Engine**: Web Speech API (TTS `ja-JP`)

---

## 🚀 Cara Menjalankan Proyek

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 3. Build Production
```bash
npm run build
npm start
```

---

## 📁 Struktur Direktori Proyek

```
kanji-game/
├── app/
│   ├── layout.tsx             # Root layout & font metadata
│   ├── page.tsx               # Main page (Game & Navigation router)
│   ├── globals.css            # Custom CSS animations & Tailwind styles
│   ├── kanji/
│   │   └── page.tsx           # Halaman Ensiklopedia Kanji N5-N4
│   └── bunpou/
│       └── page.tsx           # Halaman Ensiklopedia Bunpou N5-N4
├── components/
│   ├── Background.tsx         # Awan ceria & animasi sakura background
│   ├── HomeScreen.tsx         # Layar utama & banner navigasi ensiklopedia
│   ├── GameScreen.tsx         # Layar permainan kuis aktif
│   ├── ResultScreen.tsx       # Layar hasil skor & statistik game
│   ├── kanji/
│   │   ├── KanjiCard.tsx          # Card komponen Kanji
│   │   ├── KanjiFilterBar.tsx     # Search & Filter bar Kanji
│   │   ├── KanjiDetailModal.tsx   # Bottom sheet / Modal detail Kanji
│   │   └── KanjiPagination.tsx    # Paginasi Kanji
│   └── bunpou/
│       ├── BunpouCard.tsx         # Card komponen Bunpou
│       ├── BunpouFilterBar.tsx    # Search & Filter bar Bunpou
│       ├── BunpouDetailModal.tsx  # Bottom sheet / Modal detail Bunpou
│       └── BunpouPagination.tsx   # Paginasi Bunpou
├── data/
│   ├── kanji.ts               # Database kosakata dasar JFT Basic A2
│   ├── kanjiDetails.ts        # Database detail Onyomi/Kunyomi
│   ├── kanjiDictionary.ts     # Master Database Ensiklopedia Kanji N5-N4
│   ├── bunpou.ts              # Database soal kuis Tata Bahasa
│   └── bunpouDictionary.ts    # Master Database Ensiklopedia Bunpou N5-N4
├── types/
│   └── index.ts               # TypeScript interfaces & types definition
└── README.md
```

---

## 🌸 頑張ってください！ (Ganbatte Kudasai!)

Semangat belajar dan sukses lulus ujian **JLPT N5, JLPT N4, maupun JFT Basic A2**! 🎌✨
