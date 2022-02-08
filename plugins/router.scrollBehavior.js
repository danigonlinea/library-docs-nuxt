import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
    // have anchor ?
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return {
        top: 0,
        left: 0,
      }
    }
  }
})
