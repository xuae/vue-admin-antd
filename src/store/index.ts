/**
 * 状态管理，全局变量
 *
 * @dependency vuex
 */

import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';

Vue.use(Vuex);

/**
 * 声明 root state
 */
export interface StateRoot {}

const modules: ModuleTree<StateRoot> = {};

/**
 * 将 store 文件夹下的所有ts文件(index.ts除外)，全部导入到modules里面
 * store 的 module 名就是文件名(不含后缀.ts)
 */
const files = require.context('.', false, /.ts$/);
files.keys().forEach(key => {
  const fileName = key.replace(/(\.\/|\.ts)/g, '');
  if (fileName === 'index') {
    return;
  }
  modules[fileName] = files(key);
});

export default new Vuex.Store<StateRoot>({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: modules,
  plugins: [],
});
