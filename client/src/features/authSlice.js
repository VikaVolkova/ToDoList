import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "../api";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state, action) => {
      return {
        ...state,
        registerStatus: "pending",
        registerError: "",
      };
    },
    [register.fulfilled]: (state, action) => {
      const user = jwtDecode(action.payload);
      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id,
        registerStatus: "success",
        registerError: "",
      };
    },
    [register.rejected]: (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    },
    [login.pending]: (state, action) => {
      return {
        ...state,
        loginStatus: "pending",
        loginError: "",
      };
    },
    [login.fulfilled]: (state, action) => {
      const user = jwtDecode(action.payload);
      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id,
        loginStatus: "success",
        loginError: "",
      };
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    },
  },
  devTools: true,
});

export default authSlice.reducer;
