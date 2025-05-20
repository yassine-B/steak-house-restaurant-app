const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/PageComponents/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['TIMESS__', 'cursive'],
        text: ['Roboto-Regular', 'sans-serif']
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8'
      },
      inset: {},
      height: {
        '30rem': '30rem',
        '100vh': '100vh'
      },
      width: {},
      colors: {
        primary: 'var(--primary-color)',
        primaryText: 'var(--text-color)',
        background: 'var(--background-color)',
        accentColor: 'var(--accent-color)'
      },
      backgroundImage: {
        'gradient-b-dark_1': 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
        'gradient-b-dark_2': 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
        'gradient-t-dark_1': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
