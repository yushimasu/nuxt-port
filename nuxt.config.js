import axios from 'axios'
export default {
  target: 'static',
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
      { rel: 'preconnect', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap' },
    ]
  },
  css: [
    '@/assets/css/reset',
    '@/assets/css/common',
    '@/assets/css/top',
    '@/assets/css/page'
  ],
  plugins: [
    '~/plugins/day.js',
  ],
  components: true,
  modules: [
    '@nuxtjs/axios',
    'nuxt-microcms-module'
  ],
  axios: {
  },
  build: {
    transpile: ['gsap', 'p5'],
    babel: {
      babelrc: false,
      compact: false
    }
  },
  privateRuntimeConfig: {
    instaAPI: process.env.INSTA_API
  },
  publicRuntimeConfig: {
    instaAPI: process.env.NODE_ENV !== 'production' ? process.env.INSTA_API : undefined
  },
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.MICRO_CMS_API
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all'
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://yuppies.microcms.io/api/v1/works?limit=30', {
          headers: { 'X-API-KEY': process.env.MICRO_CMS_API }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/articles/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
