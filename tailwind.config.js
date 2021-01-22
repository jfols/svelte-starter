// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ['', 'sans-serif'],
      sans: ['Hind', 'sans-serif'],
      serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    colors: {
      transparent: 'transparent',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lightBlue: colors.lightBlue,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      trueGray: colors.trueGray,
      violet: colors.violet,
      warmGray: colors.warmGray,
      white: colors.white,
      yellow: colors.yellow
    }
  },
};
