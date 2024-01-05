import React from "react";
import Todo from "./Todo";

export default function TodoList({ list, checkTodo, editTodo }) {
  return (
    <>
      {list.map((e) => {
        console.log(e);
        return (
          <Todo
            todoData={e}
            checked={e.isFinished}
            key={e.id}
            checkTodo={checkTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
}
