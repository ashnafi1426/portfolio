/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: '#0a0e27',
          light: '#f8fafc',
        },
        surface: {
          DEFAULT: '#111736',
          light: '#ffffff',
          raised: '#161e45',
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe8e4',
          200: '#ffd5cc',
          300: '#ffb5a6',
          400: '#ff826b',
          500: '#ff5a36',
          600: '#ee441f',
          700: '#c83413',
          800: '#a52d14',
          900: '#882b17',
          DEFAULT: '#ff5a36',
        },
        accent: {
          DEFAULT: '#ff5a36',
          coral: '#ff5a36',
          blue: '#38bdf8',
        },
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
      boxShadow: {
        'glow-coral': '0 0 25px -5px rgba(255, 90, 54, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}