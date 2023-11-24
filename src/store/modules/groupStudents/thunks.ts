import {
  deleteAllStudentsFromGroupService,
  getAllStudentByGroupService,
} from '@/ballet/api';
import {
  FAILED_DELETE_ALL_STUDENTS_FROM_GROUP,
  FAILED_GET_ALL_STUDENTS,
  SUCCESS_DELETE_ALL_STUDENTS_FROM_GROUP,
} from '@/ballet/constants';
import {
  IDeleteAllStudentsGroupRequest,
  IGetGroupStudentsRequest,
} from '@/ballet/interfaces';
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

export const deleteAllStudentsFromGroupThunk = createAsyncThunk(
  'group-students/deleteAllStudentsFromGroup',
  async (data: IDeleteAllStudentsGroupRequest, { rejectWithValue }) => {
    try {
      await deleteAllStudentsFromGroupService(data);
      return SUCCESS_DELETE_ALL_STUDENTS_FROM_GROUP;
    } catch (error) {
      return rejectWithValue(FAILED_DELETE_ALL_STUDENTS_FROM_GROUP);
    }
  },
);
