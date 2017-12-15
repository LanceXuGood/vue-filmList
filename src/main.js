// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 入口处引入状态
import store from './vuex';

import './assets/scss/normalize.scss';

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

