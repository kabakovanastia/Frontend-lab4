// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
       'Open Sans': [400, 700],
        Montserrat: true,
        'PT+Root+UI': [400, 500, 700],
      }
    }],
  ],
  css: [
    'normalize.css',
    '@/public/assets/main.css'
  ],
})
