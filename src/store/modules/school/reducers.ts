import { PayloadAction } from '@reduxjs/toolkit';
import { SchoolState } from './initialState';

const reducers = {
  setDataSchool: (
    state: SchoolState,
    { payload }: PayloadAction<SchoolState['school']>,
  ) => {
    state.school = payload;
  },
};

export default reducers;
