/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#414833",
        secondary: "#a9b388",
        tertiary: "#8D765B",
        quaternary: "#f9ebc7",
        quinary: "#2e251a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #25190d",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
