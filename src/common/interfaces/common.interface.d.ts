export interface ICommonResponse {
  success: boolean;
}

export interface Errors {
  message: string;
  property: string;
}

export interface ICommonError {
  statusCode: number;
  message: string;
  errors?: Errors[];
}
