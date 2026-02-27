import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        jp: ["var(--font-jp)"],
      },
      colors: {
        sakura: {
          50: "#fff0f5",
          100: "#ffe0ec",
          200: "#ffb3cc",
          300: "#ff80aa",
          400: "#ff4d88",
          500: "#ff1a66",
          600: "#cc0044",
          700: "#990033",
          800: "#660022",
          900: "#330011",
        },
        neon: {
          pink: "#ff2d78",
          cyan: "#00f5ff",
          yellow: "#ffee00",
          green: "#00ff88",
          purple: "#b300ff",
          orange: "#ff6600",
        },
        dark: {
          900: "#0a0010",
          800: "#100020",
          700: "#15002e",
          600: "#1e0040",
        },
      },
      animation: {
        "float-up": "floatUp 0.6s ease-out forwards",
        "shake": "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-in": "bounceIn 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "zoom-in": "zoomIn 0.3s ease-out forwards",
        "particle": "particle 3s ease-in-out infinite",
        "sakura-fall": "sakuraFall linear infinite",
        "glow-pulse": "glowPulse 1.5s ease-in-out infinite",
        "timer-shrink": "timerShrink linear forwards",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-60px)", opacity: "0" },
        },
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 45, 120, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 45, 120, 0.9), 0 0 80px rgba(255, 45, 120, 0.3)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        particle: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "1" },
        },
        sakuraFall: {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { textShadow: "0 0 10px currentColor, 0 0 20px currentColor" },
          "50%": { textShadow: "0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor" },
        },
        timerShrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
