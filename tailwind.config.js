// export default {
//     content: [
//         './src/app/**/*.{js,jsx}',
//         './src/pages/**/*.{js,jsx}',
//         './src/components/**/*.{js,jsx}',
//         './src/**/*.{js,ts,jsx,tsx}',
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          colors: {
              background: 'var(--background)',
              foreground: 'var(--foreground)',
          },
          fontFamily: {
              sans: ['var(--font-inter)'],
              mono: ['var(--font-inter)'],
          },
      },
  },
  plugins: [],
}