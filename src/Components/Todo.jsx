import React, { useContext, useState } from "react";
import todocontext from "../Context/todocontext";

export default function Todo({ todoData, checked }) {
  const [editText, setEditText] = useState("");
  const [edit, setEdit] = useState(false);

  const { list, setList } = useContext(todocontext);
  function handleCheckTodo(todoId, isFinished) {
    let tempList = list.map((todo) => {
      if (todo.id == todoId) {
        todo.isFinished = isFinished;
      }
      return todo;
    });
    setList(tempList);
  }

  function handleEditTodo(todoId, todoText) {
    let tempList = list.map((todo) => {
      if (todo.id == todoId) {
        todo.data = todoText;
      }
      return todo;
    });
    setList(tempList);
  }
  function handleDelete(todoId) {
    let tempList = list.filter((todo) => {
      return todo.id != todoId;
    });
    setList(tempList);
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={(e) => {
            handleCheckTodo(todoData.id, e.target.checked);
          }}
        />
        <span>
          {!edit ? (
            todoData.data
          ) : (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                }}
              />
              <input
                type="button"
                value="save"
                onClick={() => {
                  handleEditTodo(todoData.id, editText);
                  setEdit(false);
                }}
              />
            </>
          )}
        </span>
        {!edit && (
          <input
            type="button"
            value="Edit"
            onClick={() => {
              setEdit(true);
              setEditText(todoData.data);
            }}
          />
        )}
        <input
          type="button"
          value="delete"
          onClick={() => {
            handleDelete(todoData.id);
          }}
        />
      </div>
    </>
  );
}
