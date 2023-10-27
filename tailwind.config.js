/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'serrat': ['Montserrat', 'sans-serif'],
      'lora': [ 'Lora', 'serif'],
    },
    colors: { 
      'f2c94d': '#eca531',
      '3DC731': '#3DC731',
      '1d1e20': '#1d1e20',
      'e5e5e5': '#e5e5e5',
      'e63946': '#e63946',
      '1d3557': '#1d3557',
    }
  },
  plugins: [],
}

