/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        F2E8DF: "#F2E8DF",
      },
      gradientColorStops: {
        "custom-dark": "#402B18",
        "custom-light": "#FFFFF0",
      },
    },
  },
  plugins: [],
};
