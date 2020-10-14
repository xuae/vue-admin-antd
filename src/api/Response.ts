/**
 * 接口返回的基本类
 */
import { message, Modal } from 'ant-design-vue';
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
   * 根据 api 接口返回的数据设置值
   * @param responseData
   */
  public setApiResponse(responseData: ResponseData<T>) {
    const { statusCode, message, data } = responseData;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    return this;
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
   * set message
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

  /**
   * exception error
   * @param e
   */
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

  /**
   * 顶部显示信息，会自动消失
   */
  public showMessage() {
    if (this.isOk()) {
      message.success(this.message || ResponseErrors.OK.message);
    } else {
      message.error(this.message || ResponseErrors.FAILED.message);
    }
  }

  /**
   * 弹窗显示信息，带确定按钮
   */
  public alertMessage() {
    if (this.isOk()) {
      Modal.success({
        title: this.message || ResponseErrors.OK.message,
      });
    } else {
      Modal.error({
        title: this.message || ResponseErrors.FAILED.message,
      });
    }
  }
}

// api 返回的数据接口
export interface ResponseData<T = any> {
  statusCode: number;
  message: string;
  data: T;
}
