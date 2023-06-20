import axiosInstance from '../http/http.service';
import { getTokenStorage, removeTokenStorage } from './';

const addHeadersAuth = () => {
  const token = getTokenStorage();
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

const removeHeadersAuth = () => {
    delete axiosInstance.defaults.headers.common.Authorization;
};

export { addHeadersAuth, removeHeadersAuth };
