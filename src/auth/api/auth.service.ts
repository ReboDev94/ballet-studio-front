import { axiosInstance } from '@/common/http';
import {
  IGetSchoolResponse,
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
} from '@/auth/interfaces';

const LOGIN_URL = 'auth/login';
const GET_USER_URL = 'auth/user';
const GET_SCHOOL_URL = 'school';

export const loginService = async (data: ILoginRequest) => {
  const response = await axiosInstance.post<ILoginResponse>(LOGIN_URL, data);
  return response;
};

export const getUserService = async () => {
  const response = await axiosInstance.get<IGetUserResponse>(GET_USER_URL);
  return response;
};

export const getSchoolService = async () => {
  const response = await axiosInstance.get<IGetSchoolResponse>(GET_SCHOOL_URL);
  return response;
};
