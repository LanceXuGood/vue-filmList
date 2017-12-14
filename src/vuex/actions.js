import * as types from './mutation-types';
import * as Api from '../common/api/home';
// action 层级做请求处理




// 设置test状态值
export const setTestState = ({ commit, state }, payload) => {
    commit(types.TEST, payload);
};

export const setHomeState = async ({ commit, state }, payload) => {
    const data  = await Api.getDouBanFilmList(payload);
    data.subjects.forEach(item => {
        //9.4 => 4.7 四星半
        const ratingStar = item.rating.average / 2;
        item.rating.averageArr = [];
        if (String(ratingStar).indexOf('.') > -1) { //小数
            for (let a = 1; a <= 5; a++) {
                if (a < ratingStar) {
                    item.rating.averageArr.push({
                        star: 'full'
                    });
                } else if (a == Math.ceil(ratingStar)) {
                    item.rating.averageArr.push({
                        star: 'half'
                    });
                } else {
                    item.rating.averageArr.push({
                        star: 'none'
                    });
                }
            }
        } else { //整数
            for (let a = 1; a <= 5; a++) {
                if (a <= ratingStar) {
                    item.rating.averageArr.push({
                        star: 'full'
                    });
                } else {
                    item.rating.averageArr.push({
                        star: 'none'
                    });
                }
            }
        }
    });
    commit(types.HOME, data);
};
