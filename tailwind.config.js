const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['media', '[data-mode="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
          "white": "#FFFFFF",
          "black": "#000000",
          "transparent": "transparent",
          
          "rose": "#D0867E",
          "orange": "#FE6738",
          "cinnabar": "#F84026",
          "platinium": "#DADDE0",
          "eerie": "#1D1E1F",
          "night": "#0C0C0C",
          "champagne": "#E9D9CF",
          "isabelline": "#F2EEEB",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'),
    require("tailwind-merge"),
    require("tailwindcss-animate"),
  ],
};
