import { initialStateAuth } from '@/ballet/interfaces/auth';

const initialState: initialStateAuth = {
  user: null,
};

export type AuthState = typeof initialState;
export default initialState;
