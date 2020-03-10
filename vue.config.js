const path = require('path');

/**
 * 若开启了 mock server，需保证项目的端口与此一致
 *
 * 当被占用时，node会新开个端口给项目使用，但是 mock server 的端口还是用的此数据，
 * 因此需手动改此值，保证项目端口与 mock server 的端口一致
 * @todo 期望能自动获取项目启动的端口，有待改进
 *
 * @type {number}
 */
const port = 9001;

/** mock-server开关,该环境变量定义在文件`.env.development`中 */
const enableMockServer = process.env.VUE_APP_MOCK === 'Mock_Server';
const mockServerContext = process.env.VUE_APP_MOCK_CONTEXT;

/** mock server 下的代理模式*/
const mockProxy = {
  /**
   * dev-api/login => mock/login
   * 本对象是express的代理插件http-proxy-middlewaredre
   * (https://github.com/chimurai/http-proxy-middleware)
   * 当方法是POST时，数据无法从原始请求传到代理请求，见下帖
   * https://github.com/chimurai/http-proxy-middleware/issues/40
   * 解决办法是在它的onProxyReq事件中，手动把请求的body数据搬运到代理请求中
   *
   * target是指匹配该路径的主机。见https://webpack.js.org/configuration/dev-server/#devserverproxy
   */
  [process.env.VUE_APP_BASE_API]: {
    target: `http://localhost:${port}`,
    changeOrigin: true,
    pathRewrite: { [`^${process.env.VUE_APP_BASE_API}`]: mockServerContext },
    /**
     * 在POST方法下，直接把body数据以JSON形式搬运到代理请求对象proxyRequest中去
     */
    onProxyReq: (proxyRequest, request, response, options) => {
      if (request.method === 'POST' && request.body) {
        const bodyData = JSON.stringify(request.body);
        proxyRequest.setHeader('Content-Type', 'application/json');
        proxyRequest.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyRequest.write(bodyData);
      }
    },
  },
};

/**
 * 普通代理模式
 */
const devProxy = {
  [process.env.VUE_APP_BASE_API]: {
    target: 'http://localhost', // 代理的 API 地址
    changeOrigin: true, // 将主机标头的原点更改为目标URL
    pathRewrite: {
      '^/api': '',
    },
    secure: false,
  },
};

module.exports = {
  lintOnSave: false,
  publicPath: './', // 部署应用包时的基本 URL 为相对路径
  productionSourceMap: false, // 生产环境下的 source map

  //代理
  devServer: {
    port: port,
    proxy: enableMockServer ? mockProxy : devProxy,
    before: enableMockServer
      ? require('./src/api/mock/mock-server.js')
      : undefined,
  },

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
    /**
     * 给vue页面加上全局样式和变量，无需在每个vue文件中引入样式（引入多次会导致全局样式类名出现多次）
     *
     * @dependency style-resources-loader
     * @dependency vue-cli-plugin-style-resources-loader
     */
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/less/ant-vars.less'),
        path.resolve(__dirname, 'src/assets/less/global.less'),
      ],
    },
  },
};
