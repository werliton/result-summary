// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Hanken Grotesk', 'sans-serif'], // substitui a fonte padrão
        },
      },
    },
    plugins: [],
  }
  