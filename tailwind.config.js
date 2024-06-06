/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "noise-texture": "url('/src/assets/bg.png')",
      },
      backgroundColor: {
        "custom-bg": "#505a61",
      },
    },
  },
  plugins: [],
};
