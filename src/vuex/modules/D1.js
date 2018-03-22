// 此Model测试使用

// 获取mutation-type处理对应的state
import * as types from '../mutation-types';

// initial state
const state = {
  D1_data: [1, 2, 3]
};

// 根据type 设置当前的D1状态
const mutations = {
  [types.D1](state, payload) {
    state.D1_data.push(payload);
  }
};
export default {
  state,
  mutations
};
