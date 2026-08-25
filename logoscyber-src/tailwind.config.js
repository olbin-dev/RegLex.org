/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050B14',
          panel: '#0B1528',
          gold: '#C5A880',
          blue: '#1E3A8A',
          copper: '#C084FC', // 提案書の配色に合わせたアクセントカラーにする
        }
      }
    },
  },
  plugins: [],
}
