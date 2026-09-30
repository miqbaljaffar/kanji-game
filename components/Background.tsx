"use client";

/* Bintang dihasilkan secara deterministik agar tidak hydration mismatch */
const STARS = Array.from({ length: 60 }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  const x   = ((seed * 1664525 + 1013904223) >>> 0) % 10000 / 100;
  const y   = ((seed * 22695477  + 1)        >>> 0) % 8000  / 100;
  const size= (i % 3 === 0) ? "w-1.5 h-1.5" : (i % 3 === 1) ? "w-1 h-1" : "w-0.5 h-0.5";
  const anim= (i % 3 === 0)
    ? "animate-twinkle"
    : (i % 3 === 1)
    ? "animate-twinkle-slow"
    : "animate-twinkle-fast";
  const delay = `${(i * 0.13) % 3}s`;
  return { x, y, size, anim, delay };
});

/* Posisi piksel awan (pixel block) */
const CLOUDS = [
  { top: "12%",  left: "8%",  w: 64,  delay: "0s"    },
  { top: "8%",   left: "55%", w: 80,  delay: "1.2s"  },
  { top: "22%",  left: "78%", w: 48,  delay: "0.6s"  },
];

export function GameBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0a1e 0%, #1a0533 40%, #0d0720 100%)" }}
    >
      {/* ── Bintang ── */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white ${s.size} ${s.anim}`}
          style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: s.delay }}
        />
      ))}

      {/* ── Bulan sabit (pixel art style) ── */}
      <div className="absolute top-6 right-8 sm:top-10 sm:right-16">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20">
          {/* Lingkaran bulan */}
          <div
            className="absolute inset-0 rounded-full animate-glow-pulse"
            style={{
              background: "radial-gradient(circle at 35% 35%, #fef3c7, #fbbf24 60%, #d97706)",
              boxShadow: "0 0 24px 8px rgba(251,191,36,0.3)",
            }}
          />
          {/* Shadow bulan sabit */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 65% 35%, #0f0a1e 30%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* ── Bintang besar (glitter) ── */}
      {[
        { t: "15%", l: "20%",  s: 20, d: "0.5s"  },
        { t: "30%", l: "70%",  s: 16, d: "1.0s"  },
        { t: "10%", l: "45%",  s: 14, d: "1.8s"  },
        { t: "45%", l: "88%",  s: 18, d: "0.3s"  },
      ].map((g, i) => (
        <div
          key={i}
          className="absolute animate-twinkle-slow"
          style={{ top: g.t, left: g.l, animationDelay: g.d }}
        >
          <svg width={g.s} height={g.s} viewBox="0 0 20 20" fill="none">
            <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
              fill="#fbbf24" opacity="0.9" />
          </svg>
        </div>
      ))}

      {/* ── Silhouette pegunungan (pixel style) ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: "block" }}
        >
          {/* Gunung belakang — ungu gelap */}
          <polygon
            points="0,220 0,140 120,60 240,130 360,50 480,120 600,40 720,110 840,55 960,115 1080,45 1200,110 1320,65 1440,120 1440,220"
            fill="#1a0533"
          />
          {/* Gunung depan — lebih gelap */}
          <polygon
            points="0,220 0,180 100,110 200,165 320,90 440,155 560,100 680,160 800,105 920,158 1040,95 1160,155 1280,108 1440,160 1440,220"
            fill="#0f0a1e"
          />
          {/* Ground flat hitam */}
          <rect x="0" y="195" width="1440" height="25" fill="#07030f" />
        </svg>
      </div>

      {/* ── Castle silhouette (pixel blocks) kiri ── */}
      <div className="absolute bottom-[3.5%] left-4 sm:left-10 opacity-60">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none"
          style={{ imageRendering: "pixelated" }}>
          {/* Menara kiri */}
          <rect x="0"  y="30" width="12" height="50" fill="#2d1b4e" />
          <rect x="0"  y="22" width="4"  height="8"  fill="#2d1b4e" />
          <rect x="4"  y="22" width="4"  height="4"  fill="#0f0a1e" />
          <rect x="8"  y="22" width="4"  height="8"  fill="#2d1b4e" />
          {/* Badan kastil */}
          <rect x="12" y="44" width="36" height="36" fill="#2d1b4e" />
          <rect x="18" y="58" width="10" height="22" fill="#0f0a1e" />
          {/* Jendela */}
          <rect x="30" y="52" width="6"  height="8"  fill="#fbbf24" opacity="0.5" />
          {/* Menara kanan */}
          <rect x="48" y="30" width="12" height="50" fill="#2d1b4e" />
          <rect x="48" y="22" width="4"  height="8"  fill="#2d1b4e" />
          <rect x="52" y="22" width="4"  height="4"  fill="#0f0a1e" />
          <rect x="56" y="22" width="4"  height="8"  fill="#2d1b4e" />
          {/* Flag */}
          <rect x="5"  y="10" width="2"  height="16" fill="#7c3aed" />
          <polygon points="7,10 15,14 7,18" fill="#fbbf24" />
        </svg>
      </div>

      {/* ── Castle silhouette kanan (lebih kecil / jauh) ── */}
      <div className="absolute bottom-[3.5%] right-4 sm:right-14 opacity-40">
        <svg width="38" height="52" viewBox="0 0 38 52" fill="none"
          style={{ imageRendering: "pixelated" }}>
          <rect x="0"  y="20" width="8"  height="32" fill="#2d1b4e" />
          <rect x="0"  y="14" width="3"  height="6"  fill="#2d1b4e" />
          <rect x="3"  y="14" width="2"  height="3"  fill="#0f0a1e" />
          <rect x="5"  y="14" width="3"  height="6"  fill="#2d1b4e" />
          <rect x="8"  y="28" width="22" height="24" fill="#2d1b4e" />
          <rect x="12" y="36" width="6"  height="16" fill="#0f0a1e" />
          <rect x="19" y="32" width="4"  height="6"  fill="#fbbf24" opacity="0.4" />
          <rect x="30" y="20" width="8"  height="32" fill="#2d1b4e" />
          <rect x="30" y="14" width="3"  height="6"  fill="#2d1b4e" />
          <rect x="33" y="14" width="2"  height="3"  fill="#0f0a1e" />
          <rect x="35" y="14" width="3"  height="6"  fill="#2d1b4e" />
          <rect x="3"  y="6"  width="2"  height="10" fill="#7c3aed" />
          <polygon points="5,6 10,9 5,12" fill="#fbbf24" />
        </svg>
      </div>

      {/* ── Partikel berkilau (floating pixels) ── */}
      {[
        { t: "60%", l: "15%", d: "0s"   },
        { t: "70%", l: "40%", d: "1.5s" },
        { t: "55%", l: "65%", d: "0.8s" },
        { t: "75%", l: "85%", d: "2.1s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400 opacity-40 animate-float-pixel"
          style={{ top: p.t, left: p.l, animationDelay: p.d, borderRadius: "1px" }}
        />
      ))}

      {/* ── Efek kabut bawah ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(15,10,30,0.9) 0%, rgba(15,10,30,0.4) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
