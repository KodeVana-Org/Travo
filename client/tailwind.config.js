/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'abril-fatface': ['Abril Fatface', 'cursive'],
          'comforter-brush': ['Comforter Brush', 'cursive'],
          'heebo': ['Heebo', 'sans-serif']
        },
        backgroundImage: {
        },
      },
    },
    plugins: [],
  }
}