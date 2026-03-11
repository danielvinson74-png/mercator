/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f4f425",
        "marine": "#0047AB",
        "marine-blue": "#0a192f",
        "background-light": "#f8f8f5",
        "background-dark": "#050c1a",
        "card-bg": "#000d26",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "sans": ["Noto Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
