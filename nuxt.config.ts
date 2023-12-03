// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/ionic'],
  imports: {
    dirs: [
      'composables/**',
      'enums/**'
    ]
  }
})
