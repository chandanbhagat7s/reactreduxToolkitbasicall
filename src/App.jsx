import { useState } from "react";
import AddToDo from "./Components/AddToDo";
import TodoList from "./Components/TodoList";

function App() {
  const [list, setList] = useState([]);
  function handleAddTodo(todoData) {
    console.log("came");
    setList([
      ...list,
      { id: list.length + 1, data: todoData, isFinished: false },
    ]);
  }
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

  return (
    <>
      <AddToDo addTodo={handleAddTodo} />
      <TodoList
        list={list}
        checkTodo={handleCheckTodo}
        editTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
