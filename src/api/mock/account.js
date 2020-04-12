import Util from './util';

export default [
  Util.request({
    uri: '/login',
    method: 'post',
    response: config => {
      // console.log(config.body, config.query);
      const { account, password } = config.body;

      // mock error
      if (account !== 'admin' || password !== '123456') {
        return Util.responseError('账号或密码错误，admin/123456');
      }

      return Util.responseOk({
        id: '@id',
        nick: '@cname',
        account: account,
        email: '@email',
        phone: /^(13|14|15|17|18|19)[0-9]{9}$/,
        token: /\d{5,10}\/-2/,
      });
    },
  }),
  Util.request({
    uri: '/test',
    method: 'post',
    response: Util.responseOk(),
  }),
];
