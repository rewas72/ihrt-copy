// publicationsActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPublicationsData = createAsyncThunk(
  'publications/fetchPublicationsData',
  async () => {
    try {
      const response = await axios.get('/publicationsData.json');
      return response.data;
    } catch (error) {
      console.error("Publications fetch error:", error);
      throw error;
    }
  }
);
