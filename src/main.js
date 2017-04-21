// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Collapse,CollapseItem,Progress,Button, Select, Icon ,Row ,Col , Breadcrumb,
    BreadcrumbItem,} from 'element-ui';
Vue.config.productionTip = false;
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Select);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Collapse);
Vue.use(CollapseItem);
/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
