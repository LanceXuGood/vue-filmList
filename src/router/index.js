import Vue from 'vue';
import VueRouter from 'vue-router';
const Layout = () =>
    import (/* webpackChunkName: "LayoutComponent" */ '@/components/layout.vue');
const Home = () =>
    import (/* webpackChunkName: "HomeView" */ '@/pages/home.vue');
const FilDetail = () =>
    import (/* webpackChunkName: "FilmDetailView" */ '@/pages/film-detial.vue');
const Search = () =>
    import (/* webpackChunkName: "SearchView" */ '@/pages/search.vue');

// const demo1 = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/demo1.vue');
// const demo2 = () =>
//     import (/* webpackChunkName: "HomeView" */ '../pages/demo2.vue');

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
}];

const router = new VueRouter({
  mode: 'history',
  routes: routes // （缩写）相当于 routes: routes
});
export default router;
