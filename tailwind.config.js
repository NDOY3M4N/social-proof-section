const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['15px', '24px'],
        sm: '13px'
      },
      colors: {
        primary: {
          '400': 'hsl(300, 43%, 22%)',
          '200': 'hsl(333, 80%, 67%)',
        },
        neutral: {
          '400': 'hsl(303, 10%, 53%)',
          '200': 'hsl(300, 24%, 96%)',
        }
      },
      spacing: {
        '104': '26rem'
      },
      screens: {
        'md': '860px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
