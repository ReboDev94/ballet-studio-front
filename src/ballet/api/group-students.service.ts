import { axiosInstance } from '@/common/http';
import {
  AddStudentsFromGroupForm,
  IDeleteAllStudentsGroupRequest,
  IGetAllStudentsAreNotGroupResponse,
  IGetGroupStudentsRequest,
  IGetGroupStudentsResponse,
} from '../interfaces';

const GET_ALL_STUDENTS = 'group-students/all-students/group/:groupId';
const DELETE_ALL_STUDENTS = 'group-students/remove-students/group/:groupId';
const GET_ALL_STUDENTS_ARE_NOT_GROUP =
  'group-students/all-students-are-not/group/:groupId';

const ADD_STUDENTS_FOR_GROUP = 'group-students/add-students/group/:groupId';

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

export const getAllStudentsAreNotGroupService = async (
  data: IGetGroupStudentsRequest,
) => {
  const { groupId, ...rest } = data;
  const response = await axiosInstance.get<IGetAllStudentsAreNotGroupResponse>(
    GET_ALL_STUDENTS_ARE_NOT_GROUP.replace(':groupId', `${groupId}`),
    { params: { ...rest } },
  );
  return response;
};

export const addStudentsForGroupService = async (
  data: AddStudentsFromGroupForm,
) => {
  const { groupId, ...rest } = data;
  const response = await axiosInstance.post(
    ADD_STUDENTS_FOR_GROUP.replace(':groupId', `${groupId}`),
    {
      ...rest,
    },
  );
  return response;
};
