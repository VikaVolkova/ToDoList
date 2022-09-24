import React, { useState } from "react";
import AddTodoForm from "../../components/AddTodoForm";
import TodosList from "../../components/TodosList";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  return (
    <>
      <AddTodoForm todo={todo} setTodo={setTodo} />
      <TodosList setTodo={setTodo} />
    </>
  );
};

export default Todos;
