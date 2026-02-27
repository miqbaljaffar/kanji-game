import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Jika komponen Anda ada di root folder (bukan src), gunakan ini:
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
      }
    },
  },
  plugins: [],
};
export default config;