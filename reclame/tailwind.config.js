/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "green-color": '#AFC045',
        "black-color": '#303031',
        "white-color": '#FFFFFF',
        "gray-color": '#F2F2F2'
      },
      fontFamily: {
        Saira: ['Saira', 'sans-serif'],
      },
      screens: {
        'xxsm': '375px',
        'xsm': '575px',
        'xlg': '991px',
        '1.5xl': '1440px',
        '3xl': '2560px',
      },
    },
  },
  plugins: [],
}
