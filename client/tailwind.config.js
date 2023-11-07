/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#111010',
        bgSecondary:'#1d1b1b',
        bgTertiary:'#3d3434',
        txtPrimary:'#ffffff',
        txtSecondary:'#f3eeee',
        txtTertiary:'#e6e4e4',
        brPrimary:'#cbd5e1',
        brSecondary:'#94a3b8',
        brTertiary:'#475569',
      },
      screens:{

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
