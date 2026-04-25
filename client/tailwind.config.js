/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-purple': '#d946ef',
        'neon-blue': '#3b82f6',
        'neon-pink': '#ec4899',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(217, 70, 239, 0.2)',
        'premium-lg': '0 20px 60px -15px rgba(217, 70, 239, 0.3)',
      },
    },
  },
  plugins: [],
}
