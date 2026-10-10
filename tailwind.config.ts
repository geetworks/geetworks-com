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
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#4b5563",
          mute: "#9ca3af",
        },
        paper: {
          DEFAULT: "#ffffff",
          soft: "#f8f9fa",
          deep: "#f1f3f5",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px -12px rgba(16, 24, 40, 0.12)",
        "card-hover":
          "0 2px 4px rgba(16, 24, 40, 0.05), 0 20px 44px -16px rgba(79, 70, 229, 0.25)",
        glow: "0 0 40px -8px rgba(99, 102, 241, 0.45)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        "float-slower": "floatSlow 13s ease-in-out infinite reverse",
        "spin-slow": "spin 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
