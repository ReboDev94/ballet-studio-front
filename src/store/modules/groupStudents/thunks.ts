import {
  addStudentsForGroupService,
  deleteAllStudentsFromGroupService,
  getAllStudentByGroupService,
  getAllStudentsAreNotGroupService,
} from '@/ballet/api';
import {
  FAILED_ADD_STUDENTS_FOR_GROUP,
  FAILED_DELETE_ALL_STUDENTS_FROM_GROUP,
  FAILED_GET_ALL_STUDENTS,
  FAILED_GET_ALL_STUDENTS_ARE_NOT_GROUP,
  SUCCESS_ADD_STUDENTS_FOR_GROUP,
  SUCCESS_DELETE_ALL_STUDENTS_FROM_GROUP,
} from '@/ballet/constants';
import {
  AddStudentsFromGroupForm,
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

export const getAllStudentsAreNotGroupThunk = createAsyncThunk(
  'group-students/getAllStudentsAreNotGroup',
  async (data: IGetGroupStudentsRequest, { rejectWithValue }) => {
    try {
      const {
        data: {
          students: { data: students, meta },
        },
      } = await getAllStudentsAreNotGroupService(data);
      return { students, meta };
    } catch (error) {
      return rejectWithValue(FAILED_GET_ALL_STUDENTS_ARE_NOT_GROUP);
    }
  },
);

export const addStudentsForGroupThunk = createAsyncThunk(
  'group-students/addStudentsForGroup',
  async (data: AddStudentsFromGroupForm, { rejectWithValue }) => {
    try {
      await addStudentsForGroupService(data);
      return SUCCESS_ADD_STUDENTS_FOR_GROUP;
    } catch (error) {
      return rejectWithValue(FAILED_ADD_STUDENTS_FOR_GROUP);
    }
  },
);
