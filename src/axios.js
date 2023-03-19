import axios from 'axios';

const baseURL = 'http://localhost:4444';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
