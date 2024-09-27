import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "##262523", // 밝은 버전
          origin: "#121212", // 기본 색상
          dark: "#000000", // 어두운 버전
        },
        foreground: "var(--foreground)",
        primary: {
          100: "#6ee7b7",
          200: "#a7f3d0",
          300: "#34d399",
        },
        sub: {
          100: "#ef4444",
          200: "#fee2e2",
          300: "#fecaca",
        },
      },
      fontFamily: {
        shilla: ["Shilla_CultureB-Bold", "sans-serif"],
        suback: ["RixXladywatermelonR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
