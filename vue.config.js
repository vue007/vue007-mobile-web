const fs = require('fs');
const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
    } else {
      // 为开发环境修改配置
    }
  },

  pages: { // 可再此添加多入口
    index: {
      entry: 'src/main.ts', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'vue007-mobile-web', // 当使用 title 选项时， template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含，提取出来的通用 chunk 和 vendor chunk。
    },

    // subpage: 'src/subpage/main.js' // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`, 并且如果找不到的话，就回退到 `public/index.html`。 输出文件名会被推导为 `subpage.html`。

    /* TODO 后期可以添加分享单页  */
  },

  pluginOptions: {
    'lodash': {},
  },

  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black', // ios顶部状态栏颜色
  },

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
          ]),
        ],
        import: [
          resolve('./src/assets/theme.custom.2x')
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
        .loader('svgo-loader');

    /* 从 js 中读取 sass 变量 */
    const files = fs.readdirSync('./src/styles/');

    files.forEach(file => {
      config.module.rule('scss').oneOf('vue')
          .use('sass-vars-loader')
          .loader('@epegzz/sass-vars-loader')
          .options({
            syntax: 'scss',
            files: [
              path.resolve(__dirname, `./src/common/styleVars.json`)
            ]
          })
    });

  },

}
