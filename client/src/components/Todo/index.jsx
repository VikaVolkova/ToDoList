import React from "react";
import s from "./index.module.css";
import { Typography, IconButton, Stack } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import moment from "moment";
import classNames from "classnames";
import palette from "../../palette";

const Todo = ({ todo }) => {
  return (
    <>
      <div
        className={classNames(
          s.todo,
          todo.isComplete ? s.isCompletedTask : null
        )}
      >
        <div>
          <Typography
            variant="subtitle1"
            className={todo.isComplete ? s.isCompletedText : null}
          >
            {todo.name}
          </Typography>
          <Typography variant="body2" className={s.grayStyle}>
            Author: {todo.author}
          </Typography>
          <Typography variant="body2" className={s.grayStyle}>
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </div>
        <div>
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <IconButton size="small">
              <CheckCircle sx={{ color: palette.success }} />
            </IconButton>
            <IconButton size="small">
              <Create sx={{ color: palette.primary }} />
            </IconButton>
            <IconButton size="small">
              <Delete sx={{ color: palette.warning }} />
            </IconButton>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Todo;
