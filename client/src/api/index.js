import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:5000/api/";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}todos`, todo);
      toast.success("Task has been added!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
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
      toast.error(error.response?.data);
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
      toast.success("Task has been updated!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkTodo = createAsyncThunk(
  "todos/checkTodo",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${baseURL}todos/${_id}`);
      toast.success("Task has been completed!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseURL}todos/${_id}`);
      toast.success("Task has been deleted!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${baseURL}user/register`, user);
      localStorage.setItem("token", token.data);
      toast.success("User has been registered!");
      return token.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);
