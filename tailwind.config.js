/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'alpys-background': '#F1F1F1',
        'alpys-tx-title': '#D45C05',
        'alpys-bg-block': '#582F04',
        'alpys-tx-text': '#582F04',
        'alpys-bg-input': '#DCCBBF',
        'alpys-tx-input': '#582F04',
        'alpys-placeholder-input': '#A07C7C',
        'alpys-border-block': '#D45C05',
        'alpys-bg-button': '#048fc9',
        'alpys-tx-button': '#FFFFFF',
        'alpys-bg-submit': '#D45C05',
        'alpys-tx-submit': '#FFFFFF',
        'alpys-bg-apple': '#FFFFFF',
        'alpys-tx-apple': '#000000',
        'alpys-bg-google': '#048fc9',
        'alpys-tx-google': '#FFFFFF',
        'alpys-sucess': '#03A877',
        'alpys-edit': '#0377A8',
        'alpys-error': '#aa0000',
      }
    },
  },
  plugins: [],
}
