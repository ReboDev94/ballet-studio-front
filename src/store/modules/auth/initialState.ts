import { initialStateAuth } from '@/auth/interfaces';

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

const initialState: initialStateAuth = {
  isAuthenticated: false,
  user: userInitialData,
};

export type AuthState = typeof initialState;
export default initialState;
