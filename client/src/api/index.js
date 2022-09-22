import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/";

export const todosAdd = createAsyncThunk(
  "todos/todosAdd",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}todos`, todo);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
