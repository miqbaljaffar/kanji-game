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
        dark: {
          900: "#07000d",
          800: "#12001f",
          700: "#1a002e",
        },
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '25%': { transform: 'translateX(-6px) rotate(-6deg)' },
          '75%': { transform: 'translateX(6px) rotate(6deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bouncePop: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        floatScore: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '20%': { transform: 'translateY(-10px) scale(1.2)', opacity: '1' },
          '100%': { transform: 'translateY(-50px) scale(1)', opacity: '0' },
        },
        floatCloud: {
          '0%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '100%': { transform: 'translateX(30px) translateY(-10px) scale(1.05)' },
        }
      },
      animation: {
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'shake': 'shake 0.4s ease-in-out',
        'bounce-soft': 'bounceSoft 3s ease-in-out infinite',
        'bounce-pop': 'bouncePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'float-score': 'floatScore 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-cloud': 'floatCloud 10s infinite alternate ease-in-out',
        'float-cloud-reverse': 'floatCloud 14s infinite alternate-reverse ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;