
// 获取mutation-type处理对应的state
import * as types from '../mutation-types';

// initial state
const state = {
    flimListData: {}
};

// 根据type 设置当前的test状态
const mutations = {
    [types.HOME](state, data) {
        state.flimListData = data;
    }
};

export default {
    state,
    mutations
};
