import { axiosInstance } from '@/common/http';
import {
  ICreateGroupResponse,
  IFormGroup,
  IGetGroupAllRequest,
  IGetGroupAllResponse,
} from '../interfaces';

const GET_ALL_GROUPS = 'group';
const CREATE_GROUP = 'group';
const UPDATE_GROUP = 'group/:groupId';
const DELETE_GROUP = 'group/:groupId';

export const getAllGroupService = async (data: IGetGroupAllRequest) => {
  if (!data.degree) delete data.degree;
  const response = await axiosInstance.get<IGetGroupAllResponse>(
    GET_ALL_GROUPS,
    { params: data },
  );
  return response;
};

export const deleteGroupService = async (id: number) => {
  const response = await axiosInstance.delete(
    DELETE_GROUP.replace(':groupId', `${id}`),
  );
  return response;
};

export const createGroupService = async (data: IFormGroup) => {
  if (data.id) delete data.id;
  const response = await axiosInstance.post<ICreateGroupResponse>(
    CREATE_GROUP,
    { ...data },
  );
  return response;
};

export const updateGroupService = async (data: IFormGroup) => {
  const { id, ...rest } = data;
  const response = await axiosInstance.patch(
    UPDATE_GROUP.replace(':groupId', `${id}`),
    { ...rest },
  );
  return response;
};
