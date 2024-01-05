// now what is reducers , reducer are the simple function with the argument like 

// argument -> state -> action
// if-elseif-else ladder with the action name and its information play


function todoReducers(state, action) {
    if (action.type == 'addTodo') {
        let todoData = action.payload.todotext;
        return [
            ...state, { id: state.length + 1, data: todoData, isFinished: false }
        ]

    }

    else if (action.type == 'editTodo') {
        let todoData = action.payload.todotext;
        let todoId = action.payload.todoId;
        let temp = state.map(todo => {
            if (todo.id == todoId) {
                todo.data = todoData;
            }
            return todo
        })
        return [...temp]

    }

    else if (action.type == 'deleteTodo') {
        let todoId = action.payload.todoId;
        let temp = state.filter(todo => {
            return todo.id != todoId;
        })
        return [...temp]

    }
    else if (action.type == 'checkTodo') {
        let todoId = action.payload.todoId;
        let check = action.payload.check;
        let temp = state.map(todo => {
            if (todo.id == todoId) {
                todo.isFinished = check;
            }
            return todo;
        })
        return temp

    }
    return state;
}


export default todoReducers;













