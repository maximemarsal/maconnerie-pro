/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513",
          dark: "#6B3410",
        },
        secondary: {
          DEFAULT: "#D4A574",
          light: "#E8C9A8",
        },
        accent: {
          DEFAULT: "#2F4F4F",
          light: "#4A7070",
        },
        background: {
          DEFAULT: "#FAFAF8",
          alt: "#F5F3F0",
        },
        foreground: {
          DEFAULT: "#1A1A1A",
          light: "#4A4A4A",
        },
        border: "#E5E2DD",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
