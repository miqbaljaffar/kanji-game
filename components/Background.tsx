"use client";
import { useEffect, useRef } from "react";

/* Bintang deterministik — no hydration mismatch */
const STARS = Array.from({ length: 60 }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  const x    = ((seed * 1664525 + 1013904223) >>> 0) % 10000 / 100;
  const y    = ((seed * 22695477  + 1)        >>> 0) % 8000  / 100;
  const size = i % 3 === 0 ? "w-1.5 h-1.5" : i % 3 === 1 ? "w-1 h-1" : "w-0.5 h-0.5";
  const anim = i % 3 === 0 ? "animate-twinkle" : i % 3 === 1 ? "animate-twinkle-slow" : "animate-twinkle-fast";
  const delay = `${(i * 0.13) % 3}s`;
  return { x, y, size, anim, delay };
});

/* Glitter besar */
const GLITTERS = [
  { t: "15%", l: "20%", s: 20, d: "0.5s"  },
  { t: "30%", l: "70%", s: 16, d: "1.0s"  },
  { t: "10%", l: "45%", s: 14, d: "1.8s"  },
  { t: "45%", l: "88%", s: 18, d: "0.3s"  },
];

/* Partikel melayang */
const FLOAT_PARTICLES = [
  { t: "60%", l: "15%", d: "0s"   },
  { t: "70%", l: "40%", d: "1.5s" },
  { t: "55%", l: "65%", d: "0.8s" },
  { t: "75%", l: "85%", d: "2.1s" },
];

