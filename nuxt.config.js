const webpack = require('webpack')
const axios = require('axios')

module.exports = {
  // Build configuration
  build: {
    // Run ESLINT on save
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    vendor: [
      'moment'
    ]
  },
  css: [
    'normalize.css/normalize.css'
  ],

  // Headers of the page
  head: {
    title: 'wp-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '15秒で飲食店の魅力を最大限に伝える動画メディア 。「お店の雰囲気」「料理の躍動感」などをはっきり伝え、失敗しないお店選びができます。さらに「デート」「パーティ」「ひとり飯」「女子会」などなど 様々なイベントに最適なお店を提案することで、楽しい体験を届けます。' },
      { hid: 'og:image', property: 'og:image', href: '/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#384D66' },

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-93904346-3'
    }]
  ],

  plugins: [
    { src: '~plugins/vue-lazyload', ssr: false },
    { src: '~plugins/vue-scrollto', ssr: false },
    { src: '~plugins/web-font-loader', ssr: false },
    { src: '~plugins/mixins' },
    { src: '~plugins/vue-tabs-with-active-line.js', ssr: false },
    { src: '~plugins/vue-burger-menu.js', ssr: false }
  ],
  // generate: {
  //   interval: 1000,
  //   routes () {
  //     return Promise.all([
  //       axios.get(`http://niko0420.sakura.ne.jp/wp-01/wp-json`),
  //       axios.get(`http://niko0420.sakura.ne.jp/wp-01/wp-json`)
  //     ]).then((data) => {
  //       const posts = data[0]
  //       const pages = data[1]
  //       return posts.data.map((post) => {
  //         return {
  //           route: '/post/' + post.slug,
  //           payload: post
  //         }
  //       }).concat(pages.data.map((page) => {
  //         return {
  //           route: page.slug,
  //           payload: page
  //         }
  //       }))
  //     })
  //   }
  // },
  vendor: ['lightgallery.js']
}
