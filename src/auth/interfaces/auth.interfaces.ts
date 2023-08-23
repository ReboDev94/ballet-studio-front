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

export interface IGetSchoolResponse extends ICommonResponse {
  school: School;
}

export interface School {
  id: number;
  name: string;
  description: string;
  phone: string;
  address: string;
  certifications: string[];
  directorName: string;
  logo: string | undefined;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
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

export interface initialStateAuth {
  isAuthenticated: boolean;
  user: User;
  school: School;
}
