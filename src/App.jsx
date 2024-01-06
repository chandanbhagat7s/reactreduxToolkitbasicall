import { useReducer, useState } from "react";
import TodoList from "./Components/TodoList";
import Todocontext from "./Context/todocontext";
import todoReducers from "./Reducers/todoReducers";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { bindActionCreators } from "redux";
import AddToDo from "./Components/AddToDo";

import {
  addTodo,
  editTodo,
  deleteTodo,
  finishTodo,
} from "./Actions/todoactions";

// now we will use BIND ACTION CREATOR
// fist we ware calling dispach directly then it would create problem it has access to execute any action anyware

function App() {
  const dispach = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishTodo },
    dispach
  );

  return (
    <>
      <AddToDo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        finishTodo={actions.finishTodo}
      />
    </>
  );
}

export default App;
