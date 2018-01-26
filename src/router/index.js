import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import FilDetail from '../pages/filmDetial.vue';
import Upload from '../pages/Upload.vue';
import demo1 from '../pages/demo1.vue';
import demo2 from '../pages/demo2.vue';
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
},
{
    path: '/upload',
    component: Upload
},
{
    path: '/demo1',
    component: demo1
},
{
    path: '/demo2',
    component: demo2
}
];

const router = new VueRouter({
    history: 'true',
    routes // （缩写）相当于 routes: routes
});
export default router;
