import { axiosInstance } from '@/common/http';
import { IGetSchoolResponse } from '@/ballet/interfaces';

const GET_SCHOOL_URL = 'school';

export const getSchoolService = async () => {
  const response = await axiosInstance.get<IGetSchoolResponse>(GET_SCHOOL_URL);
  return response;
};
