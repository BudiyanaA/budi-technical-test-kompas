/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-semi-75': 'rgba(255, 255, 255, 0.75)'
      }
    },
  },
  plugins: [],
}
