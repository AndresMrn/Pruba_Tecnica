/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors : {
        "space-cadel" : "#141b41",
        "green-blue" : "#306bac",
        "cornflower-blue" : "#6F9CEB",
        "jordy-blue" : "#98b9f2",
        "tropical-indigo" : "#918ef4"
      }
    },
  },
  plugins: [],
}

