/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--primary-color': '#1B325F',
        '--secondary-color': '#9CC4E4',
        '--background-color': '#F1F5F9',
        '--accent-color': '#FF6F61',
        '--font-color': '#333333',
        '--input-background': '#ffffff',
        '--input-border-color': '#d1d5db'
      }
      
     
    },
  },
  plugins: [],
}