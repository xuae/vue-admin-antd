/**
 * 账号类操作
 */
import API from '@/api/API';

export default class Account extends API {
  // 登录
  static async login(data: any) {
    return await this.base.asyncRequest({
      uri: '/login',
      method: 'post',
      data: data,
      contentType: 'form',
    });
  }

  // 退出登录
  static async logout() {
    return await this.base.asyncRequest({
      uri: '/logout',
      method: 'post',
    });
  }

  // 测试
  static async test() {
    const result = await this.base.asyncRequest({
      uri: '/test',
      method: 'post',
      params: {
        a: 1,
      },
      data: {
        b: 2,
      },
      contentType: 'json',
    });
    return result.data;
  }
}
