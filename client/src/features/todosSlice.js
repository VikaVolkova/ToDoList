import { createSlice } from "@reduxjs/toolkit";
import { todosAdd } from "../api";

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
  extraReducers: {
    [todosAdd.pending]: (state) => {
      return {
        ...state,
        addTodoStatus: "pending",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [todosAdd.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        addTodoStatus: "success",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [todosAdd.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "rejected",
        addTodoError: action.payload,
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
  },
  devTools: true,
});

export default todosSlice.reducer;
