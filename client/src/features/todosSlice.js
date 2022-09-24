import { createSlice } from "@reduxjs/toolkit";
import { getTodos, addTodo, updateTodo } from "../api";

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
    [addTodo.pending]: (state) => {
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
    [addTodo.fulfilled]: (state, action) => {
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
    [addTodo.rejected]: (state, action) => {
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
    [getTodos.pending]: (state) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "pending",
        getTodosError: "",
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "success",
        getTodosError: "",
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [getTodos.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "rejected",
        getTodosError: action.payload,
        updateTodoStatus: "",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [updateTodo.pending]: (state) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "pending",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [updateTodo.fulfilled]: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "success",
        updateTodoError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
    [updateTodo.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        updateTodoStatus: "rejected",
        updateTodoError: action.payload,
        deleteTodoStatus: "",
        deleteTodoError: "",
      };
    },
  },
  devTools: true,
});

export default todosSlice.reducer;
