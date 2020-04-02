const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path')

module.exports = {
  pluginOptions: {
    // prerender: {
    //   domain: 'https://www.authscorp.com',
    // },
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')

    if(config.get('target') == 'node') {
      config.merge({
        externals: {
          turndown: 'turndown'
        }
      })
    }
  },
  configureWebpack: {
    // mode: 'production',
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
    plugins: [
      process.env.NODE_ENV === 'production' ? new CompressionPlugin() : null,
      // process.env.NODE_ENV === 'production' ? new CompressionPlugin({
      //   filename: '[path].br[query]',
      //   algorithm: 'brotliCompress',
      //   compressionOptions: { level: 11 },
      //   threshold: 10240,
      //   minRatio: 0.8,
      // }) : null
    ].filter((r) => r !== null),
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