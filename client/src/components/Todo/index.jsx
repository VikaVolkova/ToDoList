import React from "react";
import s from "./index.module.css";
import {
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Create, Delete, CheckCircle, DoDisturbOn } from "@mui/icons-material";
import moment from "moment";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import palette from "../../palette";
import { checkTodo, deleteTodo } from "../../api";

const Todo = ({ todo, setTodo }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setTodo(todo);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  return (
    <>
      <div
        className={classNames(
          todo.isComplete ? s.isCompletedTask : null,
          !matches ? s.smallTodo : s.todo
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
            <IconButton size="small" onClick={() => handleCheck(todo._id)}>
              {todo.isComplete ? (
                <DoDisturbOn sx={{ color: palette.warning }} />
              ) : (
                <CheckCircle sx={{ color: palette.success }} />
              )}
            </IconButton>
            <IconButton size="small" onClick={() => handleUpdate()}>
              <Create sx={{ color: palette.primary }} />
            </IconButton>
            <IconButton size="small" onClick={() => handleDelete(todo._id)}>
              <Delete sx={{ color: palette.warning }} />
            </IconButton>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Todo;
