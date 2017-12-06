import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import FilDetail from '../pages/filmDetial.vue';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
},
{
    path: '/home',
    component: Home
},
{
    path: '/filmDetail/:id',
    component: FilDetail
}
];

const router = new VueRouter({
    history: 'true',
    routes // （缩写）相当于 routes: routes
});
export default router;
