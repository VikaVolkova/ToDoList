import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}todos`, todo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}todos`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const { _id, name, author, isComplete, date } = todo;
      const response = await axios.put(`${baseURL}todos/${_id}`, {
        name,
        author,
        isComplete,
        date,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkTodo = createAsyncThunk(
  "todos/checkTodo",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${baseURL}todos/${_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseURL}todos/${_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
