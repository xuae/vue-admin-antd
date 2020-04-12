// const responseOk = (data = null, length = 0) => {
//   if (length) {
//     return {
//       statusCode: '200',
//       msg: 'OK',
//       [`data|${length}`]: [data],
//     };
//   }
//   return {
//     statusCode: '200',
//     msg: 'OK',
//     data: data,
//   };
// };

export default class Util {
  /**
   * 模拟数据请求参数配置
   * @param uri
   * @param method
   * @param response
   * @return {{method: string, response: (function(): {statusCode: number, data: *, message: string}), uri}|undefined}
   */
  static request({
    uri,
    method = 'get',
    response = data => this.responseOk(data),
  } = {}) {
    if (uri) {
      return {
        uri,
        method,
        response,
      };
    }
    return undefined;
  }

  /**
   * 获取请求的地址
   * @param uri
   * @return {*}
   */
  static getRequestUri({ uri } = {}) {
    return uri ? uri : undefined;
  }

  /**
   * 获取请求的类型
   * @param method
   * @return {*}
   */
  static getRequestMethod({ method } = {}) {
    return method ? method : undefined;
  }

  /**
   * 获取请的返回数据
   * @param response
   * @return {*}
   */
  static getRequestResponse({ response } = {}) {
    return response ? response : undefined;
  }

  /**
   * 模拟数据返回格式
   * @param statusCode
   * @param message
   * @param data
   * @return {{statusCode: number, data: *, message: string}}
   */
  static response({ statusCode = 200, message = 'OK', data = null } = {}) {
    return {
      statusCode,
      message,
      data,
    };
  }

  /**
   * 模拟数据返回成功
   * @param data
   * @return {{statusCode: number, data: *, message: string}}
   */
  static responseOk(data) {
    return this.response({ data });
  }

  /**
   * 返回列表
   * @param config
   * @param listItem
   * @return {{statusCode: number, data: *, message: string}}
   */
  static responseList(config, listItem = { id: '@id' }) {
    const { pageSize = 10, pageNo = 1 } = config.body;
    const total = pageSize * 3.5;
    const listSize =
      total / pageNo > pageSize ? pageSize : total - pageSize * (pageNo - 1);

    return this.responseOk({
      total: total,
      pageNo: pageNo,
      pageSize: pageSize,
      size: listSize,
      [`list|${listSize}`]: [listItem],
    });
  }

  /**
   * 返回失败数据
   * @param message
   * @param data
   * @return {{statusCode: number, data: *, message: string}}
   */
  static responseError(message, data) {
    return this.response({
      statusCode: 500,
      message,
      data,
    });
  }
}
