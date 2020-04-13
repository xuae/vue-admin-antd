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

  /**
   * 检测是否是数组
   *
   * @param value
   */
  static isArray(value: any) {
    // return Object.prototype.toString.call(value) === '[object Array]';
    return Array.isArray(value);
  }

  /**
   * 检测是否是纯数字
   * NaN 的类型是 number，值是 NaN
   *
   * @param value
   */
  static isNumber(value: any) {
    return typeof value === 'number' && !Number.isNaN(value);
  }

  /**
   * 检测是否是空值、空数组、空对象
   *
   * @param value
   */
  static isNull(value: any) {
    if (value === null || value === undefined || value === '') {
      return true;
    } else if (this.isArray(value) && value.length === 0) {
      return true;
    } else if (this.isObject(value) && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  }
}
