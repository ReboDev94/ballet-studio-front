import { ICommonResponse, IMeta, IPaginateRequest } from '@/common/interfaces';
import { IStudent } from './student.interfaces';

export interface IGroupStudent
  extends Omit<IStudent, 'deletedAt' | 'updatedAt' | 'createdAt'> {
  createdAtStudent: string;
}

export interface IDataGroupStudents {
  data: IGroupStudent[];
  meta: IMeta;
}

export interface IGetGroupStudentsResponse extends ICommonResponse {
  students: IDataGroupStudents;
}

export interface IGetGroupStudentsRequest extends IPaginateRequest {
  groupId: number;
  name?: string;
}

export interface IDeleteAllStudentsGroupRequest {
  groupId: number;
  students: number[];
}

export interface AddStudentsFromGroupForm {
  groupId: number | undefined;
  students: number[];
}

export interface IDataStudentsAreNotGroup {
  data: IStudent[];
  meta: IMeta;
}

export interface IGetAllStudentsAreNotGroupResponse extends ICommonResponse {
  students: IDataStudentsAreNotGroup;
}
