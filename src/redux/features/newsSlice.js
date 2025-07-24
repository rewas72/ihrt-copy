import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsData } from '../actions/newsActions';

const initialState = {
  news: [],
  newsTypes: [],
  years: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload.news;
        state.newsTypes = action.payload.newsTypes;
        state.years = action.payload.years;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default newsSlice.reducer;
