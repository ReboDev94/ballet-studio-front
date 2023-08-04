import { axiosInstance } from '@/common/http';
import { getTokenStorage } from './';

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
