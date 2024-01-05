import { useState } from "react";
import AddToDo from "./Components/AddToDo";
import TodoList from "./Components/TodoList";
import Todocontext from "./Context/todocontext";
// DONE USING CONTEXT API
// this context api just : we need to create context
// then we need to wrap the content whare we need with the created context with provider method and in value attribute/prop we need to pass the state what we want to provied access

// to use we just need to use 'useContext(CreatedContext)' hook and destructure the need value

function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <Todocontext.Provider value={{ list, setList }}>
        <AddToDo />
        <TodoList />
      </Todocontext.Provider>
    </>
  );
}

export default App;
