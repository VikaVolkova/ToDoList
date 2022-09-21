import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  addTodoStatus: "",
  addTodoError: "",
  getTodosStatus: "",
  getTodosError: "",
  updateTodoStatus: "",
  updateTodoError: "",
  deleteTodoStatus: "",
  deleteTodoError: "",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
  devTools: true,
});

export default todosSlice.reducer;
