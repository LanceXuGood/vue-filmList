import http from '../http';

// 获取豆瓣当前页面上映内容
export const getDouBanFilmList=(params)=>{
    return http.get('/movie/in_theaters',{
        ...params
    });
};
