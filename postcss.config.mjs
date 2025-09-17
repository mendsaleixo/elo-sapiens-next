// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // A mudança está aqui: usamos '@tailwindcss/postcss' como a chave
    "@tailwindcss/postcss": {
      plugins: ["@tailwindcss/typography"],
    },
    autoprefixer: {},
  },
};

export default config;
