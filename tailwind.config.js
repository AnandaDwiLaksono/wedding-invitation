/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
      },
    },
  },
  plugins: [
    forms,
  ],
};

export default config;