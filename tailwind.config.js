/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e6e9f2',
        'secondary': '#fafafa',
        'textColor':"#23252B"
      }
    },
  },
  plugins: [],
}

