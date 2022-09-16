import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import s from "./index.module.css";
import { deepPurple } from "@mui/material/colors";

const NavBar = () => {
  const primary = deepPurple[400];
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/login");
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: primary,
        }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            <Link className={s.link} to="/">
              MyToDo
            </Link>
          </Typography>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            Hello, Name!
          </Typography>
          <Button
            onClick={() => handleSignOut()}
            sx={{ color: "white" }}
            variant="text"
            size="medium"
          >
            SIGN OUT
          </Button>
          <Button sx={{ color: "white" }} variant="text" size="medium">
            <Link to="/login" className={s.link}>
              SIGN IN
            </Link>
          </Button>
          <Button sx={{ color: "white" }} variant="text" size="medium">
            <Link to="/register" className={s.link}>
              SIGN UP
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
