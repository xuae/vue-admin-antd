/**
 * Axios 请求拦截器封装
 *
 * @dependency axios
 */

import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosTransformer,
  Method,
  ResponseType,
} from 'axios';
import CommonMethod from '@/utils/CommonMethod';
import Response, { ResponseData } from '@/api/Response';

/**
 * 转换请求数据使用，与 qs 类似
 * @example querystring.stringify(obj)，转换成 URLSearchParams 对象：key1=value1&ke2=value2
 */
const querystring = require('querystring');

/**
 * Axois 请求拦截类
 * 泛型：
 * T: 返回的数据类型
 * D: 请求的数据类型
 */
export default class AxiosInterceptor<T, D = any, R = ResponseData<T>> {
  public instance: AxiosInstance; // axios 实例

  /**
   * 构造器
   *
   * @param config
   */
  constructor(config?: AxiosRequestConfig) {
    this.instance = Axios.create(config);
    this.instance.defaults.baseURL = process.env.VUE_APP_BASE_API;
    this.instance.defaults.timeout = 15000;
    this.instance.defaults.withCredentials = true; // 默认带上cookie

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response;
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  /**
   * 公共请求方法
   *
   * @param options
   */
  public request(options: {
    uri: string; // 请求的 url 地址
    method?: Method; // 请求的方法
    data?: D; // 请求的需要带的数据，只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
    responseType?: ResponseType; // 返回数据的类型
    contentType?: ContentType; // 请求数据的类型
    config?: RequestConfig<D>; // axios 的配置选项
  }): AxiosPromise<R> {
    const {
      uri,
      method = 'get',
      data,
      params,
      responseType = 'json',
      contentType = 'json',
      config,
    } = options;

    const axiosConfig: AxiosRequestConfig = config ? { ...config } : {};
    axiosConfig.params = params;
    axiosConfig.data = data;
    axiosConfig.responseType = responseType;
    axiosConfig.method = method;
    axiosConfig.transformRequest = this.transformRequest(contentType);
    axiosConfig.transformResponse = this.transformResponse();
    axiosConfig.headers = this.transformHeaders(
      axiosConfig.headers,
      contentType
    );

    return this.instance(uri, axiosConfig);
  }

  /**
   * async 公共请求方法封装
   * @param options
   */
  public async asyncRequest(options: {
    uri: string; // 请求的 url 地址
    method?: Method; // 请求的方法
    data?: D; // 请求的需要带的数据，只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
    responseType?: ResponseType; // 返回数据的类型
    contentType?: ContentType; // 请求数据的类型
    config?: RequestConfig<D>; // axios 的配置选项
  }) {
    try {
      return await this.request(options);
    } catch (e) {
      const error = new Response().exception(e);
      return Promise.resolve({ data: error });
    }
  }

  /**
   * get 请求方法
   *
   * @param uri
   * @param options
   */
  public get(
    uri: string,
    options?: {
      params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
      responseType?: ResponseType; // 返回数据的类型
      contentType?: ContentType; // 请求数据的类型
      config?: RequestConfig<D>; // axios 的配置选项
    }
  ) {
    return this.request({
      uri,
      method: 'get',
      ...options,
    });
  }

  /**
   * post 请求方法
   *
   * @param uri
   * @param data
   * @param options
   */
  public post(
    uri: string,
    data?: D,
    options?: {
      params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
      responseType?: ResponseType; // 返回数据的类型
      contentType?: ContentType; // 请求数据的类型
      config?: RequestConfig<D>; // axios 的配置选项
    }
  ) {
    return this.request({
      uri,
      method: 'post',
      data,
      ...options,
    });
  }

  /**
   * put 请求方法
   *
   * @param uri
   * @param data
   * @param options
   */
  public put(
    uri: string,
    data?: D,
    options?: {
      params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
      responseType?: ResponseType; // 返回数据的类型
      contentType?: ContentType; // 请求数据的类型
      config?: RequestConfig<D>; // axios 的配置选项
    }
  ) {
    return this.request({
      uri,
      method: 'put',
      data,
      ...options,
    });
  }

  /**
   * delete 请求方法
   *
   * @param uri
   * @param options
   */
  public delete(
    uri: string,
    options?: {
      params?: any; // 即将与请求一起发送的 URL 参数，必须是一个无格式对象 (plain object) 或 URLSearchParams 对象
      responseType?: ResponseType; // 返回数据的类型
      contentType?: ContentType; // 请求数据的类型
      config?: RequestConfig<D>; // axios 的配置选项
    }
  ) {
    return this.request({
      uri,
      method: 'delete',
      ...options,
    });
  }

  /**
   * 对 headers 进行转换，添加自定义的请求头
   *
   * @param headers
   * @param contentType
   */
  protected transformHeaders(headers: any, contentType: ContentType) {
    headers = CommonMethod.isObject(headers) ? headers : {};
    headers['Content-Type'] = this.getContentType(contentType);
    return headers;
  }

  /**
   * 根据参数 contentType，获取请求头中需要的 Content-Type 的值
   *
   * @param contentType
   */
  protected getContentType(contentType: ContentType) {
    switch (contentType) {
      case 'json':
        return 'application/json;charset=utf-8';
      case 'form':
        return 'application/x-www-form-urlencoded';
      case 'file':
        return 'multipart/form-data';
      default:
        return 'application/json;charset=utf-8';
    }
  }

  /**
   * 对 data 进行任意转换处理
   * `transformRequest` 允许在向服务器发送前，修改请求数据
   * 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
   * 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
   *
   * @param contentType
   */
  protected transformRequest(contentType: ContentType): AxiosTransformer {
    return (data: any) => {
      switch (contentType) {
        case 'json':
          let jsonData = null;
          if (CommonMethod.isObject(data) || Array.isArray(data)) {
            jsonData = JSON.stringify(data);
          } else {
            console.error(
              'When Content-Type is json, data must be object or array'
            );
          }
          return jsonData;
        case 'form':
          return querystring.stringify(data);
        case 'file':
          const formData = new FormData();
          if (CommonMethod.isObject(data)) {
            for (const key in data) {
              formData.append(key, data[key]);
            }
          } else {
            console.error('When Content-Type is file, data must be object');
          }
          return formData;
        default:
          return data;
      }
    };
  }

  /**
   * 对返回的 data 进行任意转换处理
   */
  protected transformResponse(): AxiosTransformer {
    return (data: any): ResponseData<T> => {
      return typeof data === 'string' ? JSON.parse(data) : data;
    };
  }
}

// api 请求的类型枚举
type ContentType = 'json' | 'form' | 'file';

// api 请求的数据接口
interface RequestConfig<T = any> extends AxiosRequestConfig {
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data?: T;
}
