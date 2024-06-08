import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{vue,ts,tsx}',
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './plugins/**/*.ts',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5DBE74',
        dark: '#1D1D1D',
        red: '#DB785E',
        yellow: '#E3D45A',
        purple: '#A798E8',
        grey: '#818181',
        blue: '#3377FE',
      },
      fontFamily: {
        satoshi: ['satoshi', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
