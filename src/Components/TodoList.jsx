import React, { useContext } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const list = useSelector((state) => {
    console.log("state is ", state);
    return state;
  });
  return (
    <>
      {console.log(list)}
      {list.map((e) => {
        console.log(e);
        return <Todo todoData={e} checked={e.isFinished} key={e.id} />;
      })}
    </>
  );
}
