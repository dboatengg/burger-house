/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      alfa: ["Alfa Slab One", "cursive"],
      bebas: ["Bebas Neue", "cursive"],
    },
    screens: {
      petite: { max: "340px" },
      mini: { max: "365px" },
      pocket: { max: "400px" },
      compact: { max: "480px" },
      portable: { max: "530px" },
      handheld: { max: "550px" },
      midsize: { max: "660px" },
      standard: { max: "700px" },
      desktop: { max: "768px" },
      widescreen: { max: "900px" },
      ultrawide: { max: "1030px" },
      jumbo: { max: "1080px" },
      colossal: { max: "1100px" },
    },
    extend: {},
  },
  plugins: [],
};
