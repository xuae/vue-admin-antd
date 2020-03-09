const path = require('path');

module.exports = {
  publicPath: './', // 部署应用包时的基本 URL 为相对路径
  productionSourceMap: false, // 生产环境下的 source map

  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    requireModuleExtension: true, // 启用 CSS modules for all css / pre-processor files.

    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true, // ant design 必须加上
      },
    },
  },
  pluginOptions: {
    // 给vue页面加上全局样式和变量，无需在每个vue文件中引入样式（引入多次会导致全局样式类名出现多次）
    // 依赖包：
    // style-resources-loader
    // vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/less/ant-vars.less'),
        path.resolve(__dirname, 'src/assets/less/global.less'),
      ],
    },
  },
};
