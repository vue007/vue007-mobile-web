const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: []
            }),
            'autoprefixer'
          ])
        ],
        import: [
          resolve('./src/assets/theme.custom')
        ]
      }
    }
  },
  transpileDependencies: [
    'mand-mobile'
  ],
  chainWebpack: config => {

    /* 配置添加自定义 svgicon */
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .include
        .add(resolve('./src/assets/svg')) // svg 路径
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .end()
        .use('svgo-loader')
        .loader('svgo-loader')


  }
}
