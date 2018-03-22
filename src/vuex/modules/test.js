/**
 * @des: 测试vuex使用流程
 * @author nowitzki
 * @date 12.24
 */
// 获取mutation-type处理对应的state
import * as types from '../mutation-types';

// initial state
const state = {
  msg: ''
};

// 根据type 设置当前的test状态
const mutations = {
  [types.TEST](state, {
    msg
  }) {
    state.msg = msg;
  }
};

export default {
  state,
  mutations
};
