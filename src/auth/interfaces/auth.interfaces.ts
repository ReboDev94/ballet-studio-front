import { ICommonResponse } from '@/common/interfaces';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse extends ICommonResponse {
  user: User;
  token: string;
}

export interface IGetUserResponse extends ICommonResponse {
  user: User;
}

export interface IUpdateUserResponse extends ICommonResponse {
  user: UserUpdate;
}

export interface UserUpdate {
  photo: string | undefined;
  name: string;
  phone: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  isOwner: boolean;
  isActive: boolean;
  roles: Role[];
  photo: string | undefined;
  hasSchool: boolean;
}

export interface Role {
  id: number;
  slug: string;
  name: string;
}

export interface IUserForm {
  name: string;
  phone: string;
  email: string;
  file: File | null;
}

export type UserTypes = keyof IUserForm;

export interface initialStateAuth {
  isAuthenticated: boolean;
  user: User;
}
