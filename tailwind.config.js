/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0D689E",
        sub1: "#84B4D4",
        sub2: "#BAD5E8",
        "gray-10": "#e6e6e6",
        "gray-20": "#8a8a8a",
      },
    },

    // extend: {},
  },
  plugins: [],
};
