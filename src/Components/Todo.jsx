import React, { useState } from "react";

export default function Todo({ todoData, checked, checkTodo, editTodo }) {
  const [editText, setEditText] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={(e) => {
            checkTodo(todoData.id, e.target.checked);
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
                  editTodo(todoData.id, editText);
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
        <input type="button" value="delete" />
      </div>
    </>
  );
}
