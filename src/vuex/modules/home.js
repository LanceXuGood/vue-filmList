// 获取mutation-type处理对应的state
import * as types from '../mutation-types';
import _ from 'lodash';

// initial state
const state = {
    flimListData: {},
    isLoading: false,
    arr: []
};

// 根据type 设置当前的test状态
const mutations = {
    [types.HOME](state, data) {
        if (_.isEmpty(data)) {
            state.isLoading = true;
        } else {

            if (_.isLength(data.subjects)) {
                return;
            } else {
                state.isLoading = false;
                state.flimListData = data;
                state.arr.push(...data.subjects);
            }
        }
    }
};
export default {
    state,
    mutations
};
