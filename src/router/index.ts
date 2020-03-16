import Vue from 'vue';
import VueRouter, { RawLocation, Route, RouteConfig } from 'vue-router';

import Layout from '@/components/Layout.vue';

Vue.use(VueRouter);

/**
 * 页面路由 + 侧边栏菜单配置
 *
 * vue-router 的基本配置项：
 * path: string
 * name?: string
 * component?: Component
 * components?: Dictionary<Component>
 * redirect?: RedirectOption, // 若当前根路由有 redirect，且子路由只有一个时，根菜单仅显示子路由
 * alias?: string | string[]
 * children?: RouteConfig[]
 * beforeEnter?: NavigationGuard
 * props?: boolean | Object | RoutePropsFunction
 * caseSensitive?: boolean
 * pathToRegexpOptions?: PathToRegexpOptions
 *
 * 侧边栏菜单显示的数据，需要定义在 meta 中，meta 约束如下：
 * meta?: {
 *   hidden?: boolean, // 是否隐藏此菜单，default: false
 *   title?: string, // 菜单的标题，若没有，则显示 path
 *   icon?: string, // ant design icon，全部图标：https://www.antdv.com/components/icon-cn/
 * }
 */
const routes: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: { hidden: true },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/500.vue'),
    meta: { hidden: true },
  },

  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: { title: '首页', icon: 'home' },
      },
    ],
  },

  {
    path: '/exception',
    component: Layout,
    redirect: '/exception/403',
    name: 'exception',
    meta: { title: '异常页', icon: 'exclamation-circle' },
    children: [
      {
        path: '403',
        name: 'exception403',
        component: () => import('@/views/403.vue'),
        meta: { title: '403', icon: 'exclamation-circle' },
      },
      {
        path: '404',
        name: 'exception404',
        component: () => import('@/views/404.vue'),
        meta: { title: '404', icon: 'exclamation-circle' },
      },
      {
        path: '500',
        name: 'exception500',
        component: () => import('@/views/500.vue'),
        meta: { title: '500', icon: 'exclamation-circle' },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach(
  (
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) => {
    // const isLogin = window.localStorage.getItem('sessionId');
    if (to.matched.length !== 0) {
      // if (!isLogin && !to.meta.noAuth && to.name !== 'login') {
      //   // 未登录，并且需要登录才能访问的页面，跳转至登录页。
      //   next({ name: 'login' });
      // }
      next();
    } else {
      // 路由不存在，跳转至404页面。
      next({ name: '404' });
    }
  }
);

export default router;
