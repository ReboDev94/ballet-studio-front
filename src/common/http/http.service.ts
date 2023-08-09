import axios from 'axios';

const URL = import.meta.env.VITE_URL_SERVICES;

export const axiosInstance = axios.create({
  baseURL: `${URL}`,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
