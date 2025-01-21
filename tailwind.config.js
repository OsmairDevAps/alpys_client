/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'alpys-shape': '#fc8403',
        'alpys-background': '##fcfcfc',
        'alpys-primary': '#f0f0f0',
        'alpys-secondary': '#663006',
        'alpys-white': '#FFFFFF',
        'alpys-black': '#000000',
        'alpys-placeholder': '#d1d0cf',
        'alpys-tx-primary': '#524f4d',
        'alpys-tx-secondary': '#524f4d',
        'alpys-tx-terceary': '#522202',
        'alpys-bg-apple': '#ffffff',
        'alpys-tx-apple': '#000000',
        'alpys-bg-google': '#048fc9',
        'alpys-tx-google': '#ffffff',
        'alpys-sucess': '#03A877',
        'alpys-edit': '#0377A8',
        'alpys-error': '#aa0000',
      }
    },
  },
  plugins: [],
}
