# vue-admin-antd
> 技术栈：Vue 全家桶，Typescript，Ant Design UI组件库

- <a href='#standard'>代码规范</a>
- <a href='#directory'>文件结构</a>
- <a href='#npm'>项目命令</a>

## <h2 id='standard'>代码规范</h2>

### 引入新模块，必须在使用的地方注释
``` javascript
/**
 * xxx
 *
 * @dependency xxx (npm | yarn 引入的依赖包名)
 * @dependency xxx
 */
```

### 代码有待改进，因各种原因未改需注释
``` javascript
// TODO
/**
 * xxx
 *
 * @todo xxx
 */
```

## <h2 id='directory'>文件结构</h2>

> Windows下，使用tree直接生成文件结构
>
> 虽然和Linux系统下相差很多，基本的还是可以使用的
> 
> 查看命令帮助
> ```
> D:\Projects\GitHub\vue-admin-antd>tree /?
> 以图形显示驱动器或路径的文件夹结构。
> 
> TREE [drive:][path] [/F] [/A]
> 
>    /F   显示每个文件夹中文件的名称。
>    /A   使用 ASCII 字符，而不使用扩展字符。
> ```
[^_^]: #图片在github上老是加载失败，特换成以上代码
[^_^]: #![tree命令](./src/assets/images/markdown/tree.png)

```
├─.browserslistrc            #browserslist配置
├─.env.development           #开发环境变量配置
├─.env.production            #生产环境变量配置
├─.eslintignore              #eslint ignore文件配置
├─.eslintrc.js               #eslint规范
├─.gitignore                 #git ignore文件配置
├─babel.config.js            #babel配置
├─package.json               #包管理文件
├─package-lock.json          #包管理文件
├─README.md                  #项目介绍
├─tsconfig.json              #typescript配置
├─vue.config.js              #vue配置
│
├─dist                       #项目打包文件夹
│
├─docs                       #项目文档打包文件夹
│
├─public                     #静态资源主目录，打包时，该目录下资源会不做特殊处理，copy到输出目录
│  ├─favion.ico              #网站小图标
│  └─index.html              #入口html文件
│
└─src                        #项目资源主目录
   ├─App.vue
   ├─main.ts                 #vue实例化
   ├─shims-tsx.d.ts          #tsx的声明
   ├─shims-vue.d.ts          #vue的声明
   │
   ├─api
   │  ├─AxiosInstance.ts     #axios请求拦截函数，所有请求必须使用该函数
   │  ├─Manager.ts           #管理员的api
   │  │
   │  ├─mock
   │  │  ├─index.js          #mock数据合集
   │  │  ├─mock-server.js    #启动mock server配置
   │  │  ├─response.js       #mock数据基本返回格式
   │  │  └─manager.js        #管理员的mock数据
   │  │
   │  └─types
   │     └─Manager.ts        #管理员的类型定义
   │
   ├─assets                  #静态文件
   │  ├─images               #图片文件
   │  │  ├─logo.png          #logo图片
   │  │  │
   │  │  └─markdown          #markdown中使用的图片
   │  │     └─tree.png       #tree帮助图片
   │  │
   │  └─less
   │     ├─ant-theme.less     #重置ant design样式
   │     ├─ant-vars.less      #ant design全局变量默认值
   │     └─global.less        #全局自定义样式
   │
   ├─components               #组件
   │  └─HelloWorld.vue        #测试组件
   │
   ├─plugins                  #插件
   │  ├─antd.ts               #按需引入ant design的组件和组件样式
   │  └─antdIcon.ts           #按需引入ant design的icon图标
   │
   ├─router                   #路由
   │  └─index.ts
   │
   ├─store                    #状态管理
   │  └─index.ts
   │
   └─views                    #视图
      ├─About.vue             #about页面
      └─Home.vue              #主页
```

## <h2 id="npm">项目命令</h2>

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for doc
```
npm run build:doc
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
