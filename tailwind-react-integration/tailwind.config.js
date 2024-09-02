/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Make sure this points to all relevant files
  darkMode: 'media', // or 'class' or false (default)
  theme: {
    extend: {}, // Extend the default Tailwind theme here
  },
  variants: {
    extend: {}, // Add variants here if needed
  },
  plugins: [], // Add plugins if needed
}
