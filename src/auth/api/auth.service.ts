import { axiosInstance } from '@/common/http';
import {
  IConfirmEmail,
  IGetAllUsersRequest,
  IGetAllUsersResponse,
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IResetPassword,
  IUpdateUserResponse,
  IUserForm,
} from '@/auth/interfaces';
import { ICommonResponse } from '@/common/interfaces';

const LOGIN_URL = 'auth/login';
const REGISTER = 'auth/register';
const GET_USER_URL = 'auth/user';
const UPDATE_PROFILE = 'auth/update-profile';
const GET_ALL_USERS = 'auth/users';
const SEND_RESET_PASSWORD = 'auth/send/reset/password';
const UPDATE_PASSWORD = 'auth/reset/password';
const CONFIRM_EMAIL = 'auth/confirm/email';

export const loginService = async (data: ILoginRequest) => {
  const response = await axiosInstance.post<ILoginResponse>(LOGIN_URL, data);
  return response;
};

export const registerService = async (data: IRegisterRequest) => {
  const response = await axiosInstance.post<ICommonResponse>(REGISTER, data);
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
  let dataAux = {};
  let roles = '';
  if (data.roles && data.roles.length > 0) {
    roles = data.roles.join(',');
  }

  if (roles) {
    dataAux = { ...data, roles };
  } else {
    delete data.roles;
    dataAux = { ...data };
  }

  const response = await axiosInstance.get<IGetAllUsersResponse>(
    GET_ALL_USERS,
    {
      params: { ...dataAux },
    },
  );
  return response;
};

export const sendEmailResetPasswordService = async (email: string) => {
  const response = await axiosInstance.post<ICommonResponse>(
    SEND_RESET_PASSWORD,
    {
      email,
    },
  );
  return response;
};

export const updatePasswordService = async (data: IResetPassword) => {
  const response = await axiosInstance.post<ICommonResponse>(
    UPDATE_PASSWORD,
    data,
  );
  return response;
};

export const confirmEmailService = async (data: IConfirmEmail) => {
  const response = await axiosInstance.post(CONFIRM_EMAIL, data);
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
