/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#eeeeee',
          dark: '#242423',
        },
        surface: {
          DEFAULT: '#f5f5f5',
          dark: '#1c1c1c',
        },
        text: {
          DEFAULT: '#111827',
          dark: '#faf207',
        },
        brand: {
          gold: '#faf207', // gold (used for highlights, important text)
          black: '#141414',
          white: '#FFFFFF',
        },
        primary: '#faf207',      // red (used for call-to-actions, branding)
        secondary: '#3CEBFF',    // dark green (used for backgrounds, deep UI)
        accent: '#9441f2',       // light cyan highlight (icons, active states)
        highlight: '#faf207',    // orange (used sparingly for callouts)
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
