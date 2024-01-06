import { useContext, useState } from "react";
import todocontext from "../Context/todocontext";
import { useDispatch } from "react-redux";

export default function AddToDo({ addTodo }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(todoData) {
    dispatch({ type: "addTodo", payload: { todotext: text } });
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
