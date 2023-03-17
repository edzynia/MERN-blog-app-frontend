import axios from 'axios';

const instance = axios.create({
  baseUR: 'http://localhost:4444/',
});

export default instance;
