import { axiosInstance } from '@/common/http';
import { IGetGroupAllRequest, IGetGroupAllResponse } from '../interfaces';

const GET_ALL_GROUPS = 'group';

export const getAllGroupService = async (data: IGetGroupAllRequest) => {
  if (!data.degree) delete data.degree;
  const response = await axiosInstance.get<IGetGroupAllResponse>(
    GET_ALL_GROUPS,
    { params: data },
  );
  return response;
};
