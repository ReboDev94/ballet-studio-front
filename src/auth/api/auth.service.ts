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
  IUpdateStatus,
  IUpdateUserResponse,
  IUserForm,
} from '@/auth/interfaces';
import { ICommonResponse } from '@/common/interfaces';
import { INewOrUpdateUser } from '@/ballet/interfaces';

const LOGIN_URL = 'auth/login';
const REGISTER = 'auth/register';
const GET_USER_URL = 'auth/user';
const UPDATE_PROFILE = 'auth/update-profile';
const SEND_RESET_PASSWORD = 'auth/send/reset/password';
const UPDATE_PASSWORD = 'auth/reset/password';
const CONFIRM_EMAIL = 'auth/confirm/email';
const DELETE_USER = 'auth/user/:userId';
const UPDATE_STATUS_USER = 'auth/update-status-user/:userId';
const CREATE_USER = 'auth/user';
const UPDATE_USER = 'auth/user/:userId';
export const GET_ALL_USERS = 'auth/users';

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

export const deleteUserService = async (userId: number) => {
  const response = await axiosInstance.delete(
    DELETE_USER.replace(':userId', `${userId}`),
  );
  return response;
};

export const updateStatusUserService = async (data: IUpdateStatus) => {
  const { status, userId } = data;
  const response = await axiosInstance.patch(
    UPDATE_STATUS_USER.replace(':userId', `${userId}`),
    { status },
  );
  return response;
};

export const createUserService = async (data: INewOrUpdateUser) => {
  const response = await axiosInstance.post(CREATE_USER, data);
  return response;
};

export const updateUserService = async (data: INewOrUpdateUser) => {
  const { id, ...rest } = data;
  const response = await axiosInstance.patch(
    UPDATE_USER.replace(':userId', `${id}`),
    rest,
  );
  response;
};

const generateFormDataUser = (data: IUserForm) => {
  const formData = new FormData();
  formData.append('name', data['name']);
  formData.append('phone', data['phone']);
  formData.append('email', data['email']);
  if (data['file']) formData.append('file', data['file']);
  return formData;
};
