import './assets/less/ant-theme.less'; // ant design 全局样式
import './assets/less/global.less'; // 自定义的全局样式
import './plugins/ant-design'; // ant design 插件
import App from './App.vue';
import router from './router';
import store from './store';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development'; // 生产环境下不允许使用 devtools

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
