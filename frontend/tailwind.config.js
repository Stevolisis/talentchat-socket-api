/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#111010',
        bgSecondary:'#242020',
        bgTertiary:'#3d3434',
        txtPrimary:'#ffffff',
        txtSecondary:'#f3eeee',
        txtTertiary:'#e6e4e4',
      },
      screens:{

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
