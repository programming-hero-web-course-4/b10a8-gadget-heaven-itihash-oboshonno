/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primPink: '#9538E2',
        primBlack: '#0B0B0B',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

