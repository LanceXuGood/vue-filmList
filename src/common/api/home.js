import http from '../http';

export const getDouBanFilmList = (params) => {
  return http.get('v2/movie/in_theaters', {
    ...params
  });
};
