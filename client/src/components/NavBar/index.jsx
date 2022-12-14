import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./index.module.css";
import palette from "../../palette";
import { logoutUser } from "../../features/authSlice";
import { toast } from "react-toastify";

const NavBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logoutUser(null));
    navigate("/login");
    toast.warning("Successfully logged out");
  };
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
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
          {auth._id ? (
            <React.Fragment>
              {matches ? (
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Hello, {state.auth.name}!
                </Typography>
              ) : null}
              <Button
                onClick={() => handleSignOut()}
                sx={{ color: "white" }}
                variant="text"
                size="medium"
              >
                SIGN OUT
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
