/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#ffffff',
          light: '#f8f9fa',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
        },
        accent: {
          green: '#10b981',
          emerald: '#059669',
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #10b981, #059669)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
