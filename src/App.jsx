import { useReducer, useState } from "react";
import AddToDo from "./Components/AddToDo";
import TodoList from "./Components/TodoList";
import Todocontext from "./Context/todocontext";
import todoReducers from "./Reducers/todoReducers";
import { Provider } from "react-redux";
import store from "../store";
// DOING WITH THE REACT-REDUX
// install react-redux , redux

// creat the store with passing the reducer function in it and export it

// we need to pass the store in provider compoent

function App() {
  return (
    <>
      <Provider store={store}>
        <AddToDo />
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
