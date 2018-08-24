import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/layout.vue';
import FilDetail from '@/pages/film-detial.vue';
import Upload from '@/pages/Upload.vue';
import demo1 from '@/pages/demo1.vue';
import demo2 from '@/pages/demo2.vue';
import Home from '@/pages/home.vue';
import Search from '@/pages/search.vue';
// const Home = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/home.vue');
// const FilDetail = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/filmDetial.vuee');
// const Upload = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/Upload.vue');
// const demo1 = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/demo1.vue');
// const demo2 = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/demo2.vue');
// const Home = () => import ('../pages/home.vue');
// const FilDetail = () =>  import ('../pages/filmDetial.vue');
// const Upload = () => import ('../pages/Upload.vue');
// const demo1 = () =>  import ('../pages/demo1.vue');
// const demo2 = () => import ('../pages/demo2.vue');
Vue.use(VueRouter);
const routes = [{
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/search',
      component: Search,
    },
  ]
},
{
  path: '/film-detail/:id',
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
  mode: 'history',
  routes: routes // （缩写）相当于 routes: routes
});
export default router;
