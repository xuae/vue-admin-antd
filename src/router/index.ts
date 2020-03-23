import { ErrorHandler } from 'vue-router/types/router';
import Vue from 'vue';
import VueRouter, { RawLocation, Route, RouteConfig } from 'vue-router';

import Layout from '@/components/Layout.vue';

// 重写 router 的 push 方法，添加全局异常捕获
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(
  location: RawLocation,
  onComplete?: Function,
  onAbort?: ErrorHandler
) {
  if (onComplete || onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  }
  return (
    originalPush
      .call(this, location)
      // @ts-ignore
      .catch((err: Error) => {
        // 不需要输出报错信息，请注释掉
        console.log(err);
        return err;
      })
  );
};

Vue.use(VueRouter);

/**
 * 页面路由 + 侧边栏菜单配置
 *
 * vue-router 的基本配置项：
 * path: string
 * name?: string, // name 作为菜单的 key 值，唯一的，需要显示的菜单必须添加此数据
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
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403.vue'),
    meta: { hidden: true },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500.vue'),
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
        component: () => import('@/views/exception/403.vue'),
        meta: { title: '403', icon: 'exclamation-circle' },
      },
      // {
      //   path: 'redirect403Info',
      //   name: 'redirect403info',
      //   redirect: '/exception/403/test',
      //   component: () => import('@/views/exception/403.vue'),
      //   meta: { title: 'redirect to 403Info', icon: 'exclamation-circle' },
      // },
      // {
      //   path: '403/:id',
      //   name: '403Info',
      //   props: true,
      //   component: () => import('@/views/exception/403.vue'),
      //   meta: { title: '403Info', icon: 'exclamation-circle', hidden: true },
      // },
      {
        path: '404',
        name: 'exception404',
        component: () => import('@/views/exception/404.vue'),
        meta: { title: '404', icon: 'exclamation-circle' },
      },
      {
        path: '500',
        name: 'exception500',
        component: () => import('@/views/exception/500.vue'),
        meta: { title: '500', icon: 'exclamation-circle' },
      },
    ],
  },

  {
    path: '/menu',
    component: Layout,
    redirect: '/exception/403',
    name: 'menu',
    meta: { title: 'menu' },
    children: [
      {
        path: 'menu-1',
        name: 'menu-1',
        component: () => import('@/views/exception/500.vue'),
        meta: { title: 'menu-1' },
        children: [
          {
            path: 'menu-1-1',
            name: 'menu-1-1',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu-1-1' },
          },
          {
            path: 'menu-1-2',
            name: 'menu-1-2',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu-1-2' },
          },
        ],
      },
      {
        path: 'menu-2',
        name: 'menu-2',
        component: () => import('@/views/exception/500.vue'),
        meta: { title: 'menu-2' },
        children: [
          {
            path: 'menu-2-1',
            name: 'menu-2-1',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu-2-1' },
            children: [
              {
                path: 'menu-2-1-1',
                name: 'menu-2-1-1',
                component: () => import('@/views/exception/500.vue'),
                meta: { title: 'menu-2-1-1' },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: '/menu2',
    component: Layout,
    redirect: '/exception/403',
    name: 'menu2',
    meta: { title: 'menu2' },
    children: [
      {
        path: 'menu-1',
        name: 'menu2-1',
        component: () => import('@/views/exception/500.vue'),
        meta: { title: 'menu2-1' },
        children: [
          {
            path: 'menu-1-1',
            name: 'menu2-1-1',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu2-1-1' },
          },
          {
            path: 'menu-1-2',
            name: 'menu2-1-2',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu2-1-2' },
          },
        ],
      },
      {
        path: 'menu-2',
        name: 'menu2-2',
        component: () => import('@/views/exception/500.vue'),
        meta: { title: 'menu-2' },
        children: [
          {
            path: 'menu-2-1',
            name: 'menu2-2-1',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: 'menu-2-1' },
            children: [
              {
                path: 'menu-2-1-1',
                name: 'menu2-2-1-1',
                component: () => import('@/views/exception/500.vue'),
                meta: { title: 'menu-2-1-1' },
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

/**
 * 全局前置守卫
 * 参数或查询的改变并不会触发进入/离开的导航守卫
 */
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
