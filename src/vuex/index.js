import Vue from 'vue';
import Vuex from 'vuex';

//actons和getters
import * as actions from './actions';
import * as getters from './getters';

//test 状态管理
import test from './modules/test';
import home from './modules/home';
import D1 from './modules/D1';
// console log vuex
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV === 'development' ? true : false;
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    test,
    home,
    D1
  },
  // 是否开启调试模式
  strict: debug,
  // 插件
  plugins: debug ? [createLogger()] : []
});
