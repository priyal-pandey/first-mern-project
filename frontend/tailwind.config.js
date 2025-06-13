import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gamja:['"Gamja Flower"', 'cursive']
      }
    },
  },
  plugins: [daisyui],
  daisyui:{
    themes: ["dracula","retro","cupcake","forest","coffee"]
  }
  
}


