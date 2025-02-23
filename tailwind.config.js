/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",

  theme: {
    container: {
      center: true,
      padding: "0.8rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    fontFamily: {
      DanaBlack: ["DanaBlack"],
      DanaBold: ["DanaBold"],
      DanaLight: ['DanaLight'],
      DanaMedium: ['DanaMedium'],
      Morabba: ["Morabba"],

    },
    extend: {
      colors: {
        "Fizico-color1": "#0EA5E9",
        "Fizico-color2": "#f7c32e",
        "Fizico-color3": "#03c98e",
        "Fizico-color4": "#d6293e",
        "Fizico-bg": "#111827",
        "Fizico-bg-button-dark": "#2f343e7a",
        "Fizico-bg-button-white": "#7393d37a",
        "Fizico-red-button": "#d6293e1a",
        "Fizico-orange-button": "#f7c12e54",
        "Fizico-cover": "#00000097",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "::-webkit-scrollbar": {
          width: "8px",
          backgroundColor: "#374151",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#6b7280",
        },
        "@media (max-width: 768px)": {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },

      });
    },


  ],
};
