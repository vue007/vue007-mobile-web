module.exports = {
  presets: [
    '@vue/app'
  ],

  plugins: [
    [
      'import',
      {
        libraryName: 'mand-mobile',
        libraryDirectory: 'components'
      }
    ],
    'lodash',// 引入 lodash 压缩
  ]
}
