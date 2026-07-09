/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        base: '#080B12',
        surface: '#0E131D',
        surface2: '#141B29',
        border: 'rgba(148, 163, 195, 0.14)',
        // Text
        ink: '#E8ECF5',
        muted: '#8B94A9',
        faint: '#5B6479',
        // Accents
        blue: {
          DEFAULT: '#3E7BFA',
          soft: '#6E9CFF',
          dim: '#1E3A6E',
        },
        cyan: '#22D3EE',
        amber: '#F5A623',
        green: '#34D399',
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 20% 20%, rgba(62,123,250,0.14), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.10), transparent 35%)',
        'card-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(62,123,250,0.25), 0 8px 40px -8px rgba(62,123,250,0.35)',
        card: '0 4px 24px -8px rgba(0,0,0,0.5)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 200%' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 7s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
      },
    },
  },
  plugins: [],
}
