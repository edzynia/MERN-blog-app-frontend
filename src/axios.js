import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
