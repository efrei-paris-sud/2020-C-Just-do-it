const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      gray: colors.gray,

      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      teal: colors.teal,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      pink: colors.pink,
      rose: colors.rose,
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
