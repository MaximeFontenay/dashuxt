export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/eslint",
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {},
});
