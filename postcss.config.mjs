// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;
export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js',
    },
  },
}