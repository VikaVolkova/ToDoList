import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import s from "./index.module.css";

function Layout() {
  return (
    <>
      <NavBar />
      <main className={s.mainSection}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
