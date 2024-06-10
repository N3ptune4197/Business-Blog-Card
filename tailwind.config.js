/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],


  theme: {
    extend: {

      fontFamily: {
        'lato' : ['"Lato"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },

      colors: {
        'bg-general': '#F2F5F9',
        'title': '#111729',
        'paragraph': '#677489',
        
      }

    },
  },
  plugins: [],
}

