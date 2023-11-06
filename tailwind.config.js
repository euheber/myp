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
      'freesia': '#FEC84D',
      'black': '#1d1e20',
      'white': '#ffffff',
      'grey': '#eceae6',
      'blue': '#4D76F2',
      'blue-green':'#00B1B0'
    }
  },
  plugins: [],
}

