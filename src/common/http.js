import axios from 'axios';
import config from '../config/index';

const instance = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 30000,
  // withCredentials:true,
  headers: {
    'Content-Type': 'application/json'
  }
});
// Add a request interceptor
instance.interceptors.request.use(function (opts) {
  return opts;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data;
  } else {
    return Promise.reject(response);
  }



}, function (error) {
  // 错误处理
  return Promise.reject(error);
});
const http = {
  request(opts) {

    return instance.request(opts);
  },
  get(url, params, opts) {
    opts = opts || {};
    opts.method = 'get';
    opts.url = url;
    if (params) {
      opts.params = params;
    }
    return this.request(opts);
  },

  delete(url, params, opts) {
    opts = opts || {};
    opts.method = 'delete';
    opts.url = url;
    if (params) {
      opts.params = params;
    }
    return this.request(opts);
  },

  post(url, data, opts) {
    opts = opts || {};
    opts.method = 'post';
    opts.url = url;
    if (data) {
      opts.data = data;
    }
    return this.request(opts);
  },

  put(url, data, opts) {
    opts = opts || {};
    opts.method = 'put';
    opts.url = url;
    if (data) {
      opts.data = data;
    }
    return this.request(opts);
  },

  patch(url, data, opts) {
    opts = opts || {};
    opts.method = 'patch';
    opts.url = url;
    if (data) {
      opts.data = data;
    }
    return this.request(opts);
  }
};

export default http;
