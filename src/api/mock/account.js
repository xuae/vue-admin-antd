import Util from './util';

export default [
  Util.request({
    uri: '/login',
    method: 'post',
    response: config => {
      console.log(config.body, config.query);
      // const { username } = config.body;
      //
      // // mock error
      // if (username !== 'admin') {
      //   return Util.responseError('账号错误，必须是admin');
      // }

      return Util.responseOk({
        user: {
          email: '@email',
          userName: '@cname',
        },
        expire: '@now',
        sessionId: /\d{5,10}\/-2/,
      });
    },
  }),
];
