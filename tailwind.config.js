/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        text_color: "#4B5563",
        blue: "#0EA5E9",
        border_color: "#E5E7EB",
        gray_bg: "#F8F8F8",
      },
      fontFamily: {
        poppins: " Poppins",
      },
    },
  },
  plugins: [],
};
