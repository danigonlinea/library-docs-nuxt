export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Project Folder Directory
  srcDir: 'src/',

  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'watson-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Serif:wght@700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss', 'watson-vue/dist/watson-vue.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/watson'],

  components: {
    dirs: ['~/components', '~/components/VueParsers'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxt/content'],

  // env: {
  //   BASE_URL:
  //     process.env.NODE_ENV === 'production'
  //       ? 'https://watson-site.vercel.app/'
  //       : 'http://localhost:3000/',
  // },

  env: {
    API_URL: 'https://watson-site.vercel.app/',
  },

  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://watson-site.vercel.app/api'
        : 'http://localhost:3000/api',
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL,
  //     browserBaseURL: process.env.BASE_URL,
  //   },
  // },

  serverMiddleware: [
    { path: '/api/vue-props', handler: '~/api/vueProps.js' },
    { path: '/api/vue-slots', handler: '~/api/vueSlots.js' },
    { path: '/api/vue-methods', handler: '~/api/vueMethods.js' },
  ],

  // Content for Nuxt Content
  content: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
