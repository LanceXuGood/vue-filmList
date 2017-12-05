import http from '../http';

export const getZhiHuNewsList=()=>{
    return http.get('/movie/in_theaters');
};
