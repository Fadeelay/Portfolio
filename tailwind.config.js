/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Humanline light design system
        primary: {
          DEFAULT: '#27A376',
          hover:   '#22936A',
          light:   '#27A37618',
          subtle:  '#27A3760C',
        },
        surface: {
          base:   '#F4F7FA',  // page background (light blue-grey)
          card:   '#FFFFFF',  // card / panel bg
          raised: '#F0F4F8',  // hover / elevated
          border: '#E2E8F0',  // subtle borders
        },
        content: {
          primary:   '#0F172A',  // headings (dark navy)
          secondary: '#4A5568',  // body text
          muted:     '#94A3B8',  // placeholders / labels
        },
        status: {
          success: '#16A34A',
          warning: '#D97706',
          error:   '#DC2626',
          info:    '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 16px 0 rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
