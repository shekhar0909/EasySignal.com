/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'custom-blue':'#3F66EF',
       'card-bg':'#2B4CFF'
      },
      boxShadow: {
        'custom': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    },
  },
  plugins: [],
}

