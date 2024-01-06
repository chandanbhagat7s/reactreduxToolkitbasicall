
export const addTodo = (text) => ({ type: "addTodo", payload: { todotext: text } })
export const editTodo = (id, editText) => ({
    type: "editTodo",
    payload: { todoId: id, todotext: editText },
})
export const deleteTodo = (id) => ({
    type: "deleteTodo",
    payload: { todoId: id },
})
export const finishTodo = (id, check) => ({
    type: "checkTodo",
    payload: { todoId: id, check },
})









