import Mock from 'mockjs';
import response from './response';

export default [
  {
    url: '/login',
    type: 'post',
    response: config => {
      // const { username } = config.body;
      //
      // // mock error
      // if (username !== 'admin') {
      //   return response.error('账号错误，必须是admin');
      // }

      return response.ok({
        user: {
          email: '@email',
          userName: '@cname',
        },
        expire: '@now',
        sessionId: /\d{5,10}\/-2/,
      });
    },
  },
  {
    url: '/logout',
    type: 'get',
    response: response.ok(),
  },
  {
    url: '/info',
    type: 'get',
    response: config => {
      // console.log(config);
      // const {id = null} = config.body;
      // console.log(id);

      return Mock.mock(
        response.ok({
          id: '@id',
          name: '@cname', // 姓名
          phone: /^1[34578]\d{9}$/, // 手机号
          email: '@email', // 邮箱
          idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 身份证号
        })
      );
    },
  },
];
