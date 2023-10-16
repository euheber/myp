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
      'e9c46a': '#e9c46a',
      '2A9D8F': '#2A9D8F',
      'F4A261': '#F4A261',
      'E76F51': '#E76F51',
      '06d6a0': '#06d6a0',
      '1d1e20': '#1d1e20',
    }
  },
  plugins: [],
}

