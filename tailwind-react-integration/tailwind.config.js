/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript and React files
    "./public/index.html"         // Include the main HTML file
  ],
  darkMode: 'media', // Enable dark mode based on user's system preferences ('media'), or you can change it to 'class' to manually control
  theme: {
    extend: {}, // Use this to extend or customize the default Tailwind theme
  },
  variants: {
    extend: {}, // Add variants for responsive, hover, focus, etc. states
  },
  plugins: [], // Add any necessary Tailwind plugins here
};
