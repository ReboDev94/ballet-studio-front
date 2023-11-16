import { FETCH_FAILED_SEARCH } from '@/common/constants';
import { axiosInstance } from '@/common/http';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchResultThunk = createAsyncThunk(
  'search',
  async (
    { query, params = {} }: { query: string; params?: object },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.get(query, {
        params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(FETCH_FAILED_SEARCH);
    }
  },
);
