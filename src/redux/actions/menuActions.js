import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenuData = createAsyncThunk(
  'menu/fetchMenuData',
  async () => {
    try {
      const response = await axios.get('/menu.json');
      return response.data;
    } catch (error) {
      console.error("Menu fetch error:", error);
      throw error;
    }
  }
);
