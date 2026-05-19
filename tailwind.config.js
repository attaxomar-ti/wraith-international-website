/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        site: {
          bg:      '#f0efed',
          bgdark:  '#111111',
          black:   '#0d0d0d',
          mid:     '#3a3a3a',
          muted:   '#5c5c5c',
          border:  '#d5d3cf',
          dborder: 'rgba(240,239,237,0.12)',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
