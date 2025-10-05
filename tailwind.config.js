/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./recruitment/confirmregist.html", 
    "./recruitment/announcement.html",
    "./js/**/*.js",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#13265C'
        },
        'osim': {
          'blue': '#13265C',
          'gold': '#FFD700',
          'light-blue': '#3b82f6'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'osim-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2313265C\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        'osim': '0 10px 25px -5px rgba(19, 38, 92, 0.1), 0 10px 10px -5px rgba(19, 38, 92, 0.04)',
        'osim-lg': '0 20px 25px -5px rgba(19, 38, 92, 0.1), 0 10px 10px -5px rgba(19, 38, 92, 0.04)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.backdrop-blur-sm': {
          backdropFilter: 'blur(4px)',
        },
        '.backdrop-blur': {
          backdropFilter: 'blur(8px)',
        },
        '.backdrop-blur-lg': {
          backdropFilter: 'blur(16px)',
        },
      }
      addUtilities(newUtilities)
    },
    function({ addComponents }) {
      addComponents({
        '.btn-osim': {
          backgroundColor: '#13265C',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1e40af',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -5px rgba(19, 38, 92, 0.3)',
          },
        },
        '.card-osim': {
          backgroundColor: '#fff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(19, 38, 92, 0.1), 0 2px 4px -1px rgba(19, 38, 92, 0.06)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(19, 38, 92, 0.1), 0 10px 10px -5px rgba(19, 38, 92, 0.04)',
          },
        },
      })
    }
  ],
        }
