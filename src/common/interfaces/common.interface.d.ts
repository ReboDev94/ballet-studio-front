export interface ICommonResponse {
  success: boolean;
}

export interface Messages {
  message: string;
  property: string;
}

export interface ICommonError {
  error?: string;
  statusCode: number;
  message: Messages[] | string;
}
