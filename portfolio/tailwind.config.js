import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter_Display': ['Inter Display', 'sans-serif'],
      },
    
    },
  },
     
  plugins: [daisyui],

}