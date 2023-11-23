import { axiosInstance } from '@/common/http';
import {
  IGetGroupStudentsRequest,
  IGetGroupStudentsResponse,
} from '../interfaces';

const GET_ALL_STUDENTS = 'group-students/all-students/group/:groupId';

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
