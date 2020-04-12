/**
 * 请求基本类
 */
import AxiosInterceptor from '@/api/AxiosInterceptor';

export default class API {
  // 基本请求
  static base = new AxiosInterceptor();
}
