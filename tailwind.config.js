/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        hijau: "#bada55",
        tema: "rgb(var(--warna-tema) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
