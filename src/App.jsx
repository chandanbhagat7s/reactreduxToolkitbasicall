import { useReducer, useState } from "react";
import AddToDo from "./Components/AddToDo";
import TodoList from "./Components/TodoList";
import Todocontext from "./Context/todocontext";
import todoReducers from "./Reducers/todoReducers";
// DONE USING CONTEXT API
// this context api just : we need to create context
// then we need to wrap the content whare we need with the created context with provider method and in value attribute/prop we need to pass the state what we want to provied access

// to use we just need to use 'useContext(CreatedContext)' hook and destructure the need value

// now we are going to combine it with useReducer hook

function App() {
  const [list, dispatch] = useReducer(todoReducers, []);

  return (
    <>
      <Todocontext.Provider value={{ list, dispatch }}>
        <AddToDo />
        <TodoList />
      </Todocontext.Provider>
    </>
  );
}

export default App;
