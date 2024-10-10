/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Clor Palette
        'primary1': '#eff8ff',
        'primary2': '#d0e9ff',
        'primary3': '#b2ddff',
        'primary4': '#84cafe',
        'primary5': '#54b1fe',
        'primary6': '#2e90fb',
        'primary7': '#1470ef',
        'primary8': '#175cd3',
        'primary9': '#1849a8',
        'primary10': '#1a4186',

        // Red Color Palette
        'red1': '#ffd9d9',
        'red2': '#ce4242',
        'red3': '#800b0b',

        // Green Color Palette
        'green1': '#d9fff6',
        'green2': '#42cead',
        'green3': '#0b8064',

        // Yellow Color Palette
        'yellow1': '#fff0d9',
        'yellow2': '#ce9642',
        'yellow3': '#80510b',

        // Gray Color Palette
        'gray1': '#f9fdff',
        'gray2': '#f5eff7',
        'gray3': '#e6e0e9',
        'gray4': '#cac5cd',
        'gray5': '#aea9b1',
        'gray6': '#938f96',
        'gray7': '#79767d',
        'gray8': '#010e21',
        'gray9': '#191919',
      },
      fontFamily: {
        'hind': ['Hind', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
  ]
}