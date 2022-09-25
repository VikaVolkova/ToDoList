import React from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Send } from "@mui/icons-material";
import s from "./index.module.css";
import palette from "../../palette";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../api";

const AddTodoForm = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(updateTodo(todo));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

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
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
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
    </div>
  );
};

export default AddTodoForm;
