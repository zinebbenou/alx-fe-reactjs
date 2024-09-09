/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#646cff',
        'primary-hover': '#535bf2',
        'background-dark': '#242424',
        'background-light': '#ffffff',
        'text-dark': '#213547',
        'button-background-dark': '#1a1a1a',
        'button-background-light': '#f9f9f9',
      },
      fontFamily: {
        'default': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': '3.2em',
      },
      lineHeight: {
        'h1': '1.1',
      },
      borderRadius: {
        'button': '8px',
      },
      padding: {
        'button': '0.6em 1.2em',
      },
      transitionProperty: {
        'border': 'border-color',
      },
    },
  },
  plugins: [],
}
