import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.133.52.186:3333',
});

export default api;
