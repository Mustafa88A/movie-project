/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        gg: "repeat(auto-full,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
