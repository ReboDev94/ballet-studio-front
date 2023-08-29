import { getSchoolService, saveSchoolService } from '@/ballet/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { schoolInitialData } from './initialState';
import { setDataSchoolAction } from './actions';
import { RootState } from '@/store';
import { FormSchool } from '@/ballet/interfaces';
import { ERROR_SAVE_DATA_SCHOOL, GET_SCHOOL_ERROR } from '@/ballet/constants';

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

export const saveSchoolThunk = createAsyncThunk(
  'school/saveSchoolThunk',
  async (dataSchool: FormSchool, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: { school },
      } = await saveSchoolService(dataSchool);
      dispatch(setDataSchoolAction(school));
      return school;
    } catch (error) {
      return rejectWithValue(ERROR_SAVE_DATA_SCHOOL);
    }
  },
);
