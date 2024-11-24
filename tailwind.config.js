/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        e1: "#0D0C0C",
        e2: "#DD2020",
        e3: "#A5A2A2",
        e4: "#E5E5E5",
        e5: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],

      },
    },
  },
  plugins: [],
}

