"use client";
import { useEffect, useRef } from "react";

/* ── Awan deterministik ── */
const CLOUDS = Array.from({ length: 8 }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  const x    = ((seed * 1664525 + 1013904223) >>> 0) % 8500 / 100;
  const y    = ((seed * 22695477 + 1)         >>> 0) % 3500 / 100;
  const size = 60 + (i % 4) * 28;
  const delay = `${(i * 0.7) % 4}s`;
  const dur   = `${14 + (i % 5) * 3}s`;
  return { x, y, size, delay, dur };
});

/* ── Sparkle glitter ── */
const SPARKLES = Array.from({ length: 18 }, (_, i) => {
  const seed  = (i * 3267000013) >>> 0;
  const x     = ((seed * 1664525 + 1013904223) >>> 0) % 9500 / 100;
  const y     = ((seed * 22695477 + 1)         >>> 0) % 7000 / 100;
  const color = ["#ffc800", "#58cc02", "#1cb0f6", "#ce82ff"][i % 4];
  const delay = `${(i * 0.22) % 3}s`;
  return { x, y, color, delay };
});

/* ── Partikel mengambang ── */
const PARTICLES = [
  { t: "62%", l: "10%", d: "0s",   emoji: "⭐" },
  { t: "72%", l: "38%", d: "1.2s", emoji: "🌸" },
  { t: "58%", l: "62%", d: "0.6s", emoji: "✨" },
  { t: "78%", l: "82%", d: "1.8s", emoji: "🌟" },
  { t: "50%", l: "92%", d: "0.9s", emoji: "💛" },
];

export function GameBackground() {
  const bgRef     = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  /* Parallax ringan saat mouse bergerak — desktop only */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const dx = (e.clientX / innerWidth  - 0.5) * 10;
      const dy = (e.clientY / innerHeight - 0.5) * 6;
      if (cloudsRef.current) {
        cloudsRef.current.style.transform = `translate(${dx * 0.5}px, ${dy * 0.4}px)`;
      }
      if (bgRef.current) {
        const els = bgRef.current.querySelectorAll<HTMLElement>("[data-parallax]");
        els.forEach((el) => {
          const depth = parseFloat(el.dataset.parallax ?? "1");
          el.style.transform = `translate(${dx * depth}px, ${dy * depth * 0.5}px)`;
        });
      }
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    /* aria-hidden: seluruh background adalah dekoratif murni */
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      role="presentation"
      style={{
        background: "linear-gradient(180deg, #e8f4fd 0%, #f0fdf4 45%, #fefce8 100%)",
      }}
    >
      {/* Gradien lingkaran matahari */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #ffc800 0%, #ff9600 40%, transparent 70%)" }}
        data-parallax="0.2"
      />

      {/* Lingkaran dekorasi kanan-bawah */}
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #58cc02 0%, #1cb0f6 50%, transparent 70%)" }}
        data-parallax="0.15"
      />

      {/* Awan layer */}
      <div ref={cloudsRef} className="absolute inset-0 transition-transform duration-150 ease-out">
        {CLOUDS.map((c, i) => (
          <div
            key={i}
            className="absolute opacity-80"
            style={{
              left: `${c.x}%`,
              top:  `${c.y}%`,
              width:  c.size,
              height: c.size * 0.55,
              animationDelay: c.delay,
              animation: `cloudDrift ${c.dur} ease-in-out infinite alternate`,
            }}
          >
            <CloudShape size={c.size} index={i} />
          </div>
        ))}
      </div>

      {/* Sparkle bintang */}
      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="absolute animate-twinkle-slow"
          style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: s.delay }}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
              fill={s.color}
              opacity="0.85"
            />
          </svg>
        </div>
      ))}

      {/* Partikel emoji melayang */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute text-xl sm:text-2xl select-none"
          style={{
            top: p.t,
            left: p.l,
            animation: `floatPixel 4s ease-in-out ${p.d} infinite alternate`,
            opacity: 0.35,
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Bukit hijau bawah */}
      <div className="absolute bottom-0 left-0 right-0" data-parallax="0.1">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          <ellipse cx="200"  cy="180" rx="320" ry="100" fill="#d7ffb8" opacity="0.7" />
          <ellipse cx="700"  cy="180" rx="380" ry="110" fill="#d7ffb8" opacity="0.7" />
          <ellipse cx="1250" cy="180" rx="280" ry="95"  fill="#d7ffb8" opacity="0.7" />
          <ellipse cx="350"  cy="190" rx="300" ry="95"  fill="#b5f562" opacity="0.55" />
          <ellipse cx="950"  cy="200" rx="420" ry="110" fill="#b5f562" opacity="0.55" />
          <ellipse cx="1400" cy="195" rx="200" ry="80"  fill="#b5f562" opacity="0.55" />
          <rect x="0" y="165" width="1440" height="15" fill="#a3e635" opacity="0.4" />
        </svg>
      </div>

      {/* Pohon pixel kiri */}
      <div className="absolute bottom-[3.5%] left-4 sm:left-10 opacity-60" data-parallax="0.18">
        <PixelTree color="#22c55e" trunkColor="#a16207" height={80} />
      </div>

      {/* Pohon pixel kanan */}
      <div className="absolute bottom-[3%] right-6 sm:right-14 opacity-55" data-parallax="0.25">
        <PixelTree color="#4ade80" trunkColor="#92400e" height={60} />
      </div>

      {/* Rumah kecil */}
      <div className="absolute bottom-[4%] right-[18%] sm:right-[22%] opacity-50" data-parallax="0.12">
        <PixelHouse />
      </div>

      {/* Overlay atas */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(232,244,253,0.4) 0%, transparent 100%)" }}
      />
    </div>
  );
}

