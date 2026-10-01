import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        jp: ["var(--font-jp)"],
      },
      colors: {
        /* Duolingo-inspired palette — usable as Tailwind utilities */
        duo: {
          bg:           "#f7f7f7",
          surface:      "#ffffff",
          border:       "#e5e7eb",
          green:        "#58cc02",
          "green-dark": "#46a302",
          "green-pale": "#d7ffb8",
          blue:         "#1cb0f6",
          "blue-dark":  "#0490c8",
          "blue-pale":  "#ddf4ff",
          yellow:       "#ffc800",
          "yellow-dark":"#c49800",
          "yellow-pale":"#fff8d6",
          red:          "#ff4b4b",
          "red-dark":   "#cc0000",
          "red-pale":   "#ffe0e0",
          purple:       "#ce82ff",
          "purple-dark":"#9c3fbf",
          "purple-pale":"#f5e6ff",
          orange:       "#ff9600",
          text:         "#3c3c3c",
          "text-soft":  "#777777",
          "text-muted": "#afafaf",
        },
      },
      keyframes: {
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        slideDown: {
          "0%":   { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",     opacity: "1" },
        },
        fadeUp: {
          "0%":   { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0) rotate(0)" },
          "25%":      { transform: "translateX(-6px) rotate(-6deg)" },
          "75%":      { transform: "translateX(6px) rotate(6deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        bouncePop: {
          "0%":   { transform: "scale(0.8)", opacity: "0" },
          "60%":  { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)",   opacity: "1" },
        },
        floatScore: {
          "0%":   { transform: "translateY(0) scale(0.8)",    opacity: "0" },
          "20%":  { transform: "translateY(-10px) scale(1.2)", opacity: "1" },
          "100%": { transform: "translateY(-50px) scale(1)",   opacity: "0" },
        },
        cloudDrift: {
          "0%":   { transform: "translateX(0px) translateY(0px)" },
          "50%":  { transform: "translateX(15px) translateY(-5px)" },
          "100%": { transform: "translateX(-8px) translateY(4px)" },
        },
      },
      animation: {
        "slide-up":    "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down":  "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up":     "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "shake":       "shake 0.4s ease-in-out",
        "bounce-soft": "bounceSoft 3s ease-in-out infinite",
        "bounce-pop":  "bouncePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "float-score": "floatScore 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "cloud-drift": "cloudDrift 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
