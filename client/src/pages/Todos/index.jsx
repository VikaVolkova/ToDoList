import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddTodoForm from "../../components/AddTodoForm";
import TodosList from "../../components/TodosList";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return <Navigate to="/login" />;

  return (
    <>
      <AddTodoForm todo={todo} setTodo={setTodo} />
      <TodosList setTodo={setTodo} />
    </>
  );
};

export default Todos;
