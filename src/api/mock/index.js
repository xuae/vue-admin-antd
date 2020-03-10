/**
 * 模拟数据
 *
 * @dependency mockjs
 */

import Mock from 'mockjs';

import manager from './manager';

const mocks = [
  ...manager, // 管理员，登录，退出
];

// 无法使用 require.context，原因还在寻找中
// const files = require.context('.', false, /.api.js$/);
// files.keys().forEach(key => {
//   const file = files(key).default;
//   mocks = [...mocks, ...file];
// });
// console.log(mocks);

function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    `{"${decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ')}"}`
  );
}

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        // let bodyParse;
        // if (body.indexOf('&') > -1) {
        //   const arr = body.split('&');
        //   bodyParse = {};
        //   for (let i = 0; i < arr.length; i++) {
        //     const arr2 = arr[i].split('=');
        //     bodyParse[arr2[0]] = arr2[1];
        //   }
        // } else if (body) {
        //   bodyParse = JSON.parse(body);
        // }
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || 'get',
      XHR2ExpressReqWrap(i.response)
    );
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`^${process.env.VUE_APP_MOCK_CONTEXT}${url}$`),
    type: type || 'get',
    response(req, res) {
      console.log(`request invoke:${req.path}`);
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      );
    },
  };
};

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response);
});
