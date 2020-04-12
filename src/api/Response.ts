/**
 * 接口返回的基本类
 */
import ResponseErrors, { ResponseError } from '@/api/ResponseErrors';

export default class Response<T = any> {
  public statusCode: number;
  public message: string;
  public data: T | null | string;

  /**
   * 构造器
   * @param error
   * @param data
   */
  constructor(error?: ResponseError, data?: T) {
    if (!error) {
      error = ResponseErrors.OK;
    }
    this.statusCode = error.code;
    this.message = error.message;
    this.data = data ? data : null;
  }

  /**
   * set response error
   * @param error
   */
  public setError(error: ResponseError) {
    this.statusCode = error.code;
    this.message = error.message;
    return this;
  }

  /**
   * make response error
   * @param code
   * @param message
   */
  public makeError(code: number, message: string) {
    this.statusCode = code;
    this.message = message;
    return this;
  }

  /**
   * set messgae
   * @param message
   */
  public setMessage(message: string) {
    this.message = message;
    return this;
  }

  /**
   * set data
   * @param data
   */
  public setData(data: T | string) {
    this.data = data;
    return this;
  }

  public exception(e: Error) {
    this.setError(ResponseErrors.EXCEPTION).setMessage(e.message);
    if (e.stack) {
      this.setData(e.stack);
    }
    return this;
  }

  /**
   * is ok
   */
  public isOk() {
    return this.statusCode === ResponseErrors.OK.code;
  }
}

// api 返回的数据接口
export interface ResponseData<T = any> {
  statusCode: number;
  message: string;
  data: T;
}
