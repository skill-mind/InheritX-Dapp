import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontFamily: {

    //   sans: ["Ubuntu Sans", "sans-serif"],
    //   workSans: ["Work Sans", "sans-serif"],
    // },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(180deg, rgba(181,179,180,0.2) 22%, rgba(122,120,121,0.2) 48%, rgba(79,78,79,0.2) 96%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
