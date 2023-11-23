import { getAllStudentByGroupService } from '@/ballet/api';
import { FAILED_GET_ALL_STUDENTS } from '@/ballet/constants';
import { IGetGroupStudentsRequest } from '@/ballet/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllStudentByGroupThunk = createAsyncThunk(
  'group-students/getAllStudentByGroup',
  async (data: IGetGroupStudentsRequest, { rejectWithValue }) => {
    try {
      const {
        data: {
          students: { data: students, meta },
        },
      } = await getAllStudentByGroupService(data);
      return { students, meta };
    } catch (error) {
      return rejectWithValue(FAILED_GET_ALL_STUDENTS);
    }
  },
);
