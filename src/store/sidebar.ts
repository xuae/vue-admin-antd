/**
 * 左侧边栏的设置
 */

import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { StateRoot } from '@/store/index';

/**
 * 声明数据类型接口
 * 接口名：State + 文件名，格式：PascalCase(首字母大写)
 */
interface StateSidebar {
  // breakpoint 断点
  // {
  //   xs: '480px',
  //   sm: '576px',
  //   md: '768px',
  //   lg: '992px',
  //   xl: '1200px',
  //   xxl: '1600px',
  // }
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; // 触发响应式的断点
  collapsed: boolean; // 当前收起状态
  collapsedWidth: number; // 收缩宽度，设置为 0 会出现特殊 trigger
  collapsible: boolean; // 是否可收起
  defaultCollapsed: boolean; // 是否默认收起
  width: number | string; // 宽度
  theme: 'light' | 'dark'; // 主题颜色
  uniqueOpened: boolean; // 是否只保持一个子菜单的展开
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
export const state: StateSidebar = {
  breakpoint: 'lg', // 触发响应式的断点
  collapsed: false, // 当前收起状态
  collapsedWidth: 80, // 收缩宽度，设置为 0 会出现特殊 trigger
  collapsible: true, // 是否可收起
  defaultCollapsed: false, // 是否默认收起
  width: '240', // 宽度
  theme: 'dark', // 主题颜色
  uniqueOpened: false, // 是否只保持一个子菜单的展开
};

/**
 * getter 计算属性树
 */
export const getters: GetterTree<StateSidebar, StateRoot> = {
  // sidebar 当前收起状态
  sidebarCollapsed: (state, getters, rootState, rootGetters) => {
    return state.collapsed;
  },
};

/**
 * mutation 方法树
 * 修改 state 数据
 * 只能是同步方法，异步方法请放入 actions 中，然后调用 mutation 中的方法修改数据
 * 方法名采用属性名的方式，格式：大写字母，下划线‘_’隔开
 * 方法中必须写明 payload 的类型
 */
export const mutations: MutationTree<StateSidebar> = {
  // 设置 sidebar 的当前收起状态
  SET_COLLAPSED: (state, payload: boolean) => {
    state.collapsed = payload;
  },
};

/**
 * action 方法树
 * 存放异步请求方法
 * 修改数据时，请调用 mutation 中的方法
 */
export const actions: ActionTree<StateSidebar, StateRoot> = {};
