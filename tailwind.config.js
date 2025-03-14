/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Inter"', "Quicksand", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "4-strong": "0 10px 30px rgba(0, 0, 0, 0.8)",
      },
      backgroundColor: {
        F2E8DF: "#F2E8DF",
      },
      gradientColorStops: {
        "custom-dark": "#402B18",
        "custom-light": "#FFFFF0",
      },
      screens: {
        custom: { min: "700px", max: "999px" },
      },
    },
  },
  safelist: [
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-right_1s_ease-in-out]",
    "animate-[fade-in-up_1s_ease-in-out]",
  ],
  plugins: [require("tw-elements/plugin.cjs")],
};
