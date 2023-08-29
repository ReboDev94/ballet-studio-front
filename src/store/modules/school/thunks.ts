import { getSchoolService } from '@/ballet/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { schoolInitialData } from './initialState';
import { RootState } from '@/store';
import { setDataSchoolAction } from './actions';
import { FormSchool } from '@/ballet/interfaces';

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
      return rejectWithValue('');
    }
  },
);

export const saveSchoolThunk = createAsyncThunk(
  'school/saveSchoolThunk',
  (dataSchool: FormSchool, { rejectWithValue, dispatch }) => {
    try {
      return null;
    } catch (error) {
      return rejectWithValue('');
    }
  },
);
