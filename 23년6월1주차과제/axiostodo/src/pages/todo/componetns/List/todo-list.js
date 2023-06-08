import { useState } from "react";
import OneTodo from "./one-todo";

const TodoList = ({ todoList, setTodoList, deleteTodo, updateTodo }) => {
  const handleUpdateTodo = (id, content) => {
    updateTodo(id, content);
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      deleteTodo(id);
    }
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          todo={todo}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
