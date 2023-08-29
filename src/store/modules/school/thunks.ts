import { getSchoolService } from '@/ballet/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { schoolInitialData } from './initialState';
import { AppDispatch, RootState } from '@/store';
import { setDataSchoolAction } from './actions';

export const getSchoolThunk = createAsyncThunk<
  unknown,
  unknown,
  { dispatch: AppDispatch; state: RootState }
>(
  'school/getSchoolThunk',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        auth: {
          user: { hasSchool },
        },
      } = getState();
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
