import { axiosInstance } from '@/common/http';
import { FormSchool, IGetSchoolResponse } from '@/ballet/interfaces';

const GET_SCHOOL_URL = 'school';
const SAVE_SCHOOL_URL = 'school';

export const getSchoolService = async () => {
  const response = await axiosInstance.get<IGetSchoolResponse>(GET_SCHOOL_URL);
  return response;
};

export const saveSchoolService = async (dataSchool: FormSchool) => {
  const response = await axiosInstance.post(SAVE_SCHOOL_URL, dataSchool);
  return response;
};
