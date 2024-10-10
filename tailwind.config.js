/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        // 'xs' : {'max' :  '576px'},
        ss: '200px',
      },
      extend: {
      },
      colors:{
        'blue': '#1fb6ff',
      },
    },
    plugins: [],
  }