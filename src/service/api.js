import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rommielink-backend-git-main-yuris-projects-98f41e79.vercel.app/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
