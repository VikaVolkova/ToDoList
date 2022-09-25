import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todos from "./pages/Todos";
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
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
}

export default App;
