import axios from 'axios';
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
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'G-M6NNXVP1G3',
    debug: false
  },
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
    microAPI: process.env.MICRO_CMS_API
  },
  publicRuntimeConfig: {
    microAPI: process.env.NODE_ENV !== 'production' ? process.env.MICRO_CMS_API : undefined,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  generate: {
    async routes() {
      const limit = 3
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
      const pages = await axios
        .get('https://yuppies.microcms.io/api/v1/works?limit=0', {
          headers: { "X-API-KEY": process.env.MICRO_CMS_API }
        })
        .then((res) =>
          range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
            route: `/articles/page/${p}`,
          }))
        )
      return pages
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/articles/page/:p',
        component: resolve(__dirname, 'pages/articles/index.vue'),
        name: 'article',
      })
    },
  }
}
