/**
 * 公用方法类
 */

export default class CommonMethod {
  /**
   * 检测是否是由 {} 或者 new Object() 创建的对象
   *
   * @param value
   */
  static isObject(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
}
