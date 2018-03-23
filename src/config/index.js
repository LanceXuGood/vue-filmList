const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://192.168.200.185:3001' : 'http://api.webcodelance.cn';

const config = {
  API_BASE_URL: API_BASE_URL
};
export default config;
