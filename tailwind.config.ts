// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vanta-black': '#000000',
        'vanta-darker': '#020202',
        'vanta-dark': '#050505',
        'vanta-gray-900': '#0a0a0a',
        'vanta-gray-800': '#1a1a1a',
        'vanta-gray-700': '#252525',
        'vanta-gray-600': '#333333',
        'vanta-gray-500': '#404040',
        'vanta-gray-400': '#202020', // Main divider color
        'vanta-gray-300': '#a0a0a0',
        'vanta-gray-200': '#a3a3a3',
        'vanta-gray-100': '#e5e5e5',
        'vanta-sand': '#f5e5c8', // Light CTA button
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Segoe UI',
          'sans-serif',
        ],
      },
      letterSpacing: {
        'extra-wide': '0.16em',
      },
      backgroundImage: {
        'diagonal-stripes': `repeating-linear-gradient(
          45deg,
          #020202,
          #020202 10px,
          #0a0a0a 10px,
          #0a0a0a 20px
        )`,
        'timeline-ticks': `repeating-linear-gradient(
          to right,
          transparent,
          transparent 48px,
          #1a1a1a 48px,
          #1a1a1a 50px
        )`,
      },
      keyframes: {
        // Hero animations (existing)
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px) scale(0.98)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        floatSlow: {
          '0%, 100%': {
            transform: 'translateY(-4px)',
          },
          '50%': {
            transform: 'translateY(4px)',
          },
        },
        drift: {
          '0%, 100%': {
            transform: 'translateX(-10px)',
          },
          '50%': {
            transform: 'translateX(10px)',
          },
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        // Features section animations (new)
        'features-fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px) scale(0.98)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'subtle-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.03)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        drift: 'drift 25s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.9s ease-out 0.2s forwards',
        'fade-in-up-delay': 'fadeInUp 0.9s ease-out 0.4s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.9s ease-out 0.6s forwards',
        // Features animations
        'features-fade-up': 'features-fade-up 700ms cubic-bezier(0.21, 0.8, 0.35, 1) forwards',
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config