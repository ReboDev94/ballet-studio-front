import { ISort } from './filters.interface';
export interface ICommonResponse {
  success: boolean;
}

export interface IPaginateRequest {
  page?: number;
  order?: ISort;
  take?: number;
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

export interface IMeta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
