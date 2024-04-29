/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-400": ["SF-400"],
        "sf-500": ["SF-500"],
        "sf-600": ["SF-600"],
        "sf-700": ["SF-700"],
      },
      colors: {
        "dark-grey": "#4D4D4D",
        "light-grey2": "#E1E4E8",
        "lighter-grey": "#F8F8F8",
        grey: "#5A5A65",
        rose: "#FFDCE0",
        green: "#CBDFD8",
        lavender: "#F0E7F6",
        black: "#212121",
      },
    },
  },
  plugins: [],
};
