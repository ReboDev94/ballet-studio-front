import { TypeRoles } from '@/auth/constants';

export interface INewOrUpdateUser {
  id: number | undefined;
  name: string;
  email: string;
  phone: string;
  roles: TypeRoles[];
}

export type INewOrUpdateUserTypes = keyof INewOrUpdateUser;
