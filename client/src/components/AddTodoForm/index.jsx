import React from "react";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import s from "./index.module.css";
import palette from "../../palette";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todosAdd } from "../../api";

const AddTodoForm = () => {
  const dispatch = useDispatch();
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
    <>
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
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodoForm;
