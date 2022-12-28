import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/css/global.css';
import App from './App.vue';
import axios from 'axios'

import vueRouter from 'vue-router'
import router from './router'

Vue.use(ElementUI);
Vue.use(vueRouter);
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});