import http from '../http';

export const getZhiHuNewsList=(params)=>{
    return http.get('/movie/in_theaters',{
        ...params
    });
};
