import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1200px' } },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#FFFDF9',
        foreground: '#1F2937',
        primary: { DEFAULT: '#C2410C', foreground: '#FFFDF9' },
        secondary: { DEFAULT: '#FB923C', foreground: '#1F2937' },
        accent: { DEFAULT: '#F59E0B', foreground: '#1F2937' },
        muted: { DEFAULT: '#F8EFE6', foreground: '#6B7280' },
        card: { DEFAULT: '#FFFFFF', foreground: '#1F2937' },
        destructive: { DEFAULT: '#DC2626', foreground: '#FFFFFF' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Playfair Display', 'serif'] },
      boxShadow: { soft: '0 20px 60px -30px rgb(124 45 18 / 0.45)', glow: '0 20px 80px -35px rgb(194 65 12 / 0.7)' },
      backgroundImage: { 'radial-warm': 'radial-gradient(circle at top left, rgba(251,146,60,.22), transparent 32rem)' },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: { 'accordion-down': 'accordion-down 0.2s ease-out', 'accordion-up': 'accordion-up 0.2s ease-out' },
    },
  },
  plugins: [],
} satisfies Config;
