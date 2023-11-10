/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/imgs/home-background.png')",
        "shop-banner": "url(./src/assets/imgs/shop-banner.png)",
      },
      colors: {
        "theme-white": "#F7F8F7",
        "theme-black": "#0e110f",
      },
    },
  },
  plugins: [],
};
