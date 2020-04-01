/**
 * 账号类操作
 */
import AxiosInterceptor from '@/api/AxiosInterceptor';

export default class Account {
  static async login(data: any) {
    const result = await new AxiosInterceptor().request({
      uri: '/login',
      method: 'post',
      data: data,
      contentType: 'form',
    });
    return result.data;
  }
}
