/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0D689E",
        "sub-1": "#84B4D4",
        "sub-2": "#BAD5E8",
        "gray-1": "#e6e6e6",
        "gray-2": "#8a8a8a",
        "red-1": "#fcc6c5",
        "red-2": "#ff5a57",
      },
      boxShadow: {
        md: "0 2px 4px rgb(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 0.1)",
        lg: "0 4px 12px rgb(0, 0, 0, 0.1), 0 2px 4px rgb(0, 0, 0, 0.1)",
        "md-color": "0 2px 4px #0D689E20, 0 1px 2px #0D689E20",
        "lg-color": "0 4px 12px #0D689E20, 0 2px 4px #0D689E20",
      },
    },
  },
  plugins: [],
};
