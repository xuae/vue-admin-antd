import Vue from 'vue';
import VueRouter, { RawLocation, Route } from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/500.vue'),
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
