import { getAllGroupService } from '@/ballet/api';
import { FAILED_GET_ALL_GROUPS } from '@/ballet/constants';
import { IGetGroupAllRequest } from '@/ballet/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
