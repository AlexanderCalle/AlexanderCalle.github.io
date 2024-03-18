/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-dark': '#181515',
        'deep-purple-400': '#966AF4',
        'deep-purple-800': "#5D3387",
        'off-white': '#ECECEC',
        'dark-gray': '#7E7E7E'
      }
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    'flowbite/plugin'
  ],
}

