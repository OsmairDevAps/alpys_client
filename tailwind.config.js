/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'alpys-background': '#1B0D00',
        'alpys-primary': '#5A2600',
        'alpys-secondary': '#D45C05',
        'alpys-white': '#F1F1F1',
        'alpys-placeholder': '#A07C7C',
        'alpys-tx-primary': '#F5F2F2',
        'alpys-tx-secondary': '#F5F2F2',
        'alpys-tx-terceary': '#FFC1C1',
        'alpys-bg-apple': '#ffffff',
        'alpys-tx-apple': '#000000',
        'alpys-bg-google': '#0377A8',
        'alpys-tx-google': '#ffffff',
        'alpys-sucess': '#03A877',
        'alpys-edit': '#0377A8',
        'alpys-error': '#aa0000',
      }
    },
  },
  plugins: [],
}
