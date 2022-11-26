/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tokyo': "linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.3)), url('/public/tokyo-night.jpg')",
      }
    },
  },
  plugins: [],
}
