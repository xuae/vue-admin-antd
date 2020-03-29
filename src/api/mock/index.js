/**
 * 模拟数据
 *
 * @dependency mockjs
 */

import MockJs from 'mockjs';
import Util from './util';

const querystring = require('querystring');

export default class Mock {
  /*
   * 不批量导入的 js 文件名，需加上后缀
   * @return {string[]}
   */
  static get ignoreFiles() {
    return ['index.js', 'mock-server.js', 'util.js'];
  }

  /**
   * 不批量导入的 js 文件名，去掉后缀
   * @return {string[]}
   */
  static get ignoreFileNames() {
    return this.ignoreFiles.map(value => value.replace(/\.js/g, ''));
  }

  /**
   * mock 时，文件名无需包含后缀
   * mock server 时，文件名需包含后缀 .js
   * @type {string[]}
   */
  static get apiFileNames() {
    if (process.env.VUE_APP_MOCK === 'Mock_Server') {
      return require('fs')
        .readdirSync(__dirname)
        .filter(
          value => /^[^.].*js$/.test(value) && !this.ignoreFiles.includes(value)
        );
    }
    return require
      .context('.', false, /.js$/)
      .keys()
      .map(value => value.replace(/(\.\/|\.js)/g, ''))
      .filter(value => !this.ignoreFileNames.includes(value));
  }

  /*
   * 将 mock 文件夹下的所有 js 文件(ignoreFiles 中的除外)
   * 全部导入到一个对象数组中
   * @return {any[]}
   */
  static get api() {
    return this.apiFileNames
      .map(value => require(`./${value}`).default)
      .flat()
      .filter(value => Util.getRequestUri(value));
  }

  /**
   * 在 mock server 中使用的 api 数据
   * @type {{response(*=, *=): void, type: (*|string), url: RegExp}[]}
   */
  static get fakeData() {
    return this.api
      .map(route => {
        const uri = Util.getRequestUri(route);
        const method = Util.getRequestMethod(route);
        const response = Util.getRequestResponse(route);
        if (uri) {
          return {
            url: new RegExp(`^${process.env.VUE_APP_MOCK_CONTEXT}${uri}$`),
            type: method || 'get',
            response(req, res) {
              console.log(`request invoke: ${req.path}`);
              res.json(
                MockJs.mock(
                  response instanceof Function ? response(req, res) : response
                )
              );
            },
          };
        }
        return undefined;
      })
      .filter(Boolean);
  }

  /**
   * for mock
   * please use it cautiously, it will redefine XMLHttpRequest,
   * which will cause many of your third-party libraries to be invalidated(like progress event).
   */
  static mockXHR() {
    // mock patch
    // https://github.com/nuysoft/Mock/issues/300
    MockJs.XHR.prototype.proxy_send = MockJs.XHR.prototype.send;
    MockJs.XHR.prototype.send = function() {
      if (this.custom.xhr) {
        this.custom.xhr.withCredentials = this.withCredentials || false;

        if (this.responseType) {
          this.custom.xhr.responseType = this.responseType;
        }
      }
      this.proxy_send(...arguments);
    };

    for (const i of this.api) {
      const uri = Util.getRequestUri(i);
      const method = Util.getRequestMethod(i);
      const response = Util.getRequestResponse(i);
      if (uri) {
        MockJs.mock(
          new RegExp(uri),
          method || 'get',
          this._XHR2ExpressReqWrap(response)
        );
      }
    }
  }

  static _XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        let parseBody;
        try {
          parseBody = JSON.parse(body);
        } catch (e) {
          parseBody = querystring.parse(body);
        }
        result = respond({
          method: type,
          body: parseBody,
          query: querystring.parse(url.split('?')[1]),
        });
      } else {
        result = respond;
      }
      return MockJs.mock(result);
    };
  }
}
