import Vue from 'vue';
import VueRouter, { RawLocation, Route, RouteConfig } from 'vue-router';

import Layout from '@/components/Layout.vue';

Vue.use(VueRouter);

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
