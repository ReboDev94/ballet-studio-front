export interface ISendEmailResetPassword {
  email: string;
}

export interface IResetPassword {
  email: string;
  token: string;
  password: string;
  confirmPassword: string;
}
