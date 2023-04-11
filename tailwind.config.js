/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#050505",
        "light-black": "#1F1F1F",
        "darker-grey": "#2D2D2D",
        "dark-grey": "#3A3A3A",
        grey: "#757575",
        "light-grey": "#E9E9E9",
        "lighter-grey": "#F4F4F4",
        white: "#FFFFFF",
        purple: "#A445ED",
        red: "#FF5252",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
    },
    boxShadow: {
      dropdownLight: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      dropdownDark: "#A445ED 0px 5px 15px",
    },
  },
  plugins: [],
};
