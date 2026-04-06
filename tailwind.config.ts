import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0366d6',
        secondary: '#6f42c1',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
  },
  plugins: [],
}
export default config
