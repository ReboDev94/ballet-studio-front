import { axiosInstance } from '@/common/http';
import {
  IGetAllUsersRequest,
  IGetAllUsersResponse,
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  IUpdateUserResponse,
  IUserForm,
} from '@/auth/interfaces';

const LOGIN_URL = 'auth/login';
const GET_USER_URL = 'auth/user';
const UPDATE_PROFILE = 'auth/update-profile';
const GET_ALL_USERS = 'auth/users';

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

export const getAllUsersService = async (data: IGetAllUsersRequest) => {
  if (!data.role) delete data.role;
  const response = await axiosInstance.get<IGetAllUsersResponse>(
    GET_ALL_USERS,
    {
      params: { ...data },
    },
  );
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
