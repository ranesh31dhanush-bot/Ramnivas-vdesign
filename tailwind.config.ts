import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F3ED",
          50: "#FDFBF8",
          100: "#F7F3ED",
          200: "#EDE5D8",
        },
        navy: {
          DEFAULT: "#1C2B3A",
          50: "#E8ECF0",
          100: "#C5D0DA",
          800: "#1C2B3A",
          900: "#121C27",
        },
        charcoal: {
          DEFAULT: "#2D3748",
          700: "#2D3748",
          800: "#1A202C",
        },
        accent: {
          DEFAULT: "#C87941",
          light: "#D4956A",
          dark: "#A8622E",
          gold: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "5rem",
        "section-lg": "7.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(28, 43, 58, 0.08)",
        card: "0 8px 32px rgba(28, 43, 58, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
