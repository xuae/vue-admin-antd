import './assets/less/ant-theme.less'; // ant design 全局样式
import './assets/less/global.less'; // 自定义的全局样式
import './plugins/antd'; // 全局注册 ant design 的组件
import App from './App.vue';
import router from './router';
import store from './store';
import Vue from 'vue';

import Rules from '@/utils/Rules';
Vue.prototype.$rules = Rules; // 全局注册验证规则

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development'; // 生产环境下不允许使用 devtools

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
/**
 * VUE_APP_MOCK is defined in .env.production or .env.development
 */
if (process.env.VUE_APP_MOCK === 'Mock') {
  const { mockXHR } = require('./api/mock');
  mockXHR();
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
