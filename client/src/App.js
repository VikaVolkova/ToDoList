import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Todos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
