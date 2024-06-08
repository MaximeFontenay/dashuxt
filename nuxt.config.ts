export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dashuxt',
      charset: 'utf-8',
      htmlAttrs: { lang: 'fr' },
      bodyAttrs: {
        class:
          'bg-dark px-[2vw] py-[2vh] font-satoshi min-h-svh overflow-x-clip',
      },
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      meta: [
        { name: 'description', content: 'Dashuxt, your unique dashboard.' },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-phosphor-icons',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    quality: 100,
    format: ['webp', 'png', 'jpg', 'jpeg'],
    densities: [1, 2, 3],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      xxxl: 1800,
    },
  },
  phosphor: {
    prefix: 'I',
  },
})
