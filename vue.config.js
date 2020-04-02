const path = require('path')

module.exports = {
  // prerender: {
  //   domain: 'https://www.authscorp.com',
  // },
  chainWebpack(config) {
    if(config.get('target') == 'node') {
      config.merge({
        externals: {
          turndown: 'turndown'
        }
      })
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.web.js', '.web.vue'],
      alias: {
        // '@components':    path.join(__dirname, './@components'),
        // '@vuetify':       path.join(__dirname, './@vuetify'),
        // '@config':        path.join(__dirname, './@config'),
        // '@locales':       path.join(__dirname, './@locales'),
        '@menu':          path.join(__dirname, './src/components/@menu'),
        // '@screens':       path.join(__dirname, './@screens'),
        '@pages':         path.join(__dirname, './src/components/@pages'),
        // '@addons':        path.join(__dirname, '../../src/addons'),
        '@assets':        path.join(__dirname, './src/assets'),
        // '@tools':         path.join(__dirname, '../tools'),
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ],
    }
  },
  devServer: {
    // disableHostCheck: true, // localtunnel / NGROK
    proxy: {
      '^/api': {
        target: 'http://10.3.177.83/',
        ws: false,
        changeOrigin: true
      },
      '^/graphql': {
        target: 'http://10.3.177.83/',
        ws: false,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    "vuetify"
  ]
}