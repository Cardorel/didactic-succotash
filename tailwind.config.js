/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bs-primary': '#FF5600',
        'bs-secondary': '#00A6ED',
        'bs-tertiary': '#434343',
        'bs-quaternary': '#F0F0F0',
        'bs-white': '#FFFFFF',
        'bs-gray': '#E5E7EB',
        'bs-modal': 'rgba(0,0,0, 0.6)',
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2560px'
      }
    },
  },
  plugins: [],
}

