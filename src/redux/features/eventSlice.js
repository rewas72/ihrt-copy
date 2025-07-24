import { createSlice } from '@reduxjs/toolkit';
import { fetchEventData } from '../actions/eventActions';

const initialState = {
  events: [],
  eventTypes: [],
  years: [],
  filters: {
    eventType: 'all',  // filtre eventType için name değil 'all' string'i başlangıç olarak
    year: 'All',
  },
  pagination: {
    currentPage: 1,
    itemsPerPage: 6,
  },
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventTypeFilter: (state, action) => {
      state.filters.eventType = action.payload;
      state.pagination.currentPage = 1;
    },
    setYearFilter: (state, action) => {
      state.filters.year = action.payload;
      state.pagination.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events;
        state.eventTypes = action.payload.eventTypes;
        state.years = action.payload.years;
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setEventTypeFilter, setYearFilter, setCurrentPage } = eventSlice.actions;
export default eventSlice.reducer;
