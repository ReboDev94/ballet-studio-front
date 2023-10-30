import { axiosInstance } from '@/common/http';
import { IGetStudentsRequest, IGetStudentsResponse } from '../interfaces';

const GET_ALL_STUDENTS = 'student';

export const getStudentService = async (data: IGetStudentsRequest) => {
  const response = await axiosInstance.get<IGetStudentsResponse>(
    GET_ALL_STUDENTS,
    { params: data },
  );
  return response;
};
