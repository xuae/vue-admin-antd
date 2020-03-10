/**
 * Axios 请求拦截器封装
 *
 * @dependency: axios
 */

import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  Method,
  ResponseType,
} from 'axios';

// 创建 axios 的实例，并对其设置默认值
const instance: AxiosInstance = Axios.create();
instance.defaults.baseURL = process.env.VUE_APP_URL;
instance.defaults.timeout = 15000;
instance.defaults.withCredentials = true; // 默认带上cookie

// 添加请求拦截器
instance.interceptors.request.use(
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
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// api 返回的数据接口
export interface Response<T = any> {
  statusCode: number;
  message: string;
  data: T;
}

// api 请求的数据接口
export interface RequestConfig<T = any> extends AxiosRequestConfig {
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data?: T;
  params?: T;
}

/**
 * Axois 的请求拦截函数
 * @param uri
 * @param method
 * @param data
 * @param responseType
 * @param contentType
 * @param config
 * @constructor
 */
function AxiosInstance<T, V = any, R = Response<T>>(
  uri: string,
  method: Method,
  data: V | null = null,
  responseType: ResponseType = 'json',
  contentType: 'json' | 'form' | 'file' = 'json',
  config?: RequestConfig<V>
): AxiosPromise<R> {
  const axiosConfig: AxiosRequestConfig = { ...config };
  axiosConfig.responseType = responseType;
  axiosConfig.method = method;
  axiosConfig.transformResponse = [
    (data: any): Response<T> => {
      // 对返回的 data 进行任意转换处理
      return JSON.parse(data);
    },
  ];

  const headers: any = axiosConfig.headers ? axiosConfig.headers : {};
  switch (contentType) {
    case 'json':
      headers['Content-Type'] = 'application/json;charset=utf-8';
      break;
    case 'form':
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      break;
    case 'file':
      headers['Content-Type'] = 'multipart/form-data';
      break;
  }
  axiosConfig.headers = headers;

  if (method === 'get' || method === 'GET') {
    axiosConfig.params = data;
  } else {
    axiosConfig.data = data;
  }

  return instance(uri, axiosConfig);
}

export default AxiosInstance;
