# API 规范

- <a href='#directory'>文件结构</a>
- <a href='#standard'>代码规范</a>

## <h2 id='directory'>文件结构</h2>

```
├─AxiosInterceptor.ts        #axios请求拦截函数，所有请求必须使用该函数
├─API.ts                     #公共请求封装类，请求类都基于该类
├─Response.ts                #接口返回基本数据
├─ResponseErrors.ts          #接口返回基本数据的状态信息
├─Account.ts                 #账号类有关的请求
├─README.md                  #API文件说明
│
└─mock                       #文件名都采用kebab-case的命名方式，文件名与ts文件对应
   ├─index.js                #mock数据合集
   ├─mock-server.js          #启动mock server配置
   ├─response.js             #mock数据基本返回格式
   └─xxx.js                  #模块xxx的mock数据
```

## <h2 id='standard'>代码规范</h2>

- 文件名首字母大写，采用 PascalCase 的命名方式

- Xxx.ts 模板 (api文件规范)

```
/**
 * 文件顶部注释
 * 注明该文件的用途
 */

import API from '@/api/API';

/**
 * 类名与文件名一致，格式：PascalCase(首字母大写)
 */
export default class Xxx extends API {
  // 接口注释
  static async test() {
    const result = await this.base.asyncRequest({
      uri: '',
      method: '',
      // 其他参数
    });
    // 其他代码
    return result.data;
  }
}
```
