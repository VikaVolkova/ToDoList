import React from "react";
import { TextField, Button, Alert, CircularProgress } from "@mui/material";
import { Send } from "@mui/icons-material";
import s from "./index.module.css";
import palette from "../../palette";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosAdd } from "../../api";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todosAdd(todo));
    console.log(todo);
    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <div className={s.formBlock}>
      <form
        className={s.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="add-todo"
          label="addToDO"
          size="small"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, date: new Date() })
          }
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ marginLeft: "20px", backgroundColor: palette.primary }}
        >
          {todosState.addTodoStatus === "pending" ? (
            <CircularProgress size={24} />
          ) : (
            <Send />
          )}
        </Button>
      </form>
      {todosState.addTodoStatus === "rejected" ? (
        <Alert severity="error">{todosState.addTodoError}</Alert>
      ) : null}
      {todosState.addTodoStatus === "success" && alert ? (
        <Alert severity="success">Task has been added!</Alert>
      ) : null}
      {todosState.updateTodoStatus === "rejected" ? (
        <Alert severity="error">{todosState.updateTodoError}</Alert>
      ) : null}
      {todosState.updateTodoStatus === "success" && alert ? (
        <Alert severity="success">Task has been updated!</Alert>
      ) : null}
      {todosState.deleteTodoStatus === "rejected" ? (
        <Alert severity="error">{todosState.deleteTodoError}</Alert>
      ) : null}
      {todosState.deleteTodoStatus === "success" && alert ? (
        <Alert severity="success">Task has been deleted!</Alert>
      ) : null}
    </div>
  );
};

export default AddTodoForm;
