/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all JavaScript/TypeScript and React files
    './public/index.html'         // Includes the main HTML file
  ],
  darkMode: 'media', // 'media' for system-based dark mode, 'class' for manual control
  theme: {
    extend: {}, // Extend or customize the default Tailwind theme here
  },
  variants: {
    extend: {}, // Add variants like hover, focus, etc., if needed
  },
  plugins: [], // Add any Tailwind plugins you need
};
