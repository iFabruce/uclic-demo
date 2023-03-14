/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FFF6E3',
      },
      boxShadow: {
        '3xl': '20px 20px 0px -10px rgba(0, 0, 0, 1)',
      },
      borderRadius: {
        'custom': '40px' 
      }
    },
  },
  plugins: [],
}
