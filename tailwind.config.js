/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "font-day": "rgb(0, 0, 0)",
        "font-night": "rgba(255, 255, 255, 0.9)",
        "day-progress": "rgb(151,159,184)",
        "day-bg": "rgb(232,238,247)",
        "night-progress": "rgb(189,189,206)",
        "night-bg": "rgb(42,42,69)",
      },
      screens: {
        phone: "550px",
        sm: "390px",
      },
      backgroundImage: {
        "radial-day-cv":
          "radial-gradient(450px at 0%, rgba(138, 179, 245, 1) 4%, rgba(245, 245, 205, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        "radial-night-cv":
          "radial-gradient(450px at 0%, rgba(142, 34, 57, 1) 0%, rgba(79, 35, 76, 1) 18%, rgba(30, 33, 101, 1) 39%, rgba(30, 33, 40, 1) 100%)",
        "radial-day-p":
          "radial-gradient(450px at top center, rgba(138, 179, 245, 1) 4%, rgba(245, 245, 205, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        "radial-night-p":
          "radial-gradient(450px at top center, rgba(142, 34, 57, 1) 0%, rgba(79, 35, 76, 1) 18%, rgba(30, 33, 101, 1) 39%, rgba(30, 33, 40, 1) 100%)",
      },
    },
  },
  plugins: [],
};
