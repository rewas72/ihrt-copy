import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL || '/';

export const fetchEventData = createAsyncThunk(
  'event/fetchEventData',
  async ({ eventType = 'all', year = 'All' } = {}) => {
    try {
      const response = await axios.get('/eventsData.json');
      let data = response.data;

      if (eventType && eventType !== 'all') {
        data.events = data.events.filter(event => event.type === eventType);
      }

      if (year && year !== 'All') {
        data.events = data.events.filter(event => {
          const eventYear = new Date(event.time).getFullYear().toString();
          return eventYear === year;
        });
      }

      return data;
    } catch (error) {
      console.error("Event fetch error:", error);
      throw error;
    }
  }
);
