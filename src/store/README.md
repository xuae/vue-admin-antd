# Store 规范

- <a href='#directory'>文件结构</a>
- <a href='#standard'>代码规范</a>

## <h2 id='directory'>文件结构</h2>

```
├─index.ts                   #状态管理主文件，自动化导入其他同级的.ts文件作为module，文件名(不含后缀.ts)作为module名
├─sidebar.ts                 #框架左侧边栏配置
└─README.md                  #store文件说明
```

## <h2 id='standard'>代码规范</h2>

- xxx.ts 模板 (ts模块文件的规范)

```typescript
/**
 * 文件顶部注释
 * 注明该文件数据的用途
 */

import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { StateRoot } from '@/store/index';

/**
 * 声明数据类型接口
 * 接口名：State + 文件名，格式：PascalCase(首字母大写)
 */
interface StateXxx {
  xxx: string; // 字段注释
}  

/**
 * 是否使用命名空间
 * 建议设为 true
 * 值为 false 时，在 vue 文件中不能使用 namespace 获取该模块
 */
export const namespaced: Boolean = true;

/**
 * 数据默认值
 */
export const state: StateXxx = {
  xxx: '',
};

/**
 * getter 计算属性树
 */
export const getters: GetterTree<StateXxx, StateRoot> = {
  // getter 注释
  getterTest: (state, getters, rootState, rootGetters) => {
    return state.xxx;
  },
};

/**
 * mutation 方法树
 * 修改 state 数据
 * 只能是同步方法，异步方法请放入 actions 中，然后调用 mutation 中的方法修改数据
 * 方法名采用属性名的方式，格式：大写字母，下划线‘_’隔开
 * 方法中必须写明 payload 的类型
 */
export const mutations: MutationTree<StateXxx> = {
  // mutation 注释
  MUTATION_TEST: (state, payload: string) => {
    state.xxx = payload ? payload : 'mutation test';
  },
};

/**
 * action 方法树
 * 存放异步请求方法
 * 修改数据时，请调用 mutation 中的方法
 */
export const actions: ActionTree<StateXxx, StateRoot> = {};
```
   
- xxx.ts 模块在 vue 文件中的使用方法

```vue
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

// 在 store/xxx.ts 中设置 namespaced = true，才能使用以下方式
const xxxModule = namespace('xxx');

@Component
export default class XXX extends Vue {
  // 引入xxx模块的属性
  @xxxModule.State('xxx') xxx!: string;

  // 引入xxx模块的计算属性
  @xxxModule.Getter('getterTest') getterTest!:string;

  // 引入xxx模块的方法
  @xxxModule.Mutation('MUTATION_TEST') mutationTest!: Function;
};
```
