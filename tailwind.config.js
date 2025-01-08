/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        primary: "#7f745f",
        accent: "#9492b4",
        secondary: "#b0c4c9",
        tab: "#ffffff",
      },
        fontFamily: {
          exo: ["Exo 2"]
        }
        
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

