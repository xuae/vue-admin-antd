/**
 * 账号类操作
 */
import AxiosInterceptor from '@/api/AxiosInterceptor';

export default class Account {
  static async login(data: any) {
    const res = await new AxiosInterceptor().request({
      uri: '/login',
      method: 'post',
      data: data,
      contentType: 'form',
    });
    return res.data;
  }
}
