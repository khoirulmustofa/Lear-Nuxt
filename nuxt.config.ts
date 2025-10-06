// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from '@primeuix/themes/aura'

export default defineNuxtConfig({
  srcDir: 'nuxt/',
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  plugins: ['~/plugins/primevue.js'],

  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Sakai PrimeVue - Nuxt',
    },
  },
  css: ['~/assets/styles.scss'],
  compatibilityDate: '2024-04-03',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    },
  },
})
