/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /text-(left|center|right)/ }
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'articles': 'minmax(280px, 24%) 1fr'
      },
      padding: {
        '56.25': '56.25%',
        '75': '75%'
      }
    },
  },
  plugins: [],
}
