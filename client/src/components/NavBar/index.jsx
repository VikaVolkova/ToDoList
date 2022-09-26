import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import s from "./index.module.css";
import palette from "../../palette";
// import AuthNav from "../AuthNav";

const NavBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/login");
  };
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: palette.primary,
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
          {/* <AuthNav /> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
