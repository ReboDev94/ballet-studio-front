import { ICommonResponse, IMeta, IPaginateRequest } from '@/common/interfaces';
import { TypeDegree } from '../constants';
import { ScheduleResponse, SchedulesValuesType } from './schedules.interfaces';

export interface IGetGroupAllResponse extends ICommonResponse {
  groups: IDataGroup;
}

export interface IGetGroupAllRequest extends IPaginateRequest {
  degree?: string;
  teacher?: string;
  schoolCycle?: number;
}

export interface ICreateGroupResponse extends ICommonResponse {}

export interface IGetGroupResponse extends ICommonResponse {
  group: OnlyGroup;
}

export interface IDataGroup {
  data: IGroupAtt[];
  meta: IMeta;
}

export interface IGroupAtt extends IGroup {
  expanded: boolean;
}

export interface IFormGroup {
  id: number | undefined;
  name: string;
  scheduleL: SchedulesValuesType[];
  scheduleM: SchedulesValuesType[];
  scheduleMI: SchedulesValuesType[];
  scheduleJ: SchedulesValuesType[];
  scheduleV: SchedulesValuesType[];
  scheduleS: SchedulesValuesType[];
  scheduleD: SchedulesValuesType[];
  schoolCycle: number;
  degree: TypeDegree;
  teacherId: number;
}

export type IFormGroupTypes = keyof IFormGroup;
export interface IGroup {
  id: number;
  name: string;
  schedules: ScheduleResponse[];
  schoolCycle: number;
  degree: TypeDegree;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  teacher: Teacher;
  slug: string;
  noStudents: number;
}

export interface OnlyGroup {
  id: number;
  name: string;
  slug: string;
  teacher: Teacher;
}

export interface Teacher {
  id: number;
  name: string;
}
