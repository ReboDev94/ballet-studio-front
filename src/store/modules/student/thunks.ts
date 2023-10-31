/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createStudentService,
  deleteStudentService,
  getStudentService,
} from '@/ballet/api';
import {
  FAILED_CREATE_STUDENT,
  FAILED_DELETE_STUDENT,
  FAILED_GET_ALL_STUDENTS,
  SUCCESS_CREATE_STUDENT,
  SUCCESS_DELETE_STUDENT,
} from '@/ballet/constants';
import {
  IFormNewUpdateStudent,
  IGetStudentsRequest,
} from '@/ballet/interfaces';
import { ICommonError } from '@/common/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

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

export const deleteStudentThunk = createAsyncThunk(
  'student/deleteStudent',
  async (studentId: number, { rejectWithValue }) => {
    try {
      await deleteStudentService(studentId);
      return SUCCESS_DELETE_STUDENT;
    } catch (error) {
      return rejectWithValue(FAILED_DELETE_STUDENT);
    }
  },
);

export const createStudentThunk = createAsyncThunk(
  'student/createStudent',
  async (data: IFormNewUpdateStudent, { rejectWithValue }) => {
    try {
      await createStudentService(data);
      return SUCCESS_CREATE_STUDENT;
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      const errors = error.response?.data.errors || FAILED_CREATE_STUDENT;
      return rejectWithValue(errors);
    }
  },
);
