import { getStudentService } from '@/ballet/api';
import { FAILED_GET_ALL_STUDENTS } from '@/ballet/constants';
import { IGetStudentsRequest } from '@/ballet/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllStudentThunk = createAsyncThunk(
  'student/getAllStudent',
  async (dataP: IGetStudentsRequest, { rejectWithValue }) => {
    try {
      const {
        data: {
          students: { data: students, meta },
        },
      } = await getStudentService(dataP);
      return { students, meta };
    } catch (error) {
      return rejectWithValue(FAILED_GET_ALL_STUDENTS);
    }
  },
);
