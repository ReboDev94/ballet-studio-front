/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createStudentService,
  deleteStudentService,
  getStudentService,
  updateStudentService,
} from '@/ballet/api';
import {
  FAILED_CREATE_STUDENT,
  FAILED_DELETE_STUDENT,
  FAILED_GET_ALL_STUDENTS,
  FAILED_UPDATE_STUDENT,
  SUCCESS_CREATE_STUDENT,
  SUCCESS_DELETE_STUDENT,
  SUCCESS_UPDATE_STUDENT,
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

export const createOrUpdateStudentThunk = createAsyncThunk(
  'student/createOrUpdateStudent',
  async (data: IFormNewUpdateStudent, { rejectWithValue }) => {
    try {
      data.id
        ? await updateStudentService(data)
        : await createStudentService(data);
      return data.id ? SUCCESS_UPDATE_STUDENT : SUCCESS_CREATE_STUDENT;
    } catch (err: any) {
      const MSG = data.id ? FAILED_UPDATE_STUDENT : FAILED_CREATE_STUDENT;
      const error: AxiosError<ICommonError> = err;
      const errors = error.response?.data.errors || MSG;
      return rejectWithValue(errors);
    }
  },
);
