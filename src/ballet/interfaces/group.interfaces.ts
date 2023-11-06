import { ICommonResponse, IMeta, IPaginateRequest } from '@/common/interfaces';

export interface IGetGroupAllResponse extends ICommonResponse {
  groups: IDataGroup;
}

export interface IGetGroupAllRequest extends IPaginateRequest {
  degree?: string;
  teacher?: string;
}

export interface IDataGroup {
  data: IGroupAtt[];
  meta: IMeta;
}

export interface IGroupAtt extends IGroup {
  expanded: boolean;
}

export interface IGroup {
  id: number;
  description: string;
  schedules: Schedule[];
  startDate: string;
  schoolCycle: string;
  degree: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  teacher: Teacher;
}

export interface Schedule {
  day: typeEnumDays;
  hour: string;
}

export enum Days {
  'L' = 'Lunes',
  'M' = 'Martes',
  'MI' = 'Miercoles',
  'J' = 'Jueves',
  'V' = 'Viernes',
  'S' = 'Sabado',
  'D' = 'Domingo',
}

export type typeEnumDays = keyof typeof Days;

export interface Teacher {
  name: string;
}
