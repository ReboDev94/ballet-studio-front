import { ICommonResponse, IMeta, IPaginateRequest } from '@/common/interfaces';
import { TypeDegree, typeEnumDays } from '../constants';

export interface IGetGroupAllResponse extends ICommonResponse {
  groups: IDataGroup;
}

export interface IGetGroupAllRequest extends IPaginateRequest {
  degree?: string;
  teacher?: string;
}

export interface ICreateGroupResponse extends ICommonResponse {}

export interface IDataGroup {
  data: IGroupAtt[];
  meta: IMeta;
}

export interface IGroupAtt extends IGroup {
  expanded: boolean;
}

export interface IFormGroup {
  id: number | undefined;
  description: string;
  scheduleL: string;
  scheduleM: string;
  scheduleMI: string;
  scheduleJ: string;
  scheduleV: string;
  scheduleS: string;
  scheduleD: string;
  schoolCycle: number;
  degree: TypeDegree;
  teacherId: number;
}

export type IFormGroupTypes = keyof IFormGroup;
export interface IGroup {
  id: number;
  description: string;
  schedules: Schedule[];
  schoolCycle: number;
  degree: TypeDegree;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  teacher: Teacher;
}

export interface Schedule {
  day: typeEnumDays;
  hour: string;
}

export interface Teacher {
  id: number;
  name: string;
}