export function GameBackground() {
  /* Parallax ringan pada mouse move (desktop only) */
  const bgRef    = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const dx = (e.clientX / innerWidth  - 0.5) * 12;
      const dy = (e.clientY / innerHeight - 0.5) * 8;
      if (starsRef.current) {
        starsRef.current.style.transform = `translate(${dx * 0.6}px, ${dy * 0.6}px)`;
      }
      if (bgRef.current) {
        // Gerakkan kastil & gunung sedikit
        const castles = bgRef.current.querySelectorAll<HTMLElement>("[data-parallax]");
        castles.forEach((el) => {
          const depth = parseFloat(el.dataset.parallax ?? "1");
          el.style.transform = `translate(${dx * depth}px, ${dy * depth * 0.5}px)`;
        });
      }
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0a1e 0%, #1a0533 40%, #0d0720 100%)" }}
    >
      {/* ── Bintang layer (parallax) ── */}
      <div ref={starsRef} className="absolute inset-0 transition-transform duration-100 ease-out">
        {STARS.map((s, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white ${s.size} ${s.anim}`}
            style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: s.delay }}
          />
        ))}
      </div>

      {/* ── Bulan sabit ── */}
      <div className="absolute top-6 right-8 sm:top-10 sm:right-16" data-parallax="0.3">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20">
          <div
            className="absolute inset-0 rounded-full animate-glow-pulse"
            style={{
              background: "radial-gradient(circle at 35% 35%, #fef3c7, #fbbf24 60%, #d97706)",
              boxShadow: "0 0 24px 8px rgba(251,191,36,0.3)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "radial-gradient(circle at 65% 35%, #0f0a1e 30%, transparent 70%)" }}
          />
        </div>
      </div>

      {/* ── Glitter besar ── */}
      {GLITTERS.map((g, i) => (
        <div key={i} className="absolute animate-twinkle-slow"
          style={{ top: g.t, left: g.l, animationDelay: g.d }}>
          <svg width={g.s} height={g.s} viewBox="0 0 20 20" fill="none">
            <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
              fill="#fbbf24" opacity="0.9" />
          </svg>
        </div>
      ))}

      {/* ── Silhouette pegunungan ── */}
      <div className="absolute bottom-0 left-0 right-0" data-parallax="0.15">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full" style={{ display: "block" }}>
          <polygon
            points="0,220 0,140 120,60 240,130 360,50 480,120 600,40 720,110 840,55 960,115 1080,45 1200,110 1320,65 1440,120 1440,220"
            fill="#1a0533"
          />
          <polygon
            points="0,220 0,180 100,110 200,165 320,90 440,155 560,100 680,160 800,105 920,158 1040,95 1160,155 1280,108 1440,160 1440,220"
            fill="#0f0a1e"
          />
          <rect x="0" y="195" width="1440" height="25" fill="#07030f" />
        </svg>
      </div>

      {/* ── Castle kiri (dengan torch) ── */}
      <div className="absolute bottom-[3.5%] left-4 sm:left-10 opacity-70" data-parallax="0.2">
        <svg width="72" height="96" viewBox="0 0 72 96" fill="none"
          style={{ imageRendering: "pixelated" }}>
          {/* Menara kiri */}
          <rect x="0"  y="36" width="14" height="60" fill="#2d1b4e" />
          <rect x="0"  y="26" width="5"  height="10" fill="#2d1b4e" />
          <rect x="5"  y="26" width="4"  height="5"  fill="#0f0a1e" />
          <rect x="9"  y="26" width="5"  height="10" fill="#2d1b4e" />
          {/* Badan */}
          <rect x="14" y="52" width="44" height="44" fill="#2d1b4e" />
          <rect x="22" y="70" width="12" height="26" fill="#0f0a1e" />
          {/* Jendela terang */}
          <rect x="36" y="62" width="8"  height="10" fill="#fbbf24" opacity="0.6" />
          {/* Menara kanan */}
          <rect x="58" y="36" width="14" height="60" fill="#2d1b4e" />
          <rect x="58" y="26" width="5"  height="10" fill="#2d1b4e" />
          <rect x="63" y="26" width="4"  height="5"  fill="#0f0a1e" />
          <rect x="67" y="26" width="5"  height="10" fill="#2d1b4e" />
          {/* Flag */}
          <rect x="5"  y="12" width="2"  height="16" fill="#7c3aed" />
          <polygon points="7,12 17,17 7,22" fill="#fbbf24" />
        </svg>

        {/* Torch kiri */}
        <div className="absolute" style={{ bottom: "58px", left: "13px" }}>
          <TorchFlame delay="0s" />
        </div>
        {/* Torch kanan */}
        <div className="absolute" style={{ bottom: "58px", left: "57px" }}>
          <TorchFlame delay="0.4s" />
        </div>
      </div>

      {/* ── Castle kanan (kecil / jauh) ── */}
      <div className="absolute bottom-[3.5%] right-4 sm:right-14 opacity-45" data-parallax="0.1">
        <svg width="46" height="62" viewBox="0 0 46 62" fill="none"
          style={{ imageRendering: "pixelated" }}>
          <rect x="0"  y="24" width="10" height="38" fill="#2d1b4e" />
          <rect x="0"  y="17" width="3"  height="7"  fill="#2d1b4e" />
          <rect x="3"  y="17" width="4"  height="4"  fill="#0f0a1e" />
          <rect x="7"  y="17" width="3"  height="7"  fill="#2d1b4e" />
          <rect x="10" y="34" width="26" height="28" fill="#2d1b4e" />
          <rect x="15" y="44" width="7"  height="18" fill="#0f0a1e" />
          <rect x="23" y="40" width="5"  height="7"  fill="#fbbf24" opacity="0.5" />
          <rect x="36" y="24" width="10" height="38" fill="#2d1b4e" />
          <rect x="36" y="17" width="3"  height="7"  fill="#2d1b4e" />
          <rect x="39" y="17" width="4"  height="4"  fill="#0f0a1e" />
          <rect x="43" y="17" width="3"  height="7"  fill="#2d1b4e" />
          <rect x="4"  y="7"  width="2"  height="12" fill="#7c3aed" />
          <polygon points="6,7 13,11 6,15" fill="#fbbf24" />
        </svg>

        {/* Torch kastil kanan */}
        <div className="absolute" style={{ bottom: "36px", left: "9px" }}>
          <TorchFlame delay="0.9s" size="sm" />
        </div>
      </div>

      {/* ── Partikel melayang ── */}
      {FLOAT_PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400 opacity-40 animate-float-pixel"
          style={{ top: p.t, left: p.l, animationDelay: p.d, borderRadius: "1px" }}
        />
      ))}

      {/* ── Kabut bawah ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, rgba(15,10,30,0.9) 0%, rgba(15,10,30,0.4) 50%, transparent 100%)" }}
      />
    </div>
  );
}

/* ── Komponen torch flame kecil ── */
function TorchFlame({ delay, size = "md" }: { delay: string; size?: "sm" | "md" }) {
  const w = size === "sm" ? 6 : 8;
  const h = size === "sm" ? 9 : 12;

  return (
    <div
      className="rpg-torch-glow"
      style={{
        width: w,
        height: h,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Nyala api */}
      <div
        style={{
          width: w,
          height: h * 0.7,
          borderRadius: "50% 50% 20% 20% / 60% 60% 40% 40%",
          background: "linear-gradient(180deg, #fef3c7 0%, #fbbf24 40%, #f97316 80%, #dc2626 100%)",
          animation: `torchFlicker ${1.6 + parseFloat(delay) * 0.2}s ease-in-out ${delay} infinite alternate`,
          transformOrigin: "bottom center",
        }}
      />
      {/* Batang */}
      <div
        style={{
          width: Math.max(2, w * 0.35),
          height: h * 0.35,
          background: "#78350f",
          borderRadius: "1px",
        }}
      />
    </div>
  );
}
