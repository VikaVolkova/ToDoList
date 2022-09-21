import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import palette from "../../palette";
import s from "./index.module.css";

const Login = () => {
  return (
    <>
      <form noValidate className={s.formStyle}>
        <Typography variant="h5">Login</Typography>
        <TextField
          id="email"
          label="Enter email"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
        />
        <TextField
          id="password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: palette.primary, marginTop: "20px" }}
        >
          LOGIN
        </Button>
      </form>
    </>
  );
};

export default Login;
