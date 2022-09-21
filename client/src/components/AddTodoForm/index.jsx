import React from "react";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import s from "./index.module.css";
import palette from "../../palette";

const AddTodoForm = () => {
  return (
    <>
      <form className={s.form} noValidate autoComplete="off">
        <TextField
          id="add-todo"
          label="addToDO"
          size="small"
          autoFocus
          fullWidth
        />
        <Button
          color="primary"
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
