import { initialStateAuth } from '@/auth/interfaces';

const initialState: initialStateAuth = {
  isAuthenticated: false,
  user: {
    id: -1,
    name: '',
    email: '',
    phone: '',
    isOwner: false,
    isActive: false,
    roles: [],
    hasSchool: false,
  },
};

export type AuthState = typeof initialState;
export default initialState;
