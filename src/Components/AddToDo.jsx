import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddToDo({ addTodo }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

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
          addTodo(text);
          setText("");
        }}
      />
    </>
  );
}
