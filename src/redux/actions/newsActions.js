import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewsData = createAsyncThunk(
  'news/fetchNewsData',
  async () => {
    try {
      const response = await axios.get('/newsData.json');
      return response.data;
    } catch (error) {
      console.error("News fetch error:", error);
      throw error;
    }
  }
);
