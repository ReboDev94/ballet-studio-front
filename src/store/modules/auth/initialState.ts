import { School, initialStateAuth } from '@/auth/interfaces';

export const userInitialData = {
  id: -1,
  name: '',
  email: '',
  phone: '',
  isOwner: false,
  isActive: false,
  roles: [],
  hasSchool: false,
  photo: undefined,
};

export const schoolInitialData: School = {
  id: -1,
  name: '',
  description: '',
  phone: '',
  address: '',
  certifications: [],
  directorName: '',
  logo: undefined,
};

const initialState: initialStateAuth = {
  isAuthenticated: false,
  user: userInitialData,
  school: schoolInitialData,
};

export type AuthState = typeof initialState;
export default initialState;
