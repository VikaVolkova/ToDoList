import { createSlice } from "@reduxjs/toolkit";
import { getTodos, addTodo, updateTodo, deleteTodo, checkTodo } from "../api";

const initialState = {
  todos: [],
  addTodoStatus: "",
  addTodoError: "",
  getTodosStatus: "",
  getTodosError: "",
  updateTodoStatus: "",
  updateTodoError: "",
  checkTodoStatus: "",
  checkTodoError: "",
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
      };
    },
    [addTodo.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        addTodoStatus: "success",
        addTodoError: "",
      };
    },
    [addTodo.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "rejected",
        addTodoError: action.payload,
      };
    },
    [getTodos.pending]: (state) => {
      return {
        ...state,
        getTodosStatus: "pending",
        getTodosError: "",
      };
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        getTodosStatus: "success",
        getTodosError: "",
      };
    },
    [getTodos.rejected]: (state, action) => {
      return {
        ...state,
        getTodosStatus: "rejected",
        getTodosError: action.payload,
      };
    },
    [updateTodo.pending]: (state) => {
      return {
        ...state,
        updateTodoStatus: "pending",
        updateTodoError: "",
      };
    },
    [updateTodo.fulfilled]: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        updateTodoStatus: "success",
        updateTodoError: "",
      };
    },
    [updateTodo.rejected]: (state, action) => {
      return {
        ...state,
        updateTodoStatus: "rejected",
        updateTodoError: action.payload,
      };
    },
    [checkTodo.pending]: (state) => {
      return {
        ...state,
        checkTodoStatus: "pending",
        checkTodoError: "",
      };
    },
    [checkTodo.fulfilled]: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        checkTodoStatus: "success",
        checkTodoError: "",
      };
    },
    [checkTodo.rejected]: (state, action) => {
      return {
        ...state,
        checkTodoStatus: "rejected",
        checkTodoError: action.payload,
      };
    },
    [deleteTodo.pending]: (state) => {
      return {
        ...state,
        deleteTodoStatus: "pending",
        deleteTodoError: "",
      };
    },
    [deleteTodo.fulfilled]: (state, action) => {
      const currentTodos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
      return {
        ...state,
        todos: currentTodos,
        deleteTodoStatus: "success",
        deleteTodoError: "",
      };
    },
    [deleteTodo.rejected]: (state, action) => {
      return {
        ...state,
        deleteTodoStatus: "rejected",
        deleteTodoError: action.payload,
      };
    },
  },
  devTools: true,
});

export default todosSlice.reducer;
