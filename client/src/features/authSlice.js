import { createSlice } from "@reduxjs/toolkit";
import { register } from "../api";
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
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
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
  },
  devTools: true,
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
