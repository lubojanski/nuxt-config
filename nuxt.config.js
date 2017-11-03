module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-storefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Storefront based on Moltin, Vue, Nuxt and Firebase' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config['target'] = 'node'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [
              ["env", { "modules": false }],
              "stage-2"
            ],
            plugins: ["transform-runtime"],
          },
          exclude: /(node_modules)/
        },
        {
          test: /\.json$/,
          loaders: ['json-loader']
        })
      }
    },
    extend (config) {
      config.node = { fs: 'empty' };
    }
  }
}
