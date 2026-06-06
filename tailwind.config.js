/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#082B5B',
          50: '#E8F0FA',
          100: '#C5D7F0',
          200: '#8AAFD9',
          300: '#4F87C2',
          400: '#1A5FA6',
          500: '#082B5B',
          600: '#062347',
          700: '#041A35',
          800: '#021124',
          900: '#010913',
        },
        teal: {
          DEFAULT: '#53D1C8',
          50: '#F0FAFA',
          100: '#D1F3F1',
          200: '#A3E7E3',
          300: '#75DBD5',
          400: '#53D1C8',
          500: '#2BBDB4',
          600: '#21958D',
          700: '#186D67',
          800: '#0F4540',
          900: '#071D1B',
        },
        gold: {
          DEFAULT: '#C8A46B',
          50: '#FBF6EE',
          100: '#F4E8D4',
          200: '#E9D0A9',
          300: '#DEB87E',
          400: '#C8A46B',
          500: '#B48B4A',
          600: '#8E6C39',
          700: '#674F2A',
          800: '#41321B',
          900: '#1B150B',
        },
        softwhite: '#F7F8FA',
        charcoal: '#111827',
        ink: '#030810',
        midnight: '#0a1220',
      },
      boxShadow: {
        'teal-glow': '0 0 24px rgba(83, 209, 200, 0.22), 0 0 48px rgba(83, 209, 200, 0.08)',
        'teal-glow-lg': '0 0 32px rgba(83, 209, 200, 0.28), 0 0 64px rgba(83, 209, 200, 0.1)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(8,43,91,0.75) 0%, rgba(8,43,91,0.55) 60%, rgba(8,43,91,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'pulse-teal': 'pulseTeal 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseTeal: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(83,209,200,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(83,209,200,0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.charcoal'),
            a: { color: theme('colors.teal.DEFAULT') },
            h1: { color: theme('colors.navy.DEFAULT') },
            h2: { color: theme('colors.navy.DEFAULT') },
            h3: { color: theme('colors.navy.DEFAULT') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
