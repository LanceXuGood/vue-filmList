import http from '../http';

export const getDouBanFilmDetail = (id, params) => {
  return http.get(`/movie/subject/${id}`, {
    ...params
  });
};
