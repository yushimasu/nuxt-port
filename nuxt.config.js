export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  plugins: [
    {
      src: '~plugins/particles.js',
      ssr: false
    }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
  privateRuntimeConfig: {
    instaAPI: process.env.INSTA_API,
    microcmsAPI: process.env.MICRO_CMS_API,
  },
  publicRuntimeConfig: {
    instaAPI: process.env.NODE_ENV !== 'production' ? process.env.INSTA_API : undefined,
    microcmsAPI: process.env.NODE_ENV !== 'production' ? process.env.MICRO_CMS_API : undefined,
  },
}