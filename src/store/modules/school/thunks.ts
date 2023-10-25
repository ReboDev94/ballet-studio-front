import { AxiosError } from 'axios';
import {
  getSchoolService,
  saveSchoolService,
  updateSchoolService,
} from '@/ballet/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { schoolInitialData } from './initialState';
import { setDataSchoolAction } from './actions';
import { RootState } from '@/store';
import { FormSchool } from '@/ballet/interfaces';
import { ICommonError } from '@/common/interfaces';
import { ERROR_SAVE_DATA_SCHOOL, GET_SCHOOL_ERROR } from '@/ballet/constants';
import { setHasSchoolAction } from '../auth/actions';

export const getSchoolThunk = createAsyncThunk(
  'school/getSchoolThunk',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        auth: {
          user: { hasSchool },
        },
      } = getState() as RootState;
      let newSchool = schoolInitialData;
      if (hasSchool) {
        const {
          data: { school },
        } = await getSchoolService();
        newSchool = school;
      }
      dispatch(setDataSchoolAction(newSchool));
      return null;
    } catch (error) {
      return rejectWithValue(GET_SCHOOL_ERROR);
    }
  },
);

export const saveOrUpdateSchoolThunk = createAsyncThunk(
  'school/saveOrUpdateSchoolThunk',
  async (dataSchool: FormSchool, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        auth: {
          user: { hasSchool },
        },
      } = getState() as RootState;

      const {
        data: { school },
      } = !hasSchool
        ? await saveSchoolService(dataSchool)
        : await updateSchoolService(dataSchool);

      dispatch(setDataSchoolAction(school));
      dispatch(setHasSchoolAction(true));
      return school;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      const errors = error.response?.data.errors || ERROR_SAVE_DATA_SCHOOL;
      return rejectWithValue(errors);
    }
  },
);
