import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import palette from "../../palette";
import s from "./index.module.css";
import { register } from "../../api";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <>
      <form noValidate className={s.formStyle} onSubmit={handleSubmit}>
        <Typography variant="h5">Register</Typography>
        <TextField
          id="name"
          label="Enter name"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          id="email"
          label="Enter email"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          id="password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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

export default Register;
