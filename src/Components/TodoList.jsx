import React, { useContext } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList({ editTodo, deleteTodo, finishTodo }) {
  const list = useSelector((state) => {
    return state;
  });
  return (
    <>
      {console.log(list)}
      {list.map((e) => {
        return (
          <Todo
            todoData={e}
            checked={e.isFinished}
            key={e.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            finishTodo={finishTodo}
          />
        );
      })}
    </>
  );
}
