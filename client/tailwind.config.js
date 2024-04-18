/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#0A192F',
        'primary': '#0e1630',
        'primary-200': '#1b2542f0',
        'primary-300': '#171f38',
        'primary-400': '#0a192fe0',
        // 'secondary': '#F97316',
        'secondary': '#01d293',
        'tertiary': '#54D6BB'
      }
    },
    screens: {
      'sm': {'max': '950px'},
      'md': {'max': '1400px'},
      'md2': {'max': '1200px'},
      'md3': {'max': '950px'},
      '1100': {'max': '1100px'},
      '700': {'max': '700px'},
      'mob': {'max': '500px'},
      // => @media (max-width: 639px) { ... }

       'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }

    }
  },
  plugins: [],
}