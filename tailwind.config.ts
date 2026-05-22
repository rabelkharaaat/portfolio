import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core dark palette (customize freely) ──
        base: "#0A0A0A",      // near-black background
        dark2: "#141414",     // secondary dark
        surface: "#1A1A1A",   // card / surface
        line: "#262626",      // subtle borders
        primary: "#FAFAFA",   // primary text
        secondary: "#A1A1A1", // secondary text
        muted: "#525252",     // muted text
        // ── Single accent: warm gold ──
        accent: "#D4A574",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      fontSize: {
        // Hero display sizes (clamped responsive)
        display: ["clamp(3.25rem, 8vw, 6.5rem)", { lineHeight: "0.96" }],
        "display-sm": ["clamp(2.75rem, 8vw, 5rem)", { lineHeight: "1" }],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
