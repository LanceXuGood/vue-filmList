// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/normalize.scss';
import store from './vuex';

const VueInit =new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
console.log(VueInit);
