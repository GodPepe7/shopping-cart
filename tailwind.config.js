/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/home-background.png')",
      },
      colors: {
        "theme-white": "#F7F8F7",
        "theme-black": "#0e110f",
      },
    },
  },
  plugins: [],
};
