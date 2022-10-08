/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
          Poppins: ['Poppins'],
      },
      content: {
        'star': 'url("../images/Star.png")',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
