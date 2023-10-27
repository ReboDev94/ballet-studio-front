import { TypeRoles } from '@/auth/constants';

export interface INewOrUpdateUser {
  name: string;
  email: string;
  phone: string;
  roles: TypeRoles[];
}

export type INewOrUpdateUserTypes = keyof INewOrUpdateUser;
