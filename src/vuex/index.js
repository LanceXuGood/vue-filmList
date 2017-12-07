import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as getters from './getters';


// console log vuex
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
const debug = process.env.NODE_ENV === 'development' ? true : false;
export default new Vuex.Store({
    // actions,
    // getters,
    modules: {

    },
    // 是否开启调试模式
    strict: debug,
    // 插件
    plugins: debug ? [createLogger()] : []
});
