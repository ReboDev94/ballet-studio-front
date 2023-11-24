import { axiosInstance } from '@/common/http';
import {
  IDeleteAllStudentsGroupRequest,
  IGetGroupStudentsRequest,
  IGetGroupStudentsResponse,
} from '../interfaces';

const GET_ALL_STUDENTS = 'group-students/all-students/group/:groupId';
const DELETE_ALL_STUDENTS = 'group-students/remove-students/group/:groupId';

export const getAllStudentByGroupService = async (
  data: IGetGroupStudentsRequest,
) => {
  const { groupId, ...rest } = data;
  const response = await axiosInstance.get<IGetGroupStudentsResponse>(
    GET_ALL_STUDENTS.replace(':groupId', `${groupId}`),
    {
      params: { ...rest },
    },
  );
  return response;
};

export const deleteAllStudentsFromGroupService = async (
  data: IDeleteAllStudentsGroupRequest,
) => {
  const { groupId, ...rest } = data;
  const response = await axiosInstance.post(
    DELETE_ALL_STUDENTS.replace(':groupId', `${groupId}`),
    rest,
  );
  return response;
};
