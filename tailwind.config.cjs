const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Add subtle refresh colors if you'd like further customization
      colors: {
        refresh: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 520ms cubic-bezier(.2,.9,.2,1) forwards',
        'pop': 'pop 420ms cubic-bezier(.2,.9,.2,1) forwards',
        'jiggle': 'pop 340ms cubic-bezier(.2,.9,.2,1) 1',
      },
  },
  plugins: [],
}
