const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        url: false,
      }
    }
  },
});
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    './' :
    '/'
}
