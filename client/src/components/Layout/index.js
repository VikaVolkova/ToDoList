import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { Container } from "@mui/material";
import s from "./index.module.css";

function Layout() {
  return (
    <>
      <NavBar />
      <main className={s.mainSection}>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Layout;
