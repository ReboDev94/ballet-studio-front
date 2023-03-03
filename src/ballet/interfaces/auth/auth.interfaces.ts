export interface initialStateAuth {
  user: User | null;
}

export interface User {
  success: boolean;
  id: number;
  name: string;
  email: string;
  phone: null;
  isOwner: boolean;
  isActive: boolean;
  roles: Role[];
  token: string;
}

export interface Role {
  id: number;
  slug: string;
  name: string;
}
