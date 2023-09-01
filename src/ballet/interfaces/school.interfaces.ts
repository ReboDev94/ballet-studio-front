import { ICommonResponse } from '@/common/interfaces';

export interface IGetSchoolResponse extends ICommonResponse {
  school: School;
}

export interface IResponseSaveSchool extends ICommonResponse {
  school: School;
}

export interface School {
  id: number;
  name: string;
  description: string;
  phone: string;
  address: string;
  certifications: string[];
  directorName: string;
  logo: string | undefined;
}

export interface initialSchoolState {
  school: School;
}

/* form */
export interface FormSchool extends Omit<School, 'logo' | 'id'> {
  file: File | null;
}

export type SchoolTypes = keyof FormSchool;
