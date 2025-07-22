/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode via .dark class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // for Next.js pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // for your components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // for Next.js app directory (if used)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}