/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#3D3D3D",
        primary: "#7f745f",
        accent: "#9492b4",
        secondary: "#b0c4c9",
        tab: "#ffffff",
        ivory: "#F5F5F5",
        darkSlate: "#2C3E50",
      },
        fontFamily: {
          exo: ["Exo 2"]
        }
        
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
}

