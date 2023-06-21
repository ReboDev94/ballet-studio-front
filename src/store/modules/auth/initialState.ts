import { initialStateAuth } from '@/auth/interfaces';

const initialState: initialStateAuth = {
  user: null,
};

export type AuthState = typeof initialState;
export default initialState;
