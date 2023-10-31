import { ICommonResponse, IMeta, IPaginateRequest } from '@/common/interfaces';
import { date } from 'yup';

export interface IStudent {
  id: number;
  name: string;
  dateOfBirth: string;
  address: string;
  avatar: string | undefined;
  dieseses: string[];
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  tutor: ITutor;
}

export interface ITutor {
  id: number;
  name: string;
  email: string;
  phone: string;
  celPhone: string;
  authorizePhotos: boolean;
}

export interface IGetStudentsRequest extends IPaginateRequest {
  name?: string;
}

export interface IDataStudents {
  data: IStudent[];
  meta: IMeta;
}

export interface IGetStudentsResponse extends ICommonResponse {
  students: IDataStudents;
}

export interface IDieseses {
  id: string;
  title: string;
}

export interface IFormNewUpdateStudent {
  id: number | undefined;
  name: string;
  dateOfBirth: Date;
  address: string;
  dieseses: IDieseses[];
  tutorCelPhone: string;
  tutorName: string;
  tutorEmail: string;
  tutorPhone: string;
  file: File | null;
}

export type IFormStudentType = keyof IFormNewUpdateStudent;
