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
        'neon-cyan': '#00ffff',
        'neon-blue': '#0080ff',
        'neon-green': '#00ff00',
        'game-blue': '#00d9ff',
        'game-green': '#39ff14',
        primary: {
          50: '#00ffff',
          100: '#00ffff',
          200: '#00ffff',
          300: '#00ffff',
          400: '#00ffff',
          500: '#00ffff',
          600: '#00d9ff',
          700: '#0080ff',
          800: '#0066cc',
          900: '#004d99',
        },
        accent: {
          cyan: '#00ffff',
          blue: '#0080ff',
          green: '#39ff14',
          teal: '#00d9ff',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body: ['Share Tech Mono', 'monospace'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            opacity: '1'
          },
          '100%': { 
            textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00d9ff',
            opacity: '0.9'
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
        'neon-lg': '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
