/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        'xs' : {'max' :  '576px'},
        
      },
      extend: {
      },
      colors:{
        'pii': '#1fb6ff',
      },
    },
    plugins: [],
  }
  