import React from "react";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../api";
import { Box, CircularProgress, Typography } from "@mui/material";
import s from "./index.module.css";

const TodosList = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  console.log(todos);

  return (
    <>
      <div className={s.todosStyle}>
        <Typography variant="h5">
          {todos.length === 0 ? "No tasks" : "My tasks"}
        </Typography>
        {todosState.getTodosStatus === "pending" ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : null}
        {todos.map((todo) => (
          <Todo todo={todo} key={todo._id} setTodo={setTodo} />
        ))}
      </div>
    </>
  );
};

export default TodosList;
