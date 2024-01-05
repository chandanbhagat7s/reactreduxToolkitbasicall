import { useState } from "react";

export default function AddToDo({ addTodo }) {
  const [text, setText] = useState("");
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
