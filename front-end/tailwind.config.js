/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    
    "./src/**/*.{html,js,jsx,ts,tsx}"


  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },

  important: true,

};
