// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/normalize.scss';

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
if(document.body.clientWidth===640 &&  window.devicePixelRatio===2 )document.querySelector('html').style.fontSize = '85px';
