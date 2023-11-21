
/**  @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': { 'min': '280px', 'max': '400px' },  // Define a custom breakpoint for extra-small screens
        'xs': { 'min': '401px', 'max': '639px' }, 
      },
    },
  },
  plugins: [],
}

