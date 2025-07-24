// publicationsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchPublicationsData } from '../actions/publicationsActions';

const initialState = {
  publications: [],
  loading: false,
  error: null,
};

const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicationsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPublicationsData.fulfilled, (state, action) => {
        state.loading = false;
        state.publications = action.payload.publications;
      })
      .addCase(fetchPublicationsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default publicationsSlice.reducer;
