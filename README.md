# 🀄 漢字マスター — Kanji Master JFT Basic A2

Game tebak kanji interaktif berbasis web untuk persiapan ujian **JFT Basic A2**, dibangun dengan **Next.js 14 + TypeScript**.

---

## 🎮 Fitur Game

### Mode Permainan
| Mode | Deskripsi |
|---|---|
| **漢字 → Arti** | Lihat kanji, pilih artinya dalam Bahasa Indonesia |
| **Arti → 漢字** | Lihat arti Indonesia, pilih kanji yang tepat |
| **ひら → Arti** | Lihat hiragana, pilih artinya |

### Tingkat Kesulitan
| Level | Waktu/Soal |
|---|---|
| Santai 🌸 | 20 detik |
| Normal ⚡ | 12 detik |
| Sulit 🔥 | 7 detik |

### Sistem Poin
- ✅ Jawaban benar: **+100 poin**
- 🔥 Streak bonus: **+10 poin per streak** (maks +100)
- ⏱ Time bonus: **sisa waktu × 5 poin**

### Fitur Lainnya
- 📊 20 soal acak per ronde dari **250+ kosakata**
- 🏆 Ranking: Master / Hebat / Bagus / Cukup / Belajar
- ⭐ Rating bintang berdasarkan akurasi
- 🌸 Animasi sakura & efek neon

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
# http://localhost:3000
```

### Build Production
```bash
npm run build
npm start
```

---

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page (state router)
│   └── globals.css       # Global styles & animations
├── components/
│   ├── Background.tsx    # Sakura, shooting stars, grid
│   ├── HomeScreen.tsx    # Layar utama & pilihan mode
│   ├── GameScreen.tsx    # Layar permainan aktif
│   └── ResultScreen.tsx  # Layar hasil akhir
├── data/
│   └── kanji.ts          # 250+ data kosakata JFT Basic A2
├── hooks/
│   └── useGame.ts        # Game logic & state management
└── types/
    └── index.ts          # TypeScript interfaces
```

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom theme, animations)
- **Noto Sans JP** (Japanese font)
- **Fredoka One** (display font)
- **Nunito** (body font)

---

## 🎨 Design System

- **Aesthetic**: Neon arcade + Japanese motif
- **Colors**: Dark background (#0a0010) + neon accents (pink, cyan, yellow, green)
- **Animations**: Sakura falling, shooting stars, bounce-in, neon glow
- **Responsive**: Mobile-first, optimal di HP & desktop

---

## 📝 Data Kosakata

Mencakup semua kategori dari PDF **DAFTAR KANJI JFT BASIC A2**:
- Kata kerja (Verbs)
- Kata sifat (Adjectives)  
- Kata benda (Nouns)
- Tempat, waktu, keluarga, tubuh, alam, dll.

---

## 🌸 頑張ってください！

Semangat belajar dan sukses ujian JFT Basic A2! 🎌
