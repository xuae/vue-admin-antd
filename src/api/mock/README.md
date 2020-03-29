# Mock 规范

- <a href='#directory'>文件结构</a>
- <a href='#standard'>代码规范</a>

## <h2 id='directory'>文件结构</h2>

```
├─account.js                 #账号类接口模拟数据
├─index.js                   #mock数据合集，启动mock配置
├─mock-server.js             #启动mock server配置
├─util.js                    #mock工具类
└─README.md                  #Mock文件说明
```

## <h2 id='standard'>代码规范</h2>

- 文件名都采用 kebab-case 的命名方式

- 文件名与 api 文件夹下的 ts 文件对应

- xxx.js 模拟数据文件模板

``` javascript
import Util from './util';

export default[
    Util.request({
        uri: '',
        method: '',
        response: config => {},
    }),
]
```
