import http from '../http';

export const getDouBanFilmList = (params) => {
  return http.get('/movie/in_theaters', {
    ...params
  });
};
