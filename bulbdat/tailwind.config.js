/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: '#abd1c6',
        darkGreen: '#004643',
        textWhite: '#cacaca',
        textDark: '#0f3433',
        bgBlack: '#001e1d',
        bgYellow: '#f9bc60',
        bgYellowDark: '#d3973d',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase}) {
      addBase({
        'body': { 
          fontFamily: ['Helvetica', 'sans-serif', 'Arial'],
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
          boxSizing: 'border-box',
          backgroundColor: '#abd1c6',
          color: '#001e1d',
         },
      })
    }),
  ],
}