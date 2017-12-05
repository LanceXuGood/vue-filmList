import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
},
{
    path: '/home',
    component: Home
}
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
export default router;
