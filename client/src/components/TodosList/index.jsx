import React from "react";
import Todo from "../Todo";
import { Typography } from "@mui/material";
import s from "./index.module.css";

const TodosList = () => {
  return (
    <>
      <div className={s.todosStyle}>
        <Typography variant="h5">My tasks</Typography>
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default TodosList;
