import React, { useContext } from "react";
import Todo from "./Todo";
import todocontext from "../Context/todocontext";

export default function TodoList() {
  const { list } = useContext(todocontext);
  return (
    <>
      {list.map((e) => {
        console.log(e);
        return <Todo todoData={e} checked={e.isFinished} key={e.id} />;
      })}
    </>
  );
}
