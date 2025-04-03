/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        strategy: '#1a4c96', // deep blue
        technology: '#00bfdd', // cyan
        domain: '#e9972b', // amber/gold
        intersection: '#8a45a3', // purple
        'dark-bg': '#0c1632',
        'light-bg': '#f5f7fa',
        'dark-text': '#1a1a2e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'extra-tight': '1.2',
        'normal': '1.6',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section-py': '100px',
      },
      boxShadow: {
        'glow-intersection': '0 0 20px 5px rgba(138, 69, 163, 0.5)', // Purple glow
        'glow-strategy': '0 0 15px 3px rgba(26, 76, 150, 0.4)',
        'glow-technology': '0 0 15px 3px rgba(0, 191, 221, 0.4)',
        'glow-domain': '0 0 15px 3px rgba(233, 151, 43, 0.4)',
      }
    },
  },
  plugins: [],
}
