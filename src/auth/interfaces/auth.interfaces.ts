import { ICommonResponse } from '@/common/interfaces';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse extends ICommonResponse {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  isOwner: boolean;
  isActive: boolean;
  roles: Role[];
  hasSchool: boolean;
}

export interface Role {
  id: number;
  slug: string;
  name: string;
}


export interface IGetUserResponse extends ICommonResponse {
  user: User;
}

/* store */
export interface initialStateAuth {
  user: User | null;
}
