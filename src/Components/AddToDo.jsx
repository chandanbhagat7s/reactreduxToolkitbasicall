import { useContext, useState } from "react";
import todocontext from "../Context/todocontext";

export default function AddToDo({ addTodo }) {
  const [text, setText] = useState("");
  const { setList, list } = useContext(todocontext);
  function handleAddTodo(todoData) {
    console.log("came");
    setList([
      ...list,
      { id: list.length + 1, data: todoData, isFinished: false },
    ]);
  }
  return (
    <>
      Add to do{" "}
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <input
        type="button"
        value="ADD"
        onClick={() => {
          handleAddTodo(text);
          setText("");
        }}
      />
    </>
  );
}
