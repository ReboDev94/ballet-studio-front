import { axiosInstance } from '@/common/http';
import {
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  IUpdateUserResponse,
  IUserForm,
} from '@/auth/interfaces';

const LOGIN_URL = 'auth/login';
const GET_USER_URL = 'auth/user';
const UPDATE_PROFILE = 'auth/update-profile';

export const loginService = async (data: ILoginRequest) => {
  const response = await axiosInstance.post<ILoginResponse>(LOGIN_URL, data);
  return response;
};

export const getUserService = async () => {
  const response = await axiosInstance.get<IGetUserResponse>(GET_USER_URL);
  return response;
};

export const updateProfileService = async (data: IUserForm) => {
  const response = await axiosInstance<IUpdateUserResponse>({
    method: 'PATCH',
    url: UPDATE_PROFILE,
    data: generateFormDataUser(data),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

const generateFormDataUser = (data: IUserForm) => {
  const formData = new FormData();
  formData.append('name', data['name']);
  formData.append('phone', data['phone']);
  formData.append('email', data['email']);
  if (data['file']) formData.append('file', data['file']);
  return formData;
};
