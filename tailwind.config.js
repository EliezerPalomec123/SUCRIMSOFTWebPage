/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-bg': '#0A174A',
        'gray-init': 'rgba(128, 128, 128, 0.5)',
        'Off-white': 'hsl(36, 100%, 99%)',
        'blue-light': '#6A8CC4'
      },
      translate: {
        '-1/4': '-25%',
        '-1/2': '-50%'
      },
      spacing:{
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '3.5/10': '35%',
        '7/10': '70%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%'
      },
    

    },
  },
  plugins: [],
}

