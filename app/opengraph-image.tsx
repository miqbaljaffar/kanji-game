import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "KanjiMocha — Belajar Kanji & Bunpou Bahasa Jepang";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #e8f4fd 0%, #f0fdf4 50%, #fefce8 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circle top-left */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,200,0,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Background circle bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,204,2,0.3) 0%, rgba(28,176,246,0.2) 50%, transparent 70%)",
          }}
        />

        {/* Flag icon */}
        <div style={{ fontSize: 96, marginBottom: 24 }}>🎌</div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(135deg, #58cc02, #1cb0f6, #ce82ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          KanjiMocha
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#555",
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          Belajar Kanji & Bunpou Bahasa Jepang
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "JLPT N5", bg: "#d7ffb8", border: "#58cc02", color: "#2a7000" },
            { label: "JLPT N4", bg: "#ddf4ff", border: "#1cb0f6", color: "#0c6b9e" },
            { label: "JLPT N3", bg: "#f3e8ff", border: "#a855f7", color: "#6b21a8" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                background: badge.bg,
                border: `2px solid ${badge.border}`,
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 20,
                fontWeight: 800,
                color: badge.color,
              }}
            >
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
