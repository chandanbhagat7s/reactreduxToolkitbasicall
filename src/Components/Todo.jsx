import React, { useContext, useReducer, useState } from "react";
import todocontext from "../Context/todocontext";
import todoReducers from "../Reducers/todoReducers";

export default function Todo({ todoData, checked }) {
  const [editText, setEditText] = useState("");
  const [edit, setEdit] = useState(false);

  const { list, dispatch } = useContext(todocontext);

  return (
    <>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={(e) => {
            dispatch({
              type: "checkTodo",
              payload: { todoId: todoData.id, check: e.target.checked },
            });
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
                  dispatch({
                    type: "editTodo",
                    payload: { todoId: todoData.id, todotext: editText },
                  });
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
            dispatch({
              type: "deleteTodo",
              payload: { todoId: todoData.id },
            });
          }}
        />
      </div>
    </>
  );
}
