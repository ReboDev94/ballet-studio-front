import axiosInstance from '../../common/http/http.service';
import { ILoginRequest, ILoginResponse } from '../interfaces';

const LOGIN_URL = 'auth/login';

export const loginService = async (data: ILoginRequest) => {
  const response = await axiosInstance.post<ILoginResponse>(LOGIN_URL, data);
  return response;
};

// export const validateSessionService = async (token: string) => {
//   const response = await axiosInstance.post<ILoginResponse>(LOGIN_URL, data);
//   return response;
// };
