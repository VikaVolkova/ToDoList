import React from "react";
import s from "./index.module.css";
import { Typography, IconButton, Stack } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import palette from "../../palette";

const Todo = () => {
  return (
    <>
      <div className={s.todo}>
        <div>
          <Typography variant="subtitle1">Learn React</Typography>
          <Typography variant="body2" className={s.grayStyle}>
            Author: Vika
          </Typography>
          <Typography variant="body2" className={s.grayStyle}>
            Added: 2 days ago
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
