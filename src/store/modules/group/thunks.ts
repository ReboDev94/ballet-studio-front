/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createGroupService,
  deleteGroupService,
  getAllGroupService,
  getGroupBySlugService,
  updateGroupService,
} from '@/ballet/api';
import {
  FAILED_CREATE_GROUP,
  FAILED_DELETE_GROUP,
  FAILED_GET_ALL_GROUPS,
  FAILED_GET_GROUP,
  FAILED_UPDATE_GROUP,
  SUCCESS_CREATE_GROUP,
  SUCCESS_DELETE_GROUP,
} from '@/ballet/constants';
import { IFormGroup, IGetGroupAllRequest } from '@/ballet/interfaces';
import { ICommonError } from '@/common/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const getAllGroupThunk = createAsyncThunk(
  'group/getAllGroup',
  async (data: IGetGroupAllRequest, { rejectWithValue }) => {
    try {
      const {
        data: {
          groups: { data: groups, meta },
        },
      } = await getAllGroupService(data);
      return { groups, meta };
    } catch (error) {
      return rejectWithValue(FAILED_GET_ALL_GROUPS);
    }
  },
);

export const getGroupThunk = createAsyncThunk(
  'group/getGroup',
  async (slug: string, { rejectWithValue }) => {
    try {
      const {
        data: { group },
      } = await getGroupBySlugService(slug);
      return group;
    } catch (error) {
      return rejectWithValue(FAILED_GET_GROUP);
    }
  },
);

export const deleteGroupThunk = createAsyncThunk(
  'group/deleteGroup',
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteGroupService(id);
      return SUCCESS_DELETE_GROUP;
    } catch (err) {
      return rejectWithValue(FAILED_DELETE_GROUP);
    }
  },
);

export const createOrUpdateGroupThunk = createAsyncThunk(
  'group/createOrUpdateGroup',
  async (data: IFormGroup, { rejectWithValue }) => {
    try {
      data.id ? await updateGroupService(data) : await createGroupService(data);
      return SUCCESS_CREATE_GROUP;
    } catch (err: any) {
      const MSG = data.id ? FAILED_UPDATE_GROUP : FAILED_CREATE_GROUP;
      const error: AxiosError<ICommonError> = err;
      const errors = error.response?.data.errors || MSG;
      return rejectWithValue(errors);
    }
  },
);
