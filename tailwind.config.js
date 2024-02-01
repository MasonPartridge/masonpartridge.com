/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xm: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik Iso", "cursive"],
        tech: ["Share Tech Mono", "monospace"],
        handjet: ["Handjet", "cursive"],
      },
      colors: {
        primary: "#44475F",
        secondary: "#2A1E1E", 
        accent: "#76769E",
        background: "#1E1515",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
