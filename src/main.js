// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 入口处引入状态
import store from './vuex';
import VueLazyload from 'vue-lazyload';
import * as filter from "./common/filter";
import scrollReveal from "scrollreveal";

Vue.config.devtools = true;
Vue.config.performance = true;
Vue.prototype.scrollReveal = scrollReveal;

Vue.use(VueLazyload);

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
