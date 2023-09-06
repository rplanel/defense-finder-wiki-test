// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'vuetify-nuxt-module'],
  content: {
    documentDriven: {
      injectPage: false,
    }
  },
  vuetify: {
    vuetifyOptions: {
      labComponents: true
    }
  },
  devtools: {
    enabled: false
  },
  // app: {
  //   baseURL: '/defense-finder-wiki-test/',
  // }

})
