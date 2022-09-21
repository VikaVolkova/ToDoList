import React from "react";
import AddTodoForm from "../../components/AddTodoForm";
import TodosList from "../../components/TodosList";

const Todos = () => {
  return (
    <>
      <AddTodoForm />
      <TodosList />
    </>
  );
};

export default Todos;
