"use client";
import { useState } from "react";
import { GameStats, GameMode, Difficulty } from "@/types";
import { Mascot } from "./Mascot";

interface ResultScreenProps {
  stats: GameStats;
  gameMode: GameMode;
  difficulty: Difficulty;
  onPlayAgain: () => void;
  onHome: () => void;
}

function getRankDetail(accuracy: number) {
  if (accuracy >= 90) return { title: "LUAR BIASA!", emoji: "🏆", color: "text-yellow-500", desc: "Pintar sekali! Kamu benar-benar Master Kanji." };
  if (accuracy >= 70) return { title: "HEBAT!", emoji: "🔥", color: "text-orange-500", desc: "Kerja bagus! Sedikit lagi jadi sempurna." };
  if (accuracy >= 50) return { title: "BAGUS!", emoji: "👍", color: "text-blue-500", desc: "Bagus! Terus berlatih supaya makin jago ya." };
  return { title: "AYO COBA LAGI", emoji: "💪", color: "text-slate-500", desc: "Jangan menyerah! Belajar lagi pasti bisa." };
}

export function ResultScreen({ stats, onPlayAgain, onHome }: ResultScreenProps) {
  const rank = getRankDetail(stats.accuracy);
  
  // State untuk modal donasi dan pesan terima kasih
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCloseDonation = () => {
    setIsDonationOpen(false); // Tutup modal
    setShowThankYou(true);    // Tampilkan pesan terima kasih

    // Sembunyikan pesan terima kasih setelah 3.5 detik
    setTimeout(() => {
      setShowThankYou(false);
    }, 3500);
  };

  return (
    <>
      <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center p-6 sm:p-8 max-w-lg mx-auto">
        
        {/* Maskot dengan animasi bounce-soft */}
        <div className="mb-4 animate-bounce-soft">
          <Mascot state={stats.accuracy >= 50 ? "correct" : "wrong"} />
        </div>

        {/* Card hasil dengan desain modern */}
        <div className="w-full bg-white/90 backdrop-blur-lg border-2 border-slate-100 shadow-xl p-8 text-center animate-fade-up relative overflow-hidden rounded-[2.5rem]">
          
          {/* Dekorasi pita juara di atas */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 to-orange-400"></div>

          <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mt-2">Pelajaran Selesai</h2>
          <h1 className={`text-4xl font-black mt-2 mb-3 ${rank.color}`}>
            {rank.emoji} {rank.title}
          </h1>
          <p className="text-base font-bold text-slate-500 mb-8">{rank.desc}</p>

          {/* Skor Utama dengan gradient background */}
          <div className="bg-gradient-to-b from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-6 mb-8 shadow-inner">
            <div className="text-sm font-black text-yellow-600 uppercase mb-2">Total Skor Kamu</div>
            <div className="text-6xl font-black text-yellow-500 drop-shadow-sm">
              ⭐ {stats.score.toLocaleString()}
            </div>
          </div>

          {/* Grid Statistik 2x2 dengan desain modern */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-green-50 border border-green-200 p-4 rounded-3xl flex flex-col items-center">
              <span className="text-3xl font-black text-green-600 mb-1">{stats.correct}</span>
              <span className="text-xs font-bold text-green-700 uppercase">Benar ✅</span>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-3xl flex flex-col items-center">
              <span className="text-3xl font-black text-red-600 mb-1">{stats.wrong}</span>
              <span className="text-xs font-bold text-red-700 uppercase">Salah ❌</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-3xl flex flex-col items-center">
              <span className="text-3xl font-black text-blue-600 mb-1">{stats.accuracy}%</span>
              <span className="text-xs font-bold text-blue-700 uppercase">Akurasi 🎯</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-3xl flex flex-col items-center">
              <span className="text-3xl font-black text-purple-600 mb-1">{stats.maxStreak}</span>
              <span className="text-xs font-bold text-purple-700 uppercase">Beruntun ⚡</span>
            </div>
          </div>

          {/* Tombol Aksi dengan efek 3D */}
          <div className="flex flex-col gap-3">
            <button
              onClick={onPlayAgain}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black py-5 rounded-2xl text-lg tracking-widest shadow-[0_6px_0_#2563eb] active:shadow-none active:translate-y-2 transition-all uppercase"
            >
              MAIN LAGI! 🔥
            </button>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <button
                onClick={onHome}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 rounded-2xl text-xs sm:text-sm tracking-widest shadow-[0_4px_0_#cbd5e1] active:shadow-none active:translate-y-1 transition-all uppercase"
              >
                MENU 🏠
              </button>
              <button
                onClick={() => setIsDonationOpen(true)}
                className="w-full bg-pink-100 hover:bg-pink-200 text-pink-600 border border-pink-200 font-black py-4 rounded-2xl text-xs sm:text-sm tracking-widest shadow-[0_4px_0_#fbcfe8] active:shadow-none active:translate-y-1 transition-all uppercase flex items-center justify-center gap-1 sm:gap-2"
              >
                <span>💖</span> DUKUNG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL DONASI QRIS --- */}
      {isDonationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-[2rem] p-6 max-w-sm w-full shadow-2xl animate-bounce-pop relative border-4 border-slate-100">
            {/* Tombol Silang (X) */}
            <button 
              onClick={handleCloseDonation} 
              className="absolute top-4 right-5 text-slate-400 hover:text-slate-600 font-black text-xl transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center mt-2">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Dukung Kami! 💖</h3>
              <p className="text-sm font-bold text-slate-500 mb-6 px-2">
                Scan QRIS di bawah ini untuk donasi seikhlasnya. Dukunganmu sangat berarti untuk pengembangan game ini!
              </p>
              
              {/* Tempat Gambar QRIS */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square mb-6 relative overflow-hidden group">
                {/* Nanti kamu bisa ganti kode di bawah ini dengan gambar QRIS aslimu.
                  Contoh: <img src="/images/qris.jpg" alt="QRIS" className="w-full h-full object-contain" />
                */}
                <span className="text-6xl mb-3 drop-shadow-sm">📱</span>
                <span className="text-sm font-black text-slate-400 text-center uppercase tracking-widest">
                  Ganti Dengan<br/>Gambar QRIS
                </span>
              </div>

              <button 
                onClick={handleCloseDonation} 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-black py-4 rounded-xl text-sm tracking-widest shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-none transition-all uppercase"
              >
                Tutup & Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- TOAST TERIMA KASIH (Notifikasi melayang) --- */}
      {showThankYou && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-slide-up w-full px-4 max-w-md pointer-events-none">
          <div className="bg-green-500 text-white px-5 py-4 rounded-2xl shadow-xl shadow-green-500/30 flex items-center gap-3 border-2 border-green-400">
            <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
              <span className="text-xl block">✨</span>
            </div>
            <p className="text-sm font-bold leading-tight">
              Terima kasih banyak telah berpartisipasi dalam pengembangan game ini!
            </p>
          </div>
        </div>
      )}
    </>
  );
}