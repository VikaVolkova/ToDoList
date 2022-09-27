import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const baseURL = "http://localhost:5000/api/";

const setHeaders = () => {
  const headers = {
    headers: {
      "x-token": localStorage.getItem("token"),
    },
  };
  return headers;
};

const getUser = () => {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  return user;
};

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const user = getUser();
      const response = await axios.post(
        `${baseURL}todos`,
        { ...todo, author: user.name, uid: user._id },
        setHeaders()
      );
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
      const response = await axios.get(`${baseURL}todos`, setHeaders());
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
      const id = todo._id;
      const { name, author, isComplete, date, uid } = todo;
      const response = await axios.put(
        `${baseURL}todos/${id}`,
        { name, author, isComplete, date, uid },
        setHeaders()
      );
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
      const response = await axios.patch(
        `${baseURL}todos/${_id}`,
        {},
        setHeaders()
      );
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
      const response = await axios.delete(
        `${baseURL}todos/${_id}`,
        setHeaders()
      );
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
      toast.success("Welcome!");
      return token.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "todos/login",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${baseURL}user/login`, user);
      localStorage.setItem("token", token.data);
      toast.success("Welcome!");
      return token.data;
    } catch (error) {
      toast.error(error.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);
