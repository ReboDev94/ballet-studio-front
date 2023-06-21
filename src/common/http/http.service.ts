import axios from 'axios';

const URL = import.meta.env.VITE_URL_SERVICES;

const axiosInstance = axios.create({
  baseURL: `${URL}`,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosInstance;