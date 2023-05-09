// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@invictus.codes/nuxt-vuetify'],
  content: {
    documentDriven: true
  },
  vuetify: {
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      treeshaking: true,
      // styles: "sass"

    },
  }
})