function CloudShape({ size, index }: { size: number; index: number }) {
  const color = index % 3 === 0 ? "#ffffff" : index % 3 === 1 ? "#f0fdf4" : "#fefce8";
  const s = size;
  return (
    <svg viewBox="0 0 100 60" width={s} height={s * 0.6} fill="none" aria-hidden="true">
      <ellipse cx="50" cy="42" rx="48" ry="18" fill={color} opacity="0.95" />
      <ellipse cx="30" cy="32" rx="24" ry="20" fill={color} opacity="0.95" />
      <ellipse cx="60" cy="28" rx="28" ry="22" fill={color} opacity="0.95" />
      <ellipse cx="78" cy="36" rx="20" ry="16" fill={color} opacity="0.95" />
    </svg>
  );
}

function PixelTree({ color, trunkColor, height }: { color: string; trunkColor: string; height: number }) {
  const w = Math.round(height * 0.65);
  const h = height;
  return (
    <svg width={w} height={h} viewBox="0 0 40 60" fill="none" aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      <rect x="8"  y="0"  width="24" height="20" fill={color} />
      <rect x="4"  y="12" width="32" height="18" fill={color} />
      <rect x="0"  y="22" width="40" height="16" fill={color} />
      <rect x="12" y="3"  width="8"  height="6"  fill="rgba(255,255,255,0.25)" />
      <rect x="14" y="36" width="12" height="24" fill={trunkColor} />
    </svg>
  );
}

function PixelHouse() {
  return (
    <svg width="56" height="52" viewBox="0 0 56 52" fill="none" aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      <rect x="6"  y="22" width="44" height="30" fill="#fef9c3" />
      <rect x="6"  y="22" width="44" height="2"  fill="#fde047" />
      <polygon points="0,24 28,2 56,24" fill="#f97316" />
      <polygon points="4,24 28,6 52,24" fill="#fb923c" />
      <rect x="20" y="36" width="16" height="16" fill="#a16207" />
      <rect x="24" y="38" width="3"  height="3"  fill="#fbbf24" />
      <rect x="8"  y="28" width="10" height="8"  fill="#bfdbfe" />
      <rect x="12" y="28" width="2"  height="8"  fill="#93c5fd" />
      <rect x="8"  y="32" width="10" height="2"  fill="#93c5fd" />
      <rect x="38" y="28" width="10" height="8"  fill="#bfdbfe" />
      <rect x="42" y="28" width="2"  height="8"  fill="#93c5fd" />
      <rect x="38" y="32" width="10" height="2"  fill="#93c5fd" />
      <rect x="36" y="4"  width="6"  height="10" fill="#b45309" />
      <rect x="34" y="3"  width="10" height="3"  fill="#92400e" />
      <ellipse cx="39" cy="2" rx="4" ry="3" fill="white" opacity="0.6" />
    </svg>
  );
}
