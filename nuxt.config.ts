export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  content: {
    // issue with docker compose to open ws on port 4000
    watch: false
  },
  modules: [
    '@vueuse/nuxt',
  ],

})
