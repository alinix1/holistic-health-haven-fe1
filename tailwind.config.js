/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
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
    },
  },
  safelist: [
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-right_1s_ease-in-out]",
  ],
  plugins: [require("tw-elements/plugin.cjs")],
};
